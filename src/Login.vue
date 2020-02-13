<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4" id='forma'>
                <h2>Dobrodosli!</h2>
                <!-- <p>Unesite username:</p> -->
                    <input type="text" v-model='user.username'>
                    
                <!-- <p>Unesite username:</p> -->
                    <input type="password" v-model='user.password'>
                    
                <br>
                <br>
                <button @click="login">Login</button>
                <button @click="preskoci">Preskoci</button>
            </div>
            <div class="col-md-4"></div>
            
        </div>
        
    </div>    
</template>
<script>
import {eventBus} from './main.js';
export default {
    data:function(){
        return {
            logged:false,
            user:{
                username:'',
                password:''},
            loggedUser:{}
        }
    },
    methods:{
        login(){
            // if(this.username==='stefan98' && this.password==='stefan98'){
                
                
                this.$http.post('prijava',this.user)
                    .then(response=>{
                        console.log(response.data);
                        this.loggedUser=response.data;
                        eventBus.$emit('user',response.data);
                        console.log('Logged user is: '+this.loggedUser.username);
                        this.logged=true;
                        this.username='';
                        this.password='';
                        eventBus.$emit('logged',this.logged);
                        },
                        error=>{
                        console.log(error);
                        }
                    );
                
            // }else{
            //     alert('Nije korektan unos!');
            // }
        },
        preskoci(){
            this.logged=true;
            this.username='';
            this.password='';
            eventBus.$emit('logged',this.logged);
            eventBus.$emit('user',{}); 
        }
    }
}
</script>
<style scoped>
    div{
        /* height: 300px;
        text-align: center;
        margin-left: 25%;
        margin-right: 35%;
        margin-top: 130px;
        padding: 30px;  */
        
        /* background-image: url('./assets/tegla.png'); */
        border-color: black;
        font-family: 'Lobster', cursive;
    }
    #forma{
        text-align: center;
        padding: 20px;
        margin-top: 170px;
        background-color: rgba(255, 255, 255, 0.945);
    }
    input{
        border-radius: 15px;
        margin-top: 10px;
        width: 60%;
        height: 35px;
        outline: 0;
        text-align: center;
        }
    button{
        border-radius: 8px;
        width: 40%;
        height: 30px;
        background-color: rgb(123, 136, 7);
        border: 0;
        outline: 0;
        color: white;
        }
    h2{
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
        color: green;
        }
    p{
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
        }
</style>