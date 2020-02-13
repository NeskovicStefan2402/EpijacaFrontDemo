<template>
   <div>
       <slider></slider>
       <transition appear enter-class="" enter-active-class="animated slideInUp" leave-class="" leave-active-class="animated slideInDown">   
       <div>
        <part slika='team' naslov='O nama' text='Ovo je platforma za digitalni marketing koja Vam omogucava da na brz i lak nacin steknete dodatni profit. Sve sto je potrebno je da nam se pridruzite!'></part>
        <part slika='proizvodi' naslov='Sta mogu da prodajem?' text='Ovo je platforma za digitalni marketing koja Vam omogucava da na brz i lak nacin steknete dodatni profit. \n Sve sto je potrebno je da nam se pridruzite!'></part>
        <part ulVrednost=true slika='benefit' naslov='Kako da pocnem?' ></part>
        <part slika='novac' naslov='Koliko mogu da zaradim?' text='Cenu uspostavljate iskljucivo vi, prema tome, sami odredjujete koliko mozete da zaradite.'></part>
       </div>
       </transition>
    </div>
</template>
<script>
import AboutPart from './AboutPart.vue';
import Slider from './SliderGallery.vue';
export default {
    components:{
        part:AboutPart,
        slider:Slider
    }
}
</script>
<style scoped>
    div{
        background-color: white;
        /* margin-left: 30px;
        margin-right: 30px; */
        text-align: center;
        padding: 20px;
    }
</style>