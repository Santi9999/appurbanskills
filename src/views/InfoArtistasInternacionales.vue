<template>
  <v-container v-if="artistas.length != 0">
    <v-layout justify-center class="mt-5">
      <v-card>
        <v-layout justify-center>
          <v-flex xs8>
            <v-img :src="require('../assets/CartasInternacionales/' + artistas[0].carta)"></v-img>
          </v-flex>
        </v-layout>
        <v-card-title primary-title class="mt-3">
          <v-flex xs12>
            <v-card color="yellow darken-1">
              <h1 class="aka">{{artistas[0].aka}}</h1>
            </v-card>
          </v-flex>
          <v-layout column>
            <v-card color="yellow lighten-2">
              <v-flex xs12>
                <h2 class="aka3">Nombre Completo:</h2>
                <p class="aka2">{{artistas[0].nombre}} {{artistas[0].apellidos}}</p>
              </v-flex>
              <v-flex xs12>
                <h2 class="aka2">Fecha de Nacimiento:</h2>
                <p class="aka2">{{artistas[0].nacimiento}}</p>
              </v-flex>
              <v-flex xs12>
                <h2 class="aka2">Región:</h2>
                <p class="aka2">{{artistas[0].region}}</p>
              </v-flex>
              <v-flex xs12>
                <h2 v-if="artistas[0].grupo != null" class="aka2">Pertenece al Grupo:</h2>
                <p v-if="artistas[0].grupo != null" class="aka2">{{artistas[0].grupo}}</p>
              </v-flex>
              <v-flex xs12>
                <h2 v-if="artistas[0].miembros != null" class="aka2">Componentes:</h2>
                <p v-if="artistas[0].miembros != null" class="aka2">{{artistas[0].miembros}}</p>
              </v-flex>
              <v-flex xs12>
                <h2 v-if="artistas[0].muerte != null" class="aka2">Fecha de Defunción:</h2>
                <p v-if="artistas[0].muerte != null" class="aka2">{{artistas[0].muerte}}</p>
              </v-flex>
            </v-card>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-layout>
    <v-layout justify-center>
      <h1 class="titulovideo">
        <u>Trayectoria</u>
      </h1>
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
@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");

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

.aka {
  color: black;
  padding: 10px;
  text-align: center;
  font-family: "Lobster", cursive;
}

.aka2 {
  color: black;
  text-align: center;
}
.aka3 {
  color: black;
  text-align: center;
  padding-top: 10px;
}
.titulovideo {
  color: white;
  font-family: "Lobster", cursive;
  text-align: center;
}
</style>