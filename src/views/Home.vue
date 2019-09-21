<template>
  <v-container>
    <router-link to="/" class="logourban">
      <img src="../assets/ImagenesHome/Logourban.png" width="310" height="210">
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

    <v-layout>
      <v-flex xs6>
        <router-link to="/nacional">
          <img class="botones" src="../assets/ImagenesHome/1.Nacional.png" width="140" height="140">
        </router-link>
      </v-flex>
      <v-flex xs6>
        <router-link to="/internacional">
          <img
            class="botones"
            src="../assets/ImagenesHome/2.Internacional.png"
            width="140"
            height="140"
          >
        </router-link>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6>
        <router-link to="/eventos">
          <img class="botones" src="../assets/ImagenesHome/3.Eventos.png" width="140" height="140">
        </router-link>
      </v-flex>
      <v-flex xs6>
        <router-link to="/skillstv">
          <img class="botones" src="../assets/ImagenesHome/4.SkillsTv.png" width="140" height="140">
        </router-link>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <router-link to="/calendario">
          <img
            class="botones"
            src="../assets/ImagenesHome/5.Calendario.png"
            width="140"
            height="140"
          >
        </router-link>
      </v-flex>
      <v-flex xs6>
        <a href="https://www.urbanskillsblog.wordpress.com">
          <img
            class="botones"
            src="../assets/ImagenesHome/6.Urbanblog.png"
            width="140"
            height="140"
          >
        </a>
      </v-flex>
    </v-layout>
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

.logourban {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>