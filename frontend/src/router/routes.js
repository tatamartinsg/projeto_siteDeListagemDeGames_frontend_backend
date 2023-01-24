import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Game from '../components/Game.vue'
import Categorias from '../components/Categorias.vue'
import Cadastrar from '../components/cadastro/Cadastrar.vue'
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
      path:'/users/signUp',
      name: 'Cadastrar', 
      component: Cadastrar,
      props: true
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound 
    },
  ]
})

export default routes
