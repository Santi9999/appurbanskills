<template>
  <v-container>
    <!-- <router-link to="/" class="mt-5"> -->
    <img src="../assets/ImagenesHome/skillstv.png" width="100%" height="100%">
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
    <v-layout justify-center>
      <v-flex xs12>
        <v-card :key="video.title" v-for="video in videos">{{video.snippet.title}}</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    videos: [],
    url:
      "https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId=UCJ6f-Cjc8fWi-EKIZ1zHIWQ&maxResults=50&key=AIzaSyBz_jq_T4ahYmK0UlkpyfYkX4W-5m6PDl0"
  }),
  methods: {
    getData() {
      fetch(this.url)
        .then(json => json.json())
        .then(data => {
          this.videos = data.items;
          console.log(this.videos);
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

.v-card.v-sheet.theme--light {
  color: white;
}
</style>