<template>
  <v-container>
    <img src="../assets/ImagenesHome/skillstv.png" width="100%" height="100%">
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
    <v-layout align-center column v-if="videos.length !=0">
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
      <v-flex xs12 id="titulo">
        <h2 class="titulovideo">{{titulo}}</h2>
      </v-flex>
      <v-flex xs6>
        <a href="https://www.youtube.com/urbanskillsoficial" target="_blank">
          <img src="../assets/ImagenesHome/suscribete.png" width="150" height="40">
        </a>
      </v-flex>
    </v-layout>
    <v-layout justify-center v-if="videos.length !=0">
      <v-carousel class="carouselvideos" height="150" :cycle="false">
        <v-carousel-item v-for="(item,name) in carousel()" :key="name">
          <v-layout justify-center row align-center>
            {{item.length}}
            <a
              :href="getId(video)"
              target="play"
              :key="video.snippet.title"
              v-for="video in item"
              @click="cambiartitulo(video.snippet.title)"
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
    <h1 class="titulolistas">
      <u>Listas De Reproducción</u>
    </h1>
    <v-card v-for="lista in listas" :key="lista.snippet.title">
      <a :href="getListId(lista)" target="blank">
        <v-img :src="lista.snippet.thumbnails.high.url" height="100px"></v-img>
      </a>

      <v-card-title primary-title>
        <div>
          <div class="listas">{{lista.snippet.title}}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: ["Contacto", "¿Quien Somos?"],
    videos: [],
    url:
      "https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId=UCJ6f-Cjc8fWi-EKIZ1zHIWQ&maxResults=12&key=AIzaSyBz_jq_T4ahYmK0UlkpyfYkX4W-5m6PDl0",
    numeroVideos: 3,
    titulo: "",
    listas: [],
    url2:
      "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCJ6f-Cjc8fWi-EKIZ1zHIWQ&maxResults=50&key=AIzaSyBz_jq_T4ahYmK0UlkpyfYkX4W-5m6PDl0"
  }),
  methods: {
    getData() {
      fetch(this.url)
        .then(json => json.json())
        .then(data => {
          this.videos = data.items;
          this.carousel();
          this.cambiartitulo(this.videos[0].snippet.title);
        });
    },
    getId(video) {
      return `https://www.youtube.com/embed/${
        video.snippet.thumbnails.default.url.split("/")[4]
      }`;
    },
    getListId(lista) {
      return `https://www.youtube.com/watch?v=${
        lista.snippet.thumbnails.default.url.split("/")[4]
      }&list=${lista.id}`;
    },
    getList() {
      fetch(this.url2)
        .then(json => json.json())
        .then(data => {
          this.listas = data.items;
        });
    },
    cambiartitulo(titulo) {
      this.titulo = titulo;
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
    this.getList();
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
  margin-top: 20px;
}

.titulovideo {
  margin-top: 10px;
  color: white;
  font-family: "Lobster", cursive;
  text-align: center;
}

.titulolistas {
  margin-top: 10px;
  margin-bottom: 35px;
  color: white;
  font-family: "Lobster", cursive;
  text-align: center;
}

.listas {
  color: white;
  font-family: "Lobster", cursive;
  font-size: 16px;
}

.v-card__title.v-card__title--primary {
  padding-top: 0;
  padding-bottom: 50px;
}
</style>