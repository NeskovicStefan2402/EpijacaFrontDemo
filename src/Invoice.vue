<template>
    <div class="container forma" >
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <h3>Racun</h3>
            </div>
            <div class="col-3"></div>
        </div>
        <hr>
        <div class="row">   
            <div class="col-3">
                <p><b>Suma: </b></p>
            </div>
            <div class="col-9">
                <p>{{suma}} din.</p>
            </div>
        </div>
        <br>
        <div class="row">   
            <div class="col-3">
                <p><b>PDV: </b></p>
            </div>
            <div class="col-9">
                <p>{{pdv}} din.</p>
            </div>
        </div>
        <br>
        <div class="row">   
            <div class="col-3">
                <p><b>Dostava: </b></p>
            </div>
            <div class="col-9">
                <p>{{dostava}} din.</p>
            </div>
        </div>
        <br>
        <hr>
        <div class="row">   
            <div class="col-3">
                <p><b>Total: </b></p>
            </div>
            <div class="col-9">
                <p>{{total}} din.</p>
            </div>
        </div>
        <br>
        <button class="form-control filter" @click="poruci"> Poruci </button>
    </div>    
</template>
<script>
import {eventBus} from './main';
export default {
    data:function(){
        return{
                korpa:[],
                suma : 0,
                pdv : 0,
                dostava: 170,
                total: 0}
    },
    methods:{
        poruci(value){
            if(this.korpa.length===0){
                alert('Nemate nijednu stavku u korpi!');
            }else{
                eventBus.$emit('about','buy');
            }
            // const val=JSON.stringify([]);
            // window.localStorage.setItem('korpa.json', val);
        }
    },
    created(){
            setInterval(() => {
                this.korpa=JSON.parse(window.localStorage.getItem('korpa.json'));
                var sum=0;
                this.korpa.forEach(element => {
                    sum+=element.cena*element.kolicina;
                });
                this.suma=sum;
                this.pdv=(sum*0.17);
                if(sum===0){
                    this.total=0;
                    this.dostava=0;
                }else{
                    this.dostava=170;
                    this.total=(this.suma+this.pdv+this.dostava); 
                }
                
            }, 1000);        
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