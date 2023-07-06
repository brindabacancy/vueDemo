<template>
  <div>
    <!-- <h4> Grid View</h4> -->
    <div class="row mt-5">
      <div class="col-md-3 col-lg-3" v-for="movie in movies" :key="movie.id">
        <div class="card mb-3">
          <img :src="movie.thumbnailUrl" alt="Image" class="card-img-top">
          <div class="card-body">
            <p class="card-text">{{ movie.title }}</p>
            <router-link :to="`/movies/${movie.id}`">View More</router-link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieGrid',
  data() {
    return {
      movies : [],
    }
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      axios
      .get('https://jsonplaceholder.typicode.com/photos', {params: { _limit: 30},})
        .then((response) => {
          this.movies = response.data
        })
        .catch((error) => {
          console.error(error);
        });
    },
  }
}
</script>
