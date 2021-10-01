<template>
  <v-app>
    <v-app-bar app flat>
      <!-- <Header /> -->
    </v-app-bar>

    <v-content> 
      <Galeria />
      <NoticiaUno />
      <NoticiaDos />
      <NoticiaTres />
      <NoticiaCuatro />
    </v-content>
  </v-app>
</template>

<script>
// import Galeria from "./components/Galeria.vue";
import NoticiaUno from "./components/NoticiaUno.vue";
import NoticiaDos from "./components/NoticiaDos.vue";
import NoticiaTres from "./components/NoticiaTres.vue";
import NoticiaCuatro from "./components/NoticiaCuatro.vue";
// import Header from "./components/Header.vue";
export default {
  name: "App",

  components: {
    // Header,
    // Galeria,
    NoticiaUno,
    NoticiaDos,
    NoticiaTres,
    NoticiaCuatro,
  },
  Data: () => ({
    //
  }),
};
</script>
