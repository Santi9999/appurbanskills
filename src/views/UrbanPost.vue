<template>
  <v-container>
    <v-layout justify-end>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-expansion-panel v-for="(item,name,i) in posts" :key="i">
            <v-expansion-panel-content>
              <template v-slot:header>
                <div>{{name}}</div>
              </template>
              <v-card v-for="post in posts[name]">
                <v-img :src="require('../assets/UrbanPost/' + post.foto)" contain></v-img>

                <v-card-title primary-title>
                  <div>
                    <span class="grey--text">{{post.texto}}</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    posts: []
  }),
  components: {},

  methods: {
    getData() {
      fetch("UrbanPost.json")
        .then(json => json.json())
        .then(data => {
          this.posts = data;
        });
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

.v-expansion-panel__header {
  background-color: rgb(255, 208, 0);
}
</style>