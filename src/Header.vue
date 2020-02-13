<template>
  <div>
    <!-- <div >
      <img class='nadSlika' src='./assets/nadSlika.jpg' style="margin-top:50px;">
    </div> -->
  <div class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
      <a class="navbar-brand" href="#"  ><img src='./assets/epijaca.png' class="slika"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click="about">
              O platformi
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="shop">Kupovina</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">      
            <label class="user" href='#' @click='profile'>{{user.username}}</label>
        </form>
        <form class="form-inline my-2 my-lg-0">      
            <img src='./assets/korpa.png' class="slika"  @click="cart">
            <p class="brojac">{{brojac}}</p>
        </form>
          <form class="form-inline my-2 my-lg-0">
        
            <img src='./assets/logout.png' class="slika" @click="odjava">
        </form>
      </div>
    </nav>
    
  </div>
  </div>
</template>
<script>
import { eventBus } from "./main.js";
export default {
  props:['user'],
  data:function(){
    return{
      brojac:0,
      loggedUser:{}
    }
  },
  methods: {
    odjava() {
      const val=JSON.stringify([]);
      window.localStorage.setItem('korpa.json', val);
      eventBus.$emit("logged", false);
    },
    about(){
      eventBus.$emit("about", 'about');  
    },
    profile(){
      eventBus.$emit("about", 'profile');    
    },
    cart(){
      eventBus.$emit("about", 'cart');    
    },
    shop(){
      eventBus.$emit("about", 'shop');    
    }
  },
  created(){
    setInterval(() => {
      const history=JSON.parse(window.localStorage.getItem('korpa.json'));
      this.brojac=history.length;    
    }, 1000);
      this.loggedUser=this.user;
  }
};
</script>
<style scoped>
#korpa {
  margin-right: 0px;
}
button {
  margin-right: 20px;
  background-color: white;
  outline: 0;
  border: 0;
}
.slika {
    margin-left: 50px;
    height: 30px;
    width: 30px;
}
.nadSlika{
  width: 100%;
  height: 200px;
}
.navbar{
    background-color: #32580f !important;
  }
.navbar a{
    color: white !important;
    font-family: 'Lobster', cursive;
    margin-left: 30px;
}
.glavna{
  height: 1000px;
}
.brojac{
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
}
label{
  color:white;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  margin-top: 7px;
}
</style>