<template>
    <div>
       <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
                >Filteri</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" @click="addFilter('Naziv')">Naziv</a>
              <a class="dropdown-item" href="#" @click="formaCena" >Cena</a>
              <a class="dropdown-item" href="#" @click="addFilter('Firma')" >Firma</a>
              
            </div>    
    </div>
</template>
<script>
import {eventBus} from './main.js';
export default {
    methods:{
        addFilter(filter){
            var obj={naziv:filter}
            eventBus.$emit('addFilter',obj);
        },
        formaCena(){
            eventBus.$emit('priceForm');
        }
    }
}
</script>
<style scoped>
    div{
        background-color: green;
        color: white;
        border-radius: 20px;
    }
    a{
        color: white;
        font-size: 20px;
    }
</style>