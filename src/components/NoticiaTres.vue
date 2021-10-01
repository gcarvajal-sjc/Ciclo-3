<template>
  <v-container>
    <v-row class="row py-5">
      <v-col class="child-flex" cols="4" align-self="center">
        <h2>{{ news_type }}</h2>
        <img v-bind:src="news_img" />
      </v-col>
      <v-col class="child-flex" cols="8">
        <h4>{{ news_date }}</h4>
        <h2>{{ news_title }}</h2>
        <p>{{ news_paragraph_1 }}</p>
        <p>{{ news_paragraph_2 }}</p>
        <p>{{ news_paragraph_3 }}</p>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script>
export default {
  name: "NoticiaTres",

  data() {
    return {
      news_type: "SOCIALES",
      news_img: require("../assets/img/IMG-NOTICIA-Tres.png"),
      news_date: "31-08-2021",
      news_title: "Conozca los ganadores rumbo a ciclo 3 de MisiónTIC y UTP<",
      news_paragraph_1:
        "Por fin llegó el día tan anhelado. Quienes estabamos en clase pedimos a nuestros profesores que hicieramos una pausa para ver el en vivo de la rifa de los codiciados premios y lograr ser los grandes afortunados de ganarnos el PlayStation 4 o el PC gamer. En el chat se podían leer todo tipo de mensajes como: 'sagrado rostro...!!! PC GAMER', 'la play es mia', 'ya vi mi nueva compu' y algunos compañeros también hacían alusión a su suerte en las rifas: 'yo solo me gano turnos extra' ó 'yo solo me gano los turnos del 24, 31 y Reyes'. Todos guardabamos la esperanza de ser el elegido de la tan famosa quinta llamada",
      news_paragraph_2:
        "Lo que pensabamos que iba a ser un evento de 20 minutos se convirtió en una 'clase' de 90 minutos. 'Hola, hablas con Fanny Juliet Londoño de misiónTIC UTP' era la frase que escuchabamos sin parar! Para resumir la historia, sucedía que el estudiante no estaba participando en el en vivo, o no se sabía el santo y seña, o simplemente no había repasado el contenido de la unidad 1 del ciclo 3. Las preguntas de la profesora Grace Fernandez no eran respondidas correctamente a pesar de que ella volvía a preguntar lo mismo. A todos se nos empezó a hacer eterno el evento aunque era divertido ver las caras de 'no puede ser!!!' de Fanny, Maira y la profesora Grace.",
      news_paragraph_3:
        "A Juan Felipe Barahona González y Yeison Camilo de verdad <b>MUCHAS GRACIAS</b> por contestar correctamente, sino tal vez aún estaríamos en el en vivo! Así que felicidades a los afortunados ganadores. Espera próximamente la continuación de esta noticia con las historias de los comentarios de los estudiantes posteriores al evento: 'mejor que la final de master chef', 'de pura rabia luego me compraré mi propio PC con juegos de azar y mujerzuelas', 'rifen otro', 'me voy de clase'",
    };
  },
};
</script>


<style>
</style>