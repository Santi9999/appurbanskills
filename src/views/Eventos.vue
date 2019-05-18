<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card :key="evento.cartel" v-for="evento in eventos" :href="evento.facebook">
        <v-img :src="require('../assets/Eventos/' + evento.cartel)"></v-img>

        <!-- <v-card-title primary-title>
          <div>
            <div class="headline">{{evento.nombre}}</div>
          </div>
        </v-card-title>-->

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
</style>