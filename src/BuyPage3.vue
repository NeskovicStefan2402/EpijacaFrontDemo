<template>
    <div>
        <div class="container odeljak">
            <br>
            <div class="row">
                <div class="col-1">
                    <input type="checkbox" v-model="uslovi"  class="form-control checkPolje">
                </div>
                <div class="col-9">
                    <p>Prihvatam <a href="">uslove</a> koriscenja.</p>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-1">
                    <input type="checkbox" v-model="ugovor" class="form-control checkPolje">
                </div>
                <div class="col-9">
                    <p>Saglasan sam sa potpisivanjem <a href="">ugovora.</a></p>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-1">
                    <input type="checkbox" checked data-toggle="toggle" data-width="100" class="form-control checkPolje">
                </div>
                <div class="col-9">
                    <p>Posalji mi kopiju porudzbenice.</p>
                </div>
            </div>
        <div class="row">
                        <div class="col-3">
                            
                        </div>
                        <div class="col-6">
                            <button class="form-control" @click="nastavi"> Nastavi </button>
                        </div>
                        <div class="col-3">
                            
                        </div>
                        
                    </div>
        </div>    
            
    </div>
</template>
<script>
import {eventBus} from './main';
export default {
    data:function(){
        return {
            uslovi:false,
            ugovor:false,

        }
    },
    methods:{
        nastavi(){
            eventBus.$emit('progres',100);
        }
    },
    created(){
        this.stavke=JSON.parse(window.localStorage.getItem('korpa.json'));
    }

}
</script>
<style scoped>
    p{
        text-align: left;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    .odeljak{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
        background-color: rgba(201, 250, 127, 0.322);
    }
    button{
        background-color: green;
        color: white;
    }
    .checkPolje{
        height: 20px;
        width: 20px;
    }
    
</style>