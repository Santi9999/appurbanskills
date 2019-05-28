<template>
  <v-container>
    <router-link to="/" class="mt-5">
      <img src="../assets/ImagenesHome/quienessomos.png" width="100%" height="100%">
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

    <img
      class="fotourban"
      src="../assets/ImagenesHome/urban-skills100.jpg"
      width="100%"
      height="100%"
    >

    <p class="textourban">
      Urban Skills es un proyecto de un colectivo de jóvenes con una gran pasión en común, el Hip Hop.
      <br>Nuestro fundamento va mucho más allá de la música, el graffiti o break dance, la esencia que mueve el proyecto es el sentimiento que tenemos por esta cultura.
      <br>El propósito de Urban Skills es difundir la cultura Hip Hop y su diversidad artística fusionando diferentes estilos musicales, siempre partiendo desde la unión y respeto.
      <br>Estamos fomentando esta cultura y queremos que jóvenes tengan oportunidades y espacio donde experimentar sus habilidades urbanas.
    </p>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"]
  }),
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

.fotourban {
  border: solid 3px yellow;
}

.textourban {
  color: white;
  text-align: center;
}
</style>