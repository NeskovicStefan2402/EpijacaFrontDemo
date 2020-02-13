<template>
    <div class="odeljak">
        <img  v-if="slika==='team'" src="./assets/team.png" >
        <img  v-else-if="slika==='proizvodi'" src="./assets/proizvodi.jpg" >
        <img  v-else-if="slika==='benefit'" src="./assets/benefit.png" >
        <img  v-else src="./assets/novac.jpg" >
        <h2>{{naslov}}</h2>
        <br>
        <div v-if='ulVrednost'>
            <ul>
                <li><img src="./assets/trueicon.png" class='icon'> Potrebno je prvo da se registrujete</li>
                <li><img src="./assets/trueicon.png" class='icon'> Zatim dodajte svoj proizvod</li>
                <li><img src="./assets/trueicon.png" class='icon'> Sacuvajte proizvod i sacekajte porudzbine!</li>
            </ul>
        </div>
        <div v-else>
            <p>{{text}}</p>
        </div>
        
    </div>
</template>
<script>
export default {
    props:['slika','naslov','text','ulVrednost']
}

</script>
<style scoped>
    .odeljak{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
        background-color: rgb(201, 250, 127);
    }
    img{
        margin-top: 30px; 
        height: 70px;
        width: 70px;
        border: 1px;
        border-radius: 40px;
        border-style:ridge; 
        background-color: white;
    }
    h2{
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
        font-family: 'Lobster', cursive;
    }
    p{
        font-family: 'Lobster', cursive;
        text-align: center;
    }
    ul{
        list-style-type: none;
        font-family: 'Lobster', cursive;
    }
    img.icon{
        margin-top: 0; 
        height: 25px;
        width: 25px;
        border:none; 
    }
</style>