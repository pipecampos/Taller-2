<template>
  <div class="d-flex Valoradas row mx-0">
       <PeliculaCard v-for="mov in peliculaArray" :key="mov.title" :movie="mov" >
        {{ mov.title }} 
       </PeliculaCard>
       <div>
         <button class="btn btn-primary m-2" id = "vermas" @click="getMovies(page + 1)">Ver Mas</button>    
        </div>
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
      page: 1,
      peliculaArray: [],
    };
  },
  mounted() {
    this.getMovies(1);
  },
  methods: {
    async getMovies(page){
      this.page = page;
      const { data } = await api.getTopRated(this.page);
      this.peliculaArray.push(...data.results.map(movie => new Movie(movie)));   
    },
  },
};
</script>
<style>
#vermas{
  width: 120px;
  height: 45px;
}
</style>