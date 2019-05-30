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
    <v-layout align-center column>
      <iframe
        name="play"
        width="300"
        height="300"
        :src="`https://www.youtube.com/embed/${
        videos[0].snippet.thumbnails.default.url.split('/')[4]
      }`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <v-flex xs12 id="titulo"></v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-carousel class="carouselvideos" height="150" :cycle="false">
        <v-carousel-item v-for="(item,name) in carousel()" :key="name">
          <v-layout justify-center row align-center>
            {{item.length}}
            <a
              :href="getId(video)"
              target="play"
              :key="video.snippet.title"
              v-for="video in item"
              @click="cambiartitulo()"
            >
              <img
                width="100"
                height="100"
                :src="video.snippet.thumbnails.default.url"
                frameborder="0"
              >
            </a>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    videos: [],
    url:
      "https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId=UCJ6f-Cjc8fWi-EKIZ1zHIWQ&maxResults=12&key=AIzaSyBz_jq_T4ahYmK0UlkpyfYkX4W-5m6PDl0",
    numeroVideos: 3
  }),
  methods: {
    getData() {
      fetch(this.url)
        .then(json => json.json())
        .then(data => {
          this.videos = data.items;
          this.carousel();
        });
    },
    getId(video) {
      return `https://www.youtube.com/embed/${
        video.snippet.thumbnails.default.url.split("/")[4]
      }`;
    },
    cambiartitulo() {
      let h1 = document.createElement("h1");
      h1.append(videos.snippet.title);
      document.getElementById("titulo").append(h1);
    },

    carousel() {
      let carousel = {};
      let paginas = Math.ceil(this.videos.length / this.numeroVideos);
      let inicio = 0;
      let final = this.numeroVideos;
      for (let i = 0; i < paginas; i++) {
        let corte = this.videos.slice(inicio, final);
        carousel["slider" + i] = corte;

        inicio = inicio + this.numeroVideos;
        final = final + this.numeroVideos;
      }
      return carousel;
    }
  },
  computed: {},
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

.v-card.v-sheet.theme--light {
  color: white;
}

.carouselvideos {
  margin-top: 40px;
}

.titulovideo {
  margin-top: 20px;
  color: white;
  font-family: "Lobster", cursive;
}
</style>