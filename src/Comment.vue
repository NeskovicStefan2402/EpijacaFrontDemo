<template>
    <div class='container odeljak'>
        <div class="row">
            <div class="col-1">
                <img src="./assets/profile.png" height="30px" width="30px">        
            </div>
            <div class="col-1">
                <p>{{korisnickoIme}}</p>    
            </div>
            <div class="col-4">
                <rates v-bind:rates='rates'></rates>    
            </div> 
        </div>
        <div class="row">
            <div class="col-12">
                <p> {{text}} </p>
            </div>
        </div>
    </div>
</template>
<script>
import RateStars from './RateStars.vue';
export default {
    components:{
        rates:RateStars
    },
    props:['korisnickoIme','text','rates']
}
</script>
<style scoped>   
.odeljak{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 40px;
    margin: 30px auto;
    /* text-align: center; */
    background-color: rgb(194, 250, 110);
}

</style>>

</style>
