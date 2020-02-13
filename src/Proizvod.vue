<template>
<div class="str">
    <div class="container strana">
      <div class="row">
        <div class="col-4">
          <img src="./assets/proizvodi.jpg" class="slika" />
        </div>
        <div class="col-8">
          <div class="row">
            <h3>{{proizvod.naziv}}</h3>
          </div>
          <br><br><br>
          <br />
          <br />
          <div class="row">
              <div class="col-3"></div>
            <div class="col-4"><p class="cena">{{proizvod.cena}} din.</p></div>
            <div class="col-3">
                <br>
              <div class="row ">
                <div class="col-3">
                  <button class="dugme form-control" @click="smanjiKolicinu">-</button>
                </div>
                <div class="col-5">
                  <p>{{proizvod.kolicina}}</p>
                </div>
                <div class="col-3">
                  <button class="dugme form-control" @click="dodajKolicinu">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-1">
        </div>
        <div class="col-4">
            <rate-star :rates='prosek'></rate-star>
        </div>
        <div class="col-1">
        </div>
        
        <div class="col-6">
          <button @click="addInCart" class="form-control korpaButton">
            Dodaj u korpu
            <img src="./assets/korpa.png" class="ikonica" />
          </button>
        </div>
      </div>
      <br><br>

      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto navbarProfile">
              <li class="nav-item ">
                <label class="nav-link"  @click="sastojci=true">
                  Sastojci
                </label>
              </li>
              <li class="nav-item">
                <label class="nav-link" @click="sastojci=false">Utisci</label>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <br>
      <div v-if="sastojci">
          <ul v-for='i in proizvod.sastojci' class="list-group">
              <li class="list-group-item">{{i}}</li>
              <br>
          </ul>
      </div>
      <div v-else>
        <div class="row" v-for="i in komentari">
            <transition appear enter-class="" enter-active-class="animated slideInUp">
                <komentari-templ v-bind:korisnickoIme="i.korisnickoIme" v-bind:rates="i.rates" v-bind:text="i.text"></komentari-templ>
            </transition>
          </div>
      </div>

    </div>
    </div>
</template>
<script>
import { eventBus } from "./main.js";
import Comment from './Comment.vue';
import RateStars from './RateStars.vue';

export default {
    components: {
        'komentari-templ': Comment,
        'rate-star':RateStars
    },
  data: function() {
    return {
      proizvod: {},
      sastojci:false,
      prosek:0,
      komentari:[
        {
          korisnickoIme:'Stefan98',
          text: 'mskanacknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnknsknakscnkanskcnakscnkaslcnLXKcCK',
          rates:3
        },
        {
          korisnickoIme:'Stefan96',
          text: 'mskanacknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnknsknakscnkanskcnakscnkaslcnLXKcCK',
          rates:4
        },
        {
          korisnickoIme:'Stefan99',
          text: 'mskanacknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnknsknakscnkanskcnakscnkaslcnLXKcCK',
          rates:2
        },
        {
          korisnickoIme:'Stefan97',
          text: 'mskanacknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnknsknakscnkanskcnakscnkaslcnLXKcCK',
          rates:5
        },
        {
          korisnickoIme:'Stefan95',
          text: 'mskanacknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnknsknakscnkanskcnakscnkaslcnLXKcCK',
          rates:3
        }
      ],
    };
  },
  created() {
    eventBus.$on("proizvod", ele => {
      this.proizvod = ele;
    });
    this.rating();

  },
  methods: {
      rating(){
      var suma=0;
      this.komentari.forEach((value, index) => {
        suma+=value.rates;
      });
      console.log(suma);
      this.prosek= suma / this.komentari.length;
    },
    dodajKolicinu() {
      if (this.proizvod.kolicina < 10) {
        this.proizvod.kolicina++;
      }
    },
    smanjiKolicinu() {
      if (this.proizvod.kolicina > 1) {
        this.proizvod.kolicina--;
      }
    },
    addInCart() {
      this.appendInJSONFile(this.proizvod);
    },
    appendInJSONFile(product) {
      const history = JSON.parse(window.localStorage.getItem("korpa.json"));
      var index = this.isExistsProizvod(history, product);
      if (index === -1) {
        history.push(product);
      } else {
        history[index].kolicina += product.kolicina;
      }
      const val = JSON.stringify(history);
      window.localStorage.setItem("korpa.json", val);
    },
    isExistsProizvod(lista, product) {
      for (let index = 0; index < lista.length; index++) {
        if (lista[index].naziv === product.naziv) {
          return index;
        }
      }
      return -1;
    }
  }
};
</script>
<style scoped>
.korpaButton {
  background-color: green;
  color: white;
}
.dugme {
  border-radius: 20px;
  height: 40px;
  width: 40px;
  outline: none;
  background-color: green;
  color: white;
}
.ikonica {
  height: 20px;
  width: 20px;
}
.slika {
  height: 300px;
  width: 300px;
}
.strana {
  margin-top: 50px;
}
.str{
    margin-left: 40px;
    margin-right: 40px;
    background-color: white;
}
p.cena{
    font-size: 20px;
    background-color: red;
    padding: 30px;
    color: white;
    height: 100px;
    border-radius: 20px;
    width: 150px;
    text-align: center;
}
.counter{
    border-radius:10px;
    border-width: 1px;
    border-style: solid; 
}
.navbar{
    background-color: rgb(104, 96, 124) !important;
    width: 100%;
    border-radius: 10px;
    color: white !important;
}
.list-group-item{
    background-color: aqua;
    width: 30%;
}
.navbar label{
    color: white !important;
    font-family: 'Lobster', cursive;
    margin-left: 200px;
    margin-right: 200px;
}
</style>