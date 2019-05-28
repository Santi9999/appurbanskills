<template>
  <v-container v-if="artistas.length != 0">
    <v-layout justify-center class="mt-5">
      <v-flex xs8>
        <v-img :src="require('../assets/CartasInternacionales/' + artistas[0].carta)"></v-img>
      </v-flex>
    </v-layout>
    <v-timeline align-top dense clipped dark>
      <v-timeline-item
        v-for="(item, name) in artistas[0].trayectoria"
        :key="name"
        color="yellow"
        small
        v-if="item.length != 0"
      >
        <v-layout pt-3>
          <v-flex xs3>
            <p>{{name}}</p>
          </v-flex>
          <v-flex>
            <p :key="text" v-for="text in item">{{text}}</p>
          </v-flex>
        </v-layout>
      </v-timeline-item>
    </v-timeline>
    <h1>{{aka}}</h1>
  </v-container>
  <v-container v-else>
    <v-flex class="loader">
      <v-progress-circular indeterminate color="yellow" size="99" width="8"></v-progress-circular>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  props: ["aka"],
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    artistas: []
  }),
  methods: {
    getData() {
      fetch("/Artistas.json")
        .then(json => json.json())
        .then(data => {
          this.artistas = data.ArtistasInternacionales.filter(
            art => art.aka == this.aka
          );
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style>
.px-0 {
  display: flex;
  justify-content: center;
}

.xs6 {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.v-timeline {
  color: white;
}
</style>