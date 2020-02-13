<template>
    <div class="container forma">
        <div class="row">
            <h3>Cena</h3>
        </div>
        <div class="row">   
            <div class="col-3">
                <label for="tipOd">Od: </label>
            </div>
            <div class="col-9">
                <input type="text" class="form-control" v-model="odCene">
            </div>
        </div>
        <br>
        <div class="row">   
            <div class="col-3">
                <label for="tipOd">Do: </label>
            </div>
            <div class="col-9">
                <input type="text" class="form-control" v-model="doCene">
            </div>
        </div>
        <br>
        <button class="form-control filter" @click="addFilter('Cena')">Dodaj filter</button>
    </div>    
</template>
<script>
import {eventBus} from './main.js';
export default {
    methods:{
        addFilter(value){
            var obj={
                naziv:value,
                od: this.odCene,
                do: this.doCene
            }
            eventBus.$emit('addFilter',obj);
        }
    },
    data:function(){
        return{
                odCene : 0,
                doCene : 50000}
    }
}
</script>
<style scoped>
    .forma{
        background-color: white;
        border-radius: 10px;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    button.filter{
        background-color: green;
        color: white;
    }
</style>