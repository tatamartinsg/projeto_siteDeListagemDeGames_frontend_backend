import { createRouter, createWebHistory, routerKey } from 'vue-router'
import useAuth from '../stores/auth.js'
import Home from '../components/Home.vue'
import Game from '../components/Game.vue'
import Categorias from '../components/Categorias.vue'
import SignUp from '../components/sign-in-up/SignUp.vue'
import SignIn from '../components/sign-in-up/SignIn.vue'
import NotFound from '../components/NotFound.vue'
import ListGames from '../components/ListGames.vue'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
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
      name: 'Cadastro', 
      component: SignUp,
    },
    {
      path:'/login',
      name: 'Login', 
      component: SignIn,
    },
    {
      path:'/games/listaDeGames',
      name: 'Lista de Games', 
      component: ListGames,
      meta:{
        auth: true
      }
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound 
    },
  ]
})

routes.beforeEach(async (to,from,next) => {
  if(to.meta?.auth){
    const auth = useAuth()

    if(auth.getToken() && auth.getUsername()){
      const isAuthenticated = await auth.verifyToken()

      if(isAuthenticated.error){
        return next({name:'Login'})
      }
      
      return next() 
    }
    return next({name:'Login'})
  }
  return next()
})

export default routes
