<template>
  <v-container>
     
      <h2 class="text-left">Noticias</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
        >
          <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row> 
  </v-container>
</template>

<script>
export default {
  name: "Galeria",

  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/img/IMG-NOTICIA-Uno.png"),
        },
        {
          id: 2,
          src: require("../assets/img/IMG-NOTICIA-Dos.png"),
        },
        {
          id: 3,
          src: require("../assets/img/IMG-NOTICIA-Tres.png"),
        },
        {
          id: 4,
          src: require("../assets/img/IMG-NOTICIA-Cuatro.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
</style>