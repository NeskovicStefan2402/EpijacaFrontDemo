<template>
    <div>
        <img src='./assets/facebook.png' @click="otvoriFacebook">
        <img src='./assets/instagram.png' @click="otvoriInstagram">
        <p>Created by Epijaca team</p>
    </div>    
</template>
<script>
export default {
    methods:{
        otvoriFacebook(){
            window.open("https://facebook.com", "_blank");
        },
        otvoriInstagram(){
            window.open("https://instagram.com", "_blank");
        }
    }
}
</script>
<style scoped>
    div{
        text-align: center;
        margin: 50px auto;
    }
    p{
        font-family: 'Lobster', cursive;
        color: white;
    }
    img{
        height: 40px;
        width: 40px;
    }
</style>