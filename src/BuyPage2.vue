<template>
  <div>
    <div class="container odeljak">
      <div class="row">
        <br />
        <h3>Proizvodi iz korpe:</h3>
        <br />
      </div>
      <div class="row odeljak" v-for="i in stavke">
        <hr />
        <div class="col-4">
          <p>{{i.naziv}}</p>
        </div>
        <div class="col-4">
          <p>{{i.cena}} din.</p>
        </div>
        <div class="col-4">
          <p>{{i.kolicina}} kom.</p>
        </div>
        <hr />
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <button class="form-control" @click="nastavi">Nastavi</button>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "./main";
export default {
  data: function() {
    return {
      stavke: []
    };
  },
  methods: {
    nastavi() {
      eventBus.$emit("progres", 66);
    }
  },
  created() {
    this.stavke = JSON.parse(window.localStorage.getItem("korpa.json"));
  }
};
</script>
<style scoped>
p {
  text-align: left;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.odeljak {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
  background-color: rgba(201, 250, 127, 0.322);
}
button {
  background-color: green;
  color: white;
}
h3 {
  text-align: center;
}
</style>