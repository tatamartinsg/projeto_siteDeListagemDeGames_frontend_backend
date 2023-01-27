import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Game from '../components/Game.vue'
import Categorias from '../components/Categorias.vue'
import SignUp from '../components/sign-in-up/SignUp.vue'
import SignIn from '../components/sign-in-up/SignIn.vue'
import NotFound from '../components/NotFound.vue'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path:'/games/category/:nameCategory',
      name: 'Categorias', 
      component: Categorias,
      props: true
    },
    {
      path:'/games/:id',
      name: 'Game', 
      component: Game,
      props: true
    },
    {
      path:'/cadastro',
      name: 'SignUp', 
      component: SignUp,
    },
    {
      path:'/login',
      name: 'SignIn', 
      component: SignIn,
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound 
    },
  ]
})

export default routes
