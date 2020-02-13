<template>
  <div>
    <div class="container">
      <div class="row" style="margin-top:50px;">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{width:progres*12+'px'}">
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <transition appear leave-class leave-active-class="animated rotateOutDownLeft">
            <page1 v-if="progres===0" :user='user'></page1>
          </transition>
          <transition appear leave-class leave-active-class="animated rotateOutDownLeft">
            <page2 v-if="progres===33"></page2>
          </transition>
          <transition appear leave-class leave-active-class="animated rotateOutDownLeft">
            <page3 v-if="progres===66"></page3>
          </transition>
            <br />
            <div class="alert alert-info" role="alert" v-if="progres===100">
              <p>Uspesno ste poslali porudzbenicu!</p>
            </div>
        </div>
        <div class="col-2"></div>
      </div>
      
    </div>
  </div>
</template>
<script>
import BuyPage1 from "./BuyPage1.vue";
import BuyPage2 from "./BuyPage2.vue";
import BuyPage3 from "./BuyPage3.vue";
import { eventBus } from "./main";
export default {
  props:['user'],
  components: {
    page1: BuyPage1,
    page2: BuyPage2,
    page3: BuyPage3
  },
  data: function() {
    return {
      progres: 0
    };
  },
  created() {
    setInterval(() => {
      eventBus.$on("progres", element => {
        this.progres = element;
      });
      if (this.progres === 100) {
      setTimeout(() => {
         this.progres=0;
          // TODO posalji na server korpa.json  
          const val=JSON.stringify([]);
          window.localStorage.setItem('korpa.json', val);
          eventBus.$emit("about", "about");
      }, 2000);
     }
    }, 1000);
    
  }
};
</script>
<style scoped>
</style>