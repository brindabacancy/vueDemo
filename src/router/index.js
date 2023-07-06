import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'
import Login from '../components/LoginPage.vue'
import MovieGrid from '../components/MovieGrid.vue';
import MovieBase from '../components/MovieBase.vue';
import MovieDetail from '../components/MovieDetail.vue';
import MovieReviews from '../components/MovieReviews.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/movies', 
    component: MovieBase, 
    meta: { requiresAuth: true },
    children: [
      { path: '', component: MovieGrid },
      { path: ':id', component: MovieDetail },
      { path: ':id/reviews', component: MovieReviews },
    ]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  // console.log("u ",user);
  return user !== null && user !== undefined;
};
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !isAuthenticated()) {
    next('/login'); 
  } else {
    next(); 
  }
});


export default router;
