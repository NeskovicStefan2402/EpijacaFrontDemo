<template>
    <div>
        <div class="container odeljak">
            <br>
            <h3><center>Unesite podatke:</center></h3>
            <br>
            <br>
            <div class="row">
                <div class="col-4">
                    <p>Ime:</p>
                </div>
                <div class="col-6">
                    <input type="text" v-model="ime" class=" form-control">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-4">
                    <p>Prezime:</p>
                </div>
                <div class="col-6">
                    <input type="text" v-model="prezime" class=" form-control">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-4">
                    <p>Email:</p>
                </div>
                <div class="col-6">
                    <input type="email" v-model="email" class=" form-control">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-4">
                    <p>Telefon:</p>
                </div>
                <div class="col-6">
                    <input type="text" v-model="telefon" class=" form-control">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-4">
                    <p>Grad:</p>
                </div>
                <div class="col-6">
                    <input type="text" v-model="grad" class=" form-control">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-4">
                    <p>Ulica:</p>
                </div>
                <div class="col-6">
                    <input type="text" v-model="ulica" class=" form-control">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-4">
                    <p>Broj:</p>
                </div>
                <div class="col-6">
                    <input type="text" v-model="broj" class=" form-control">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <button class="form-control" @click="nastavi"> Nastavi </button>
                </div>
                <div class="col-3"></div>
                
            </div>
        </div>    
    </div>
</template>
<script>
import {eventBus} from './main';
export default {
    props:['user'],
    data:function(){
        return {
            ime:this.user.ime,
            prezime:this.user.prezime,
            email:this.user.email,
            telefon:this.user.telefon,
            grad:this.user.adresa.split(',')[2],
            ulica:this.user.adresa.split(',')[0],
            broj:this.user.adresa.split(',')[1]
        }
    },
    methods:{
        nastavi(){
            eventBus.$emit('progres',33);
        }
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
    
</style>