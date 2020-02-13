<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img src="./assets/profile.png" />
          <div class="row odeljak" >
            <div class="col-10 ">
              <rate-star :rates='prosek'></rate-star>
            </div>
            <div class="col-2">
              <h3>{{prosek}}</h3>
            </div>
          </div>
        </div>
        <div class="col-sm-8 ">
            <div class="odeljak">
                <h3>{{user.firma}}</h3>
                <h4>{{user.ime}} {{user.prezime}}</h4>
                
            </div>
            <button class="form-control">Izmeni profil</button>
        </div>
        
      </div>
      <hr />
      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto navbarProfile">
              <li class="nav-item active">
                <a class="nav-link"  @click="about='proizvodi'">
                  Proizvodi
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="about='komentari'">Utisci</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div  v-if="about=='proizvodi'">
     <transition appear enter-class="" enter-active-class="animated slideInUp" >      
     <div class="row">
        <div class="col-sm-4" v-for="i in proizvodi" >
            <kartica v-bind:naziv="i.naziv" v-bind:cena="i.cena+'din'" ></kartica>
          
        </div>
        <div class="col-sm-4">
           <img src='./assets/add.png' class="dodatna">
        </div>
      </div>
      </transition>
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
import Kartica from "./Kartica.vue";
import Comment from './Comment.vue';
import RateStars from './RateStars.vue';
import {eventBus} from './main.js';
export default {
  props:['user'],
  components: {
    kartica: Kartica,
    'komentari-templ': Comment,
    'rate-star':RateStars
  },
  created(){
    console.log(this.user.firma);
    this.$http.post('vratiProizvodeZaFirmu',{'firma':this.user.firma}).then(
                response=>{
                    return response.json();
                }).then(
                    data=>{
                      console.log(data['Proizvodi:']);
                        this.proizvodi=data['Proizvodi'];
                        this.rating();});
  },
  data: function() {
    return {
      proizvodi:[],
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
      about:'proizvodi',
      porudzbine: [],
      prosek:0
    };
  },
  methods:{
    rating(){
      var suma=0;
      this.komentari.forEach((value, index) => {
        suma+=value.rates;
      });
      console.log(suma);
      this.prosek= suma / this.komentari.length;
    }
  }
  
};
</script>
<style scoped>
div {
  background-color: white;
  text-align: center;
  padding: 20px;
}
ul {
  list-style-type: none;
}
h3,
h4 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.navbar {
  width: 100%;
  height: 50px;
  background-color: green;
}
.odeljak {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
button{
    background-color: #32580f !important;
    color: white !important;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.dodatna{
  height: 130px;
  width: 130px;
  margin-top: 140px;
}
</style>