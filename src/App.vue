<template>
  <v-app>
    <div class="fondo">
      <v-flex xs12>
        <v-card-title class="px-0">
          <v-toolbar fixed dark>
            <v-menu max-height="50px" offset-y transition="slide-x-transition">
              <template v-slot:activator="{ on }">
                <v-btn :depressed="true" :fab="true" :small="true" @click="mostrar = !mostrar">
                  <v-toolbar-side-icon></v-toolbar-side-icon>
                </v-btn>
              </template>
            </v-menu>
            <v-toolbar-title>
              <img class="portada" :src="require('./assets/ImagenesHome/Portada.png')">
            </v-toolbar-title>
          </v-toolbar>
          <v-navigation-drawer v-model="mostrar" dark temporary fixed>
            <v-list class="pa-1">
              <v-list-tile to="/nacional">
                <v-list-tile-content>
                  <v-list-tile-title>Nacional</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-list class="pa-1">
              <v-list-tile to="/internacional">
                <v-list-tile-content>
                  <v-list-tile-title>Internacional</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-list class="pa-1">
              <v-list-tile to="/eventos">
                <v-list-tile-content>
                  <v-list-tile-title>Eventos</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-list class="pa-1">
              <v-list-tile to="/skillstv">
                <v-list-tile-content>
                  <v-list-tile-title>Skills TV</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-list class="pa-1">
              <v-list-tile to="/calendario">
                <v-list-tile-content>
                  <v-list-tile-title>Calendario</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-list class="pa-1">
              <v-list-tile to="/urbanpost">
                <v-list-tile-content>
                  <v-list-tile-title>Urban Post</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
          <router-link to="/" class="mt-5">
            <img src="./assets/ImagenesHome/Logourban.png" width="310" height="210">
          </router-link>
        </v-card-title>
      </v-flex>
      <v-layout justify-center>
        <v-flex xs4>
          <a href="https://www.instagram.com/urbanskillsoficial/" target="_blank">
            <img class="botoninsta" src="./assets/ImagenesHome/insta2.png" width="40" height="40">
          </a>
        </v-flex>
        <v-flex xs4>
          <a href="https://www.youtube.com/urbanskillsoficial" target="_blank">
            <img
              class="botonyoutube"
              src="./assets/ImagenesHome/youtube2.png"
              width="55"
              height="40"
            >
          </a>
        </v-flex>
        <v-flex xs4>
          <a href="https://www.facebook.com/urbanskillsoficial/" target="_blank">
            <img class="botonface" src="./assets/ImagenesHome/face2.png" width="40" height="40">
          </a>
        </v-flex>
      </v-layout>

      <router-view></router-view>

      <v-footer class="mt-3" height="auto" color="yellow darken-1">
        <v-layout justify-center row wrap>
          <a href="mailto:urbanskillsoficial@gmail.com">
            <v-btn color="black" flat round>Contacto</v-btn>
          </a>
          <v-btn color="black" flat round>¿Quien Somos?</v-btn>
          <v-flex yellow lighten-2 py-3 text-xs-center black--text xs12>
            &copy;2019 —
            <strong>S.Gamero&G.Alvarez</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      mostrar: null
      //
    };
  }
};
</script>
<style>
.fondo {
  background: url("./assets/ImagenesHome/fondourban.jpg");
  background-attachment: fixed;
  background-size: cover;
}

.xs4 {
  display: flex;
  justify-content: center;
  margin: 10px;
}

a {
  text-decoration: none;
}

.portada {
  width: 250px;
  height: 45px;
  position: relative;
  top: 5px;
}
</style>