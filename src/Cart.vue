<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <hr>
                <div class="alert alert-warning" role="alert" v-if="porudzbina.length===0">
                    Nemate nijedan proizvod u korpi!
                </div>
                
                <div class="row" v-for="(i,index) in porudzbina">
                    <transition appear enter-class="" enter-active-class="animated fadeIn" leave-class="" leave-active-class="animated fadeOutDown">
                        <part :naziv='i.naziv' :cena='i.cena' :kolicina='i.kolicina' @click.native="changeItems(index)" ></part>
                    </transition>
                </div>
                <hr>
            </div>
            <div class="col-4">
                <invoice :porudzbina="porudzbina" @updateItems='porudzbina=$event'></invoice>
            </div>
        </div>
    </div>
</template>
<script>
import {eventBus, korpa} from './main.js';
import CartPart from './InvoiceItem.vue';
import Invoice from './Invoice.vue';

export default {
    components:{
        part:CartPart,
        invoice:Invoice
    },
    data:function(){
        return {
            porudzbina:[]
        }
    },
    created(){
        this.porudzbina=JSON.parse(window.localStorage.getItem('korpa.json'));
        
    },
    methods:{
        changeItems(index){
            this.porudzbina.splice(index,1);
            const val=JSON.stringify(this.porudzbina);
            window.localStorage.setItem('korpa.json', val);
            eventBus.$emit('deleteI',this.porudzbina);
            console.log('Obrasan item'+ this.porudzbina);
        }
    }
}
</script>
<style scoped>
div {
  background-color: white;
  text-align: center;
  padding: 20px;
    color: black;
}


</style>