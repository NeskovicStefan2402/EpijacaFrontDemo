<template>
<div class='odeljak'>
    <div class="container">
                <div class='row'>
                        <img src='./assets/proizvodi.jpg'>
                </div>
                <br>
                <br>
                <div class='row'>
                        <div class="col-sm-6" >
                            <p>{{naziv}}</p>
                        </div> 
                        <div class="col-sm-6" >
                            <p style="background-color:white;">{{cena}} </p>
                        </div>
                        
                </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props:['naziv','cena']
}
</script>
<style scoped>
.kartica{
    border: 1px;
    border-radius: 10px;
    border-style: groove;
    background-image: url('./assets/kartica.jpg');
    padding: 5px;
}
.odeljak{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
    background-color: rgb(194, 250, 110);
}
p{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.dodatna{
    text-align: center;
}
</style>