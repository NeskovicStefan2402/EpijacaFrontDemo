<template>
    <div>
        <p>Rezultat je: {{rezultat}} din</p>
        <ul>
            <li v-for='i in kalkulacije'>{{i}}</li>
        </ul>
    </div>
</template>
<script>
import {eventBus} from './main.js'
export default {
    data:function(){
        return {rezultat:0,
                kalkulacije:[]}
    },
    created(){
        eventBus.$on('rezultatNow',(rezultat)=>{
            this.rezultat=rezultat;
            this.kalkulacije.push(this.rezultat+' din');
        });     
    }
}
</script>
<style scoped>
    li{
        background-color: rgba(205, 227, 247, 0.486);
        margin-top: 10px;
        border-radius: 5px;
        width: 120%;
        text-align: center;
        border-width: 0.5px;
        border-style:   outset;
    }
    ul{
        list-style-type: none;
    }
    div{
        /* height: 300px; */
        text-align: center;
        padding: 30%;
        background-color: white;
        border-color: black;
        border-radius: 10%;
        border-width: 3px;
        border-style: inset;
    }
</style>