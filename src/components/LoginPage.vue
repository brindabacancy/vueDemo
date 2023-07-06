<template>
  <div class="container mt-5">
    <h2>Login</h2>
    <form  @submit="loginForm">
      <div class="col-3">
        <label for="username" class="form-label">Username:</label>
        <input class="form-control" type="text" v-model="username" required>
      </div>
      <div class="col-3">
        <label for="password" class="form-label">Password:</label>
        <input class="form-control" type="password"  v-model="password" required>
      </div>
      <div class="col-3">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    loginForm(e) {
      e.preventDefault(); 
      if (this.username === 'admin' && this.password === 'admin') {
        localStorage.setItem('user', JSON.stringify({ username: this.username }));
        this.$router.push('/');
      } else {
        alert('Please try again.');
        // console.log('Please try again.')
      }
    },
  },
};
</script>
