<template>
  <v-container v-if="artistas.length != 0">
    <img src="../assets/ImagenesHome/nacional.png" width="100%" height="100%">

    <v-layout justify-center>
      <v-flex xs4>
        <a href="https://www.instagram.com/urbanskillsoficial/" target="_blank">
          <img class="botoninsta" src="../assets/ImagenesHome/insta2.png" width="40" height="40">
        </a>
      </v-flex>
      <v-flex xs4>
        <a href="https://www.youtube.com/urbanskillsoficial" target="_blank">
          <img
            class="botonyoutube"
            src="../assets/ImagenesHome/youtube2.png"
            width="55"
            height="40"
          >
        </a>
      </v-flex>
      <v-flex xs4>
        <a href="https://www.facebook.com/urbanskillsoficial/" target="_blank">
          <img class="botonface" src="../assets/ImagenesHome/face2.png" width="40" height="40">
        </a>
      </v-flex>
    </v-layout>
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
    <v-carousel height="535" :cycle="false">
      <v-carousel-item v-for="(item,name) in carousel()" :key="name">
        <v-layout justify-center row wrap>
          {{item.length}}
          <v-flex xs5 v-for="artista in item" :key="artista.nombre">
            <router-link :to="'/infoartistasnacionales/' + artista.aka">
              <img class="icon" :src="require('../assets/ArtistasNacionales/' + artista.imagen)">
            </router-link>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-container>
  <v-container v-else>
    <v-flex class="loader">
      <v-progress-circular indeterminate color="yellow" size="99" width="8"></v-progress-circular>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    artistas: [],
    searchValue: "",
    numeroArtistas: 6
  }),
  methods: {
    getData() {
      fetch("Artistas.json")
        .then(json => json.json())
        .then(data => {
          this.artistas = data.ArtistasNacionales;
          this.carousel();
        });
    },
    carousel() {
      let carousel = {};
      let paginas = Math.ceil(
        this.filteredArtistas.length / this.numeroArtistas
      );
      let inicio = 0;
      let final = this.numeroArtistas;
      for (let i = 0; i < paginas; i++) {
        let corte = this.filteredArtistas.slice(inicio, final);
        carousel["slider" + i] = corte;

        inicio = inicio + this.numeroArtistas;
        final = final + this.numeroArtistas;
      }
      return carousel;
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
.flex.xs5 {
  text-align: center;
}

.icon {
  width: 140px;
}

.v-carousel__controls {
  background-color: rgba(240, 248, 255, 0);
}
</style>