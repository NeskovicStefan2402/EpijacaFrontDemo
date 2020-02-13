<template>
    <div class="container odeljak" >
                <div class='row element'>
                        <div class="col-3" >
                            <img src='./assets/proizvodi.jpg'>
                        </div>
                        <div class="col-6" >
                            <h3>{{naziv}}</h3>
                        </div>
                        <div class="col-3" >
                            <h5 >{{cena}} din.</h5>
                        </div>   
                </div>
                <br>
                <br>
                <!-- <div class='row'>
                        <div class="col-4" >
                            
                        </div> 
                        
                </div> -->
        </div>
</template>
<script>
export default {
    props:['naziv','cena']
}
</script>
<style scoped>
.odeljak{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    /* padding: 30px;
    margin: 10px auto; */
    width: 90%;
    height: 130px;
    background-color: rgb(230, 255, 191);
}
img{
    width: 60px;
    height: 60px;
}
h3 h5{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
}
.dodatna{
    text-align: center;
}
.element{
    margin-top: 20px;
}
</style>