<template>
    <div >
        <transition appear enter-class="" enter-active-class="animated slideInRight" leave-class="" leave-active-class="animated slideOutLeft">   
            <about v-if="about=='about'"></about>
            <profile v-else-if="about=='profile'" :user='user'></profile>    
            <cart v-else-if="about=='cart'"></cart>
            <shop v-else-if="about=='shop'" :user='user'></shop>
            <proizvod v-else-if="about=='proizvod'" ></proizvod>
            <buy v-else-if="about=='buy'" :user='user'></buy>
            <h1 v-else>Ne radi</h1>
        </transition>
    </div>
</template>
<script>
import About from './About.vue';
import Profile from './Profile.vue';
import Cart from './Cart.vue';
import Shop from './Shop.vue';
import Proizvod from './Proizvod.vue';
import Buy from './BuyProcess.vue';

import {eventBus} from './main.js';
export default {
    props:['user'],
    data:function(){
        return {about:'about'
        }
    }, 
    components:{
      'about':About,
      'profile':Profile,
      'cart':Cart,
      'shop':Shop,
      'proizvod':Proizvod,
      'buy':Buy
    },
    created(){
        eventBus.$on('about',(about)=>{
            this.about=about;
            console.log(this.about);
        });
        
    }
}
</script>
<style scoped>
    div {
  background-color: white;
  text-align: center;
  padding: 20px;
}
</style>
