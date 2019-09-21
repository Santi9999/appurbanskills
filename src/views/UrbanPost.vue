<template>
  <v-container v-if="posts.length != 0">
    <!-- <router-link to="/" class="mt-5"> -->
    <img src="../assets/ImagenesHome/urbanpost.png" width="100%" height="100%">
    <!-- </router-link> -->

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
    <v-layout justify-end>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-expansion-panel v-for="(item,name,i) in posts" :key="i" dark>
            <v-expansion-panel-content>
              <template v-slot:header>
                <img :src="require('../assets/Meses/' + name + '.png')">
              </template>
              <v-card v-for="post in posts[name]" :key="post.id">
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
  padding: 0;
}

.v-expansion-panel__header__icon {
  position: absolute;
  left: 312px;
  bottom: 71px;
}

.v-card__title.v-card__title--primary {
  padding-top: 10px;
  padding-bottom: 0px;
}

.loader {
  display: flex;
  justify-content: center;
}
</style>