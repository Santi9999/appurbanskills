<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs8>
        <v-text-field
          label="Buscar Artista"
          type="text"
          background-color="white"
          v-model="searchValue"
          color="yellow"
        >
          <template v-slot:append>
            <v-fade-transition leave-absolute></v-fade-transition>
          </template>
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout justify-center row wrap>
      <v-flex xs5 v-for="(artista, index) in filteredArtistas" :key="index">
        <img class="icon" :src="require('../assets/ArtistasNacionales/' + artista.imagen)">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    artistas: [],
    searchValue: ""
  }),
  methods: {
    getData() {
      fetch("Artistas.json")
        .then(json => json.json())
        .then(data => {
          this.artistas = data.ArtistasNacionales;
        });
    }
  },
  computed: {
    filteredArtistas() {
      return this.artistas.filter(artista =>
        artista.aka.toLowerCase().includes(this.searchValue.toLowerCase())
      );
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

.icon {
  width: 140px;
}
</style>