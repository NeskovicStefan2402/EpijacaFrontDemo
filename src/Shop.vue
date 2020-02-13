<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <search></search>
                    <hr>
                    <div class="row">
                        <div v-for="(i,index) in filteri">    
                                <button class="form-control filter" @click="filteri.splice(index,1)">{{i.naziv}} <img src='./assets/delete.png' ></button> 
                        </div>
                    </div>
                    <hr>
                    
                <div class="alert alert-info" role="alert" v-if="filterArtikal.length===0">
                    Nije pronadjen nijedan proizvod!
            </div>
            <div class="row" v-for="i in filterArtikal">
                <transition appear enter-class="" enter-active-class="animated slideInUp">
                    <artikal v-bind:naziv="i.naziv" v-bind:cena="i.cena" @click.native="adduKorpu(i)"></artikal>
                </transition>
            </div>
            </div>
                <div class="col-3">
                    <filters></filters>
                    <transition appear enter-class="" enter-active-class="animated fadeIn" leave-class="" leave-active-class="animated fadeOut">
                        <price v-if='formaCena'></price>
                    </transition>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Search from './Search.vue';
import Artikal from './ArtikalKartica.vue';
import Filters from './Filters.vue';
import FilterPrice from './FilterPrice.vue';
import {eventBus} from './main.js';
// import {korpaMixin} from './korpa';

export default {
    props:['user'],
    components:{
        search:Search,
        artikal:Artikal,
        filters:Filters,
        price:FilterPrice
    },
    data:function(){
        return{
        proizvodi:[],
        filteri:[{naziv:'Naziv'}],
        filterSearch:'',
        formaCena:false,
        stavke:[]}
    },
    computed:{
        filterArtikal(){
            
                return this.proizvodi.filter((element)=> {
                    return element.naziv.match(this.filterSearch) ;
                });
        }
    },
    methods:{
        isExistsCena(){
            for ( let index = 0; index < this.filteri.length; index++ ) {
                if(this.filteri[index].naziv==='Cena'){
                    return index;
                }       
            }
            return -1;
        },   
        adduKorpu(product){
            
            if(this.user!={}){
                if(this.user.id===product.korisnik){
                    alert('Nije moguce dodati svoj proizvod u korpu!');
                    return;
                }
            }
            product.kolicina=1;
             
            eventBus.$emit('about','proizvod');
                
            setTimeout(() => {
            eventBus.$emit('proizvod',product);
                
            }, 1000);
            
        }
    },
    created(){
            this.$http.get('vratiSveProizvode').then(
                response=>{
                    return response.json();
                }).then(
                    data=>{
                        this.proizvodi=data['proizvodi: '];
                        console.log(this.proizvodi);
                        eventBus.$on('search',(vr)=>{
                    this.filterSearch=vr;
                });
                eventBus.$on('addFilter',(vr)=>{
                    if(vr.naziv==='Cena'){
                        this.formaCena=false;
                        if(this.isExistsCena()===-1){
                            this.filteri.push(vr);
                        }else{
                            // console.log(this.filteri[this.isExistsCena].od);
                            // console.log(this.filteri[this.isExistsCena].do);
                            this.filteri.splice(this.isExistsCena(),1);
                        }
                    }
                    if(!this.filteri.includes(vr)){
                        this.filteri.push(vr);
                    }
                });
                eventBus.$on('priceForm',(vr)=>{
                    this.formaCena=true;
                });
                        }
                    );
            
    }
}
</script>
<style scoped>
 div {
  background-color: white;
  text-align: center;
  padding: 20px;
}
.filter{
    background-color: green;
    color: white;
}
button{
    background-color: green;
    color: white;
}
img{
    height: 10px;
    width: 10px;
    margin-left: 50px;
}

</style>