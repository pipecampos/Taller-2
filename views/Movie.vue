<template>
  <div class="d-flex Vista row mx-5">
     <PeliculaCard :movie="movie" col = "col-md-12" />
      <div id = "titulo">
        {{ movie.title }}  
      </div>
      <a>Genero: </a>
      <div id = "genero" v-for = "genres in movie.genres" :key ="genres.name">
          {{genres.name}},  
      </div>
      <div id = "Contenido">
        <a> Resumen:</a> <br>
         {{movie.overview}}
      </div>
      <button id = "atras" class="btn btn-primary m-2" @click="atras()">Volver</button>
  </div>
</template>

<script>
import Movie from "@/models/Movie.js"
import api from "@/services/api.service.js"
import PeliculaCard from '../components/PeliculaCard.vue';
export default {
  components: { PeliculaCard },
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const { data } = await api.getMovie(this.$route.params.id);
      this.movie = new Movie(data);
    },
    async atras(){
      this.$router.go(-1)
    },
  },
  
};
</script>
<style>
a{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#atras{
  width: 120px;
  height: 45px;
}
.d-flex{
 justify-content: center;
}
</style>