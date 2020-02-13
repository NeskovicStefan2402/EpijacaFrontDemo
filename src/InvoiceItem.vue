<template>
  <div class="container odeljak">
      <div class="row">
        <div class="col-2">
            <img src="./assets/proizvodi.jpg" >
        </div>
        <div class="col-3">
            <p>{{naziv}}</p>
          </div>
        <div class="col-3">
            <p>{{cena}} din.</p>
          </div>
        <div class="col-2">
            <p>{{kolicina}} kom.</p>
          </div>
        <div class="col-2">
            <img src="./assets/delete.png" class="delete">
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props:['naziv','cena','kolicina']
}
</script>
<style scoped>
    .odeljak{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        /* padding: 30px;
        margin: 30px auto; */
        border-radius: 20px;
        text-align: center;
        background-color: rgb(201, 250, 127);
    }
    img{
        margin-top: 10px; 
        margin-bottom: 10px; 
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
        margin-top: 30px;
        margin-bottom: 30px;
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
    .delete{
        height: 30px;
        width: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
        background: none;
        border: none;
    
    }
</style>