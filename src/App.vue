<template>
  <v-app>
    <v-layout id="top">
      <div class="fondo">
        <v-flex xs12>
          <v-card-title class="px-0">
            <v-toolbar fixed dark>
              <v-menu max-height="50px" offset-y transition="slide-x-transition">
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="menu"
                    :depressed="true"
                    :fab="true"
                    :small="true"
                    @click="mostrar = !mostrar"
                  >
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                  </v-btn>
                </template>
              </v-menu>
              <v-toolbar-title>
                <img class="portada" :src="require('./assets/ImagenesHome/Portada.png')">
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn fab small color="#ccb803" dark href="javascript:history.back()">
                <v-icon dark>arrow_back</v-icon>
              </v-btn>
            </v-toolbar>
            <v-navigation-drawer v-model="mostrar" dark temporary fixed>
              <v-list class="pa-1">
                <v-list-tile to="/">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <img
                        class="botones"
                        src="./assets/ImagenesHome/7.Home2.png"
                        width="24"
                        height="24"
                      >Inicio
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </v-list>
              <v-list class="pa-1">
                <v-list-tile to="/nacional">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <img
                        class="botones"
                        src="./assets/ImagenesHome/1.Nacional2.png"
                        width="24"
                        height="24"
                      >Nacional
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </v-list>
              <v-list class="pa-1">
                <v-list-tile to="/internacional">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <img
                        class="botones"
                        src="./assets/ImagenesHome/2.Internacional2.png"
                        width="24"
                        height="24"
                      >Internacional
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </v-list>
              <v-list class="pa-1">
                <v-list-tile to="/eventos">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <img
                        class="botones"
                        src="./assets/ImagenesHome/3.Eventos2.png"
                        width="24"
                        height="24"
                      >Eventos
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </v-list>
              <v-list class="pa-1">
                <v-list-tile to="/skillstv">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <img
                        class="botones"
                        src="./assets/ImagenesHome/4.SkillsTv2.png"
                        width="24"
                        height="24"
                      >Skills TV
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </v-list>
              <v-list class="pa-1">
                <v-list-tile to="/calendario">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <img
                        class="botones"
                        src="./assets/ImagenesHome/5.Calendario2.png"
                        width="24"
                        height="24"
                      >Calendario
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </v-list>
              <v-list class="pa-1">
                <v-list-tile to="/urbanpost">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <img
                        class="botones"
                        src="./assets/ImagenesHome/6.UrbanPost2.png"
                        width="24"
                        height="24"
                      >Urban Post
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </v-list>
            </v-navigation-drawer>
          </v-card-title>
        </v-flex>

        <router-view></router-view>
        <v-btn fab bottom right fixed small color="#ccb803" dark href="#top" class="toTop">
          <v-icon dark>keyboard_arrow_up</v-icon>
        </v-btn>

        <v-footer class="mt-3" height="auto" color="yellow darken-1">
          <v-layout justify-center row wrap>
            <a href="mailto:urbanskillsoficial@gmail.com">
              <v-btn color="black" flat round>Contacto</v-btn>
            </a>
            <v-btn to="/quiensomos" color="black" flat round>¿Quiénes Somos?</v-btn>
            <v-flex yellow lighten-2 py-3 text-xs-center black--text xs12>
              &copy;2019 —
              <strong>S.Gamero&G.Alvarez</strong>
            </v-flex>
          </v-layout>
        </v-footer>
      </div>
    </v-layout>
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
@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");
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

aside.v-navigation-drawer.v-navigation-drawer--fixed.v-navigation-drawer--open.v-navigation-drawer--temporary.theme--dark {
  background-color: black;
}

a.v-list__tile.v-list__tile--link.theme--dark {
  color: white;
  font-family: "Lobster", cursive;
  font-size: px;
}

.v-list__tile__content {
  font-size: 25px;
}

.botones {
  margin-right: 10px;
}

hr {
  border: solid 0.5px gold;
}

.v-navigation-drawer > .v-list .v-list__tile--active .v-list__tile__title {
  color: gold;
}

.toTop {
  color: black;
}

.menu {
  margin-right: 0;
}
</style>