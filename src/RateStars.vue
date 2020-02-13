<template>
<div class="container">
    <div class="row">
    <div v-for="(i,index) in 5" class="col-1">
        <span v-if="index+0.5 < rates" class="fa fa-star checked"></span>
        <span v-else class="fa fa-star "></span>
    </div>
    </div>
</div>
</template>
<script>
export default {
    props:['rates']
}
</script>
<style scoped>
.checked {
  color: orange;
}
</style>