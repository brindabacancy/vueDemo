<template>
    <div>
        <ul>
        <li v-for="review in reviews" :key="review.id">
            {{ review.comment }}
        </li>
        </ul>
    </div>
</template>
<script>

export default {
  name: 'MovieReviews',
  data() {
    return {
      reviews : [{
          "id": 1,
          "user": "User 1",
          "comment": "Heartfelt performance by the actors."
        },
        {
          "id": 2,
          "user": "User 2",
          "comment": "The story was captivating."
        }],
    }
  },
  mounted() {
    // this.fetchReviews()
  },
  methods: {
    // fetchReviews() {
    //   axios
    //   .get('https://jsonplaceholder.typicode.com/photos')
    //     .then((response) => {
    //       this.movies = response.data
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
  }
}
</script>