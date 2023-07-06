<template>
  <div>
    <div class="row mt-5 text-center">
      <div class="col-md-4 col-lg-4 offset-4">
        <div class="mb-6">
          <img :src="movie.thumbnailUrl" alt="Image" class="card-img-top">
          <div class="">
            <h3>{{ movie.title }}</h3>
            <a class="">{{ movie.url }}</a>
            <br>
            <br>
            <p class=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tortor id urna tincidunt tincidunt. Nam auctor fringilla neque, id feugiat nunc efficitur in. Morbi vel risus cursus, semper urna sed, posuere nunc. Vestibulum sodales ante quis erat venenatis, nec fringilla leo laoreet. Duis vel gravida nisi. Nulla interdum lobortis est sed lobortis. Nulla bibendum lectus tellus, ut rhoncus purus facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tortor id urna tincidunt tincidunt. Nam auctor fringilla neque, id feugiat nunc efficitur in. Morbi vel risus cursus, semper urna sed, posuere nunc. </p>

            <router-link :to="`/movies/${movie.id}/reviews`">View Reviews</router-link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieDetail',
  data() {
    return {
      movie : [],
      //id: ''
    }
  },
  // props:{
  //   movie:{
  //     type: Object
  //   }
  // },
  // created(){
  //   this.movie = this.$route.params.id
  //   console.log(this.movie);
  // }
  mounted() {
    this.fetchMovie();
  },
  methods: {
    fetchMovie() {
      const id = this.$route.params.id
        axios
        .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
          .then((response) => {
            console.log(response);
            this.movie = response.data
          })
          .catch((error) => {
            console.error(error);
          });
    },
  }
 
}
</script>
