<template> 
    <div class="container" style="background-color:grey;">
        <br>
        <br>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./assets/proizvodi.jpg" alt="O nama">
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="./assets/tegla.png" alt="O nama">
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="./assets/proizvodi.jpg" alt="O nama">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</template>
<script>
export default {
    props:['slike']    
}
</script>
<style scoped>

</style>
