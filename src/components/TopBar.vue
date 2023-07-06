<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <img src="../assets/logo.png" alt="Vue logo" width="30" height="30" class="d-inline-block align-top">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item" > 
              <router-link to="/movies" class="nav-link">Movie List</router-link>
            </li>
            <li class="nav-item" > 
              <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  computed:{
    isLoggedIn() {
      const user = localStorage.getItem('user');
      return (user !== null && user !== undefined) ? true : false
    }
  }

}
</script>
