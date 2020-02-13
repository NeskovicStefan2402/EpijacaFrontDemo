<template>
    <div class="container">
        <div class="row">
            <div class="col-10">      
                <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Pretrazi"
                    aria-label="Search"
                    v-model="polje"
                    @change="pretrazi"
                />
            </div>
            <div class="col-2">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="pretrazi">Pretrazi</button>
            </div>
        </div>
    </div>
</template>
<script>
import {eventBus} from './main.js';
export default {
    data:{
        polje:''
    },
    methods:{
        pretrazi(){
            eventBus.$emit('search',this.polje);
        }
    }
}
</script>    
<style scoped>

</style>