<template>

<div :class="col">
  <router-link :to="`movie/${movie.id}`">
    <div>
        <a href="">
        <img  v-bind:src="movie.poster_path" width='350px' height='350px' :alt="movie.title" >
        <p class=" der">Votación | ✩ {{ movie.vote_average }}</p> 
        </a>
      
    </div>
    </router-link>
</div>

</template>

<script>
export default {
  props: {
    movie: {
      required: true,
      type: Object,
    },
    col: {
      type : String,
      default: "col-md-3",
    },
  },
};
</script>
<style>
</style>