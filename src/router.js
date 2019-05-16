import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Nacional from "./views/Nacional.vue";
import Internacional from "./views/Internacional.vue";
import Eventos from "./views/Eventos.vue";
import SkillsTv from "./views/SkillsTv.vue";
import Calendario from "./views/Calendario.vue";
import UrbanPost from "./views/UrbanPost.vue";
import QuienSomos from "./views/QuienSomos.vue";
import InfoArtistasNacionales from "./views/InfoArtistasNacionales.vue";
import InfoArtistasInternacionales from "./views/InfoArtistasInternacionales.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/nacional",
      name: "nacional",
      component: Nacional
    },
    {
      path: "/internacional",
      name: "internacional",
      component: Internacional
    },
    {
      path: "/eventos",
      name: "eventos",
      component: Eventos
    },
    {
      path: "/skillstv",
      name: "skillstv",
      component: SkillsTv
    },

    {
      path: "/calendario",
      name: "calendario",
      component: Calendario
    },
    {
      path: "/urbanpost",
      name: "urbanpost",
      component: UrbanPost
    },
    {
      path: "/quiensomos",
      name: "quiensomos",
      component: QuienSomos
    },
    {
      path: "/infoartistasnacionales",
      name: "infoartistasnacionales",
      component: InfoArtistasNacionales
    },
    {
      path: "/infoartistasinternacionales",
      name: "infoartistasinternacionales",
      component: InfoArtistasInternacionales
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
