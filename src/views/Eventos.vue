<template>
  <v-container>
    <router-link to="/" class="mt-5">
      <img src="../assets/ImagenesHome/eventos.png" width="100%" height="100%">
    </router-link>

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
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card :key="evento.cartel" v-for="evento in eventos" :href="evento.facebook">
          <v-img :src="require('../assets/Eventos/' + evento.cartel)"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    eventos: []
  }),
  methods: {
    getData() {
      fetch("Eventos.json")
        .then(json => json.json())
        .then(data => {
          this.eventos = data.Eventos;
        });
    }
  },

  created() {
    this.getData();
  },
  components: {}
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

.theme--light.v-sheet {
  margin: 50px;
  background-color: rgba(255, 255, 255, 0);
  color: white;
}

.v-card__title.v-card__title--primary {
  display: flex;
  justify-content: center;
}

.v-card__actions {
  margin-bottom: 40px;
}
</style>