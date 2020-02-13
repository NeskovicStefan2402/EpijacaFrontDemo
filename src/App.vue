<template>
  <div >
    <div v-if='!logged'>
      <transition appear enter-class="" enter-active-class="animated fadeIn" leave-class="" leave-active-class="animated slideInDown">
      <login></login>
      </transition>
    </div>
    <div v-else>
      <header-templ :user='user'></header-templ>
      <home-templ :user='user'></home-templ>
      <footer-templ></footer-templ>
    </div>
    
  </div>
</template>

<script>
  import Hme from './Hme.vue';
  import Header from './Header.vue';
  import Login from './Login.vue';
  import Footer from './Footer.vue';
  import {eventBus} from './main.js';
  export default{
    components:{
      'home-templ':Hme,
      'header-templ':Header,
      'login':Login,
      'footer-templ':Footer
    },
    data:function(){
      return {
        logged:false,
        stavke:[],
        user:{}
        }
    },
    created(){
      
      eventBus.$on('logged',(logg)=>{
        this.logged=logg;
      });
      eventBus.$on('user',(logg)=>{
        this.user=logg;
      });
    }
  }
</script>
<style>
p h1 h2 h3 h4 h5 a button{
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: center;
}
</style>
