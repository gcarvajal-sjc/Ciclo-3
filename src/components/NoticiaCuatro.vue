<template>
  <v-container>
    <v-row class="row py-5">
      <v-col class="child-flex" cols="4" align-self="center">
        <h2>{{ news_type }}</h2>
        <img v-bind:src="news_img_1" />
      </v-col>
      <v-col class="child-flex" cols="8">
        <h4>{{ news_date }}</h4>
        <h2>{{ news_title }}</h2>
        <p>{{ news_paragraph_1 }}</p>
        <img v-bind:src="news_img_2" class="d-block mx-auto py-3" />
        <p>{{ news_paragraph_2 }}</p>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script>
export default {
  name: "NoticiaCuatro",

  data() {
    return {
      news_type: "HUMOR",
      news_img_1: require("../assets/img/IMG-NOTICIA-Cuatro.jpg"),
      news_date: "17-09-2021",
      news_title: "Sonreir",
      news_paragraph_1:
        "Una imagen dice más que mil palabras. Te invitamos a ver lo que pasa cuando dos desarrolladores trabajan en la misma rama. Cualquier parecido con la realidad es pura coincidencia.",
      news_img_2: require("../assets/img/IMG-NOTICIA-Cuatro_pink_panter.png"),
      news_paragraph_2:
        "Sonreir estimula la liberación de sustancias como dopamina, serotonina y endorfinas, neurotransmisores que contribuyen a aumentar la sensación de bienestar, y reduce los niveles de cortisol, una hormona que se segrega como respuesta al estrés y la ansiedad.",
    };
  },
};
</script>


<style>
</style>