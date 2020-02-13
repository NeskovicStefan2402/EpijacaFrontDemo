<template>
    <div class='divBack'>
        <div v-if='!omoguceno'>
            <p>Pokrenite kalkulator</p>
            <button @click="pokreni">Pokreni</button>
        </div>
        <div v-else>
            <input type="text" v-model="suma">
            <select v-model='odabrano' @change="pokreniTransakciju">
                    <option v-for="i in lista" v-bind:value='i'>{{i.valuta}}</option>
            </select>
        </div>
    </div>
</template>
<script>
import {eventBus} from './main.js';
export default {
    data:function(){  
        return {lista:[{valuta:'km',
                        cena:64},
                        {valuta:'evro',
                        cena:118},
                        {valuta:'dolar',
                        cena:108},
                        {valuta:'funta',
                        cena:130},
                        {valuta:'dinar',
                        cena:1}],
                odabrano:'',
                suma:1,
                rezultat:0,
                omoguceno:false}
    },
    methods:{
        pokreniTransakciju(){
            if(this.suma>0 && this.odabrano!=''){
                this.rezultat=this.suma*this.odabrano.cena;
                eventBus.$emit('rezultatNow',this.rezultat);
                this.omoguceno=false;
            }else{
                alert('Morate popuniti korektno polja');
            }
        },
        pokreni(){
            this.omoguceno=true;
        }

    }
}
</script>
<style scoped>
    .divBack{
        height: 300px;
        text-align: center;
        padding: 30%;
        background-color: rgb(255, 255, 255);
        border-color: black;
        border-radius: 10%;
        border-width: 3px;
        border-style: inset;
    }
</style>