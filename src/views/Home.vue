<template>
  <v-container>
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
        <router-link to="/urbanpost">
          <img
            class="botones"
            src="../assets/ImagenesHome/6.UrbanPost.png"
            width="140"
            height="140"
          >
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    test: 0
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
</style>