<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import useAuth from '../stores/auth.js';
import ConfirmAlert from './alerts/ConfirmAlert.vue';


export default {
  
  name:'Header',
  components: {
    'confirm-alert': ConfirmAlert
    },
  data(){
    const auth = useAuth()
    return{
      userAuth: auth,
      logoutAlerta: false,
      confirm: false
    }
  },
  setup () {
    return {
      tab: ref(''),
      clickSearch: false
    }
  },
  methods:{
    confirmarLogout(){
      this.logoutAlerta = true
    },
    cancelarLogout(){
      this.logoutAlerta = false
    },
    logout(){
      this.userAuth.userLogout()
    }
  }
}
</script>
<template>
   
    <div class="q-gutter-y-sm">
      <q-toolbar  class="fundo-cinza text-white q-toolbar-principal">
        <img class="header-logo" src="../assets/img/header/Playstation_logo_colour.png">
        <!-- Dropdown - Categorias -->
        <q-toolbar class="desaparecer q-toolbar">
            <q-tabs v-model="tab" shrink>
                <RouterLink to="/" class="RouterLink">
                    <q-tab name="tab1" label="Home" />
                </RouterLink> 
                <q-tab name="tab2">
                  <p style="width:120px" class="p-categorias">Categorias</p>
                  <q-menu fit style="width:120px;border-radius: 0px;" >
                    <q-list style="min-width: 100px" class="fundo-cinza text-white">
                        <a href="/games/category/ação">
                          <q-item clickable>
                            <q-item-section>Ação</q-item-section>
                          </q-item>
                        </a>
                      <a href="/games/category/aventura" class="RouterLink">
                        <q-item clickable>
                          <q-item-section>Aventura</q-item-section>
                        </q-item>
                      </a>

                      <a href="/games/category/tiro" >
                        <q-item clickable>
                          <q-item-section>Tiro</q-item-section>
                        </q-item>
                      </a>

                      <a href="/games/category/aberto" >
                        <q-item clickable>
                          <q-item-section>Mundo Aberto</q-item-section>
                        </q-item>
                      </a>

                      <a href="/games/category/luta" >
                        <q-item clickable>
                          <q-item-section>Luta</q-item-section>
                        </q-item>
                      </a>
                      
                      <a href="/games/category/rpg" >
                      <q-item clickable>
                        <q-item-section>RPG</q-item-section>
                      </q-item>
                    </a>
                    <a href="/games/category/sobrevivência" >
                      <q-item clickable>
                        <q-item-section>Sobrevivência</q-item-section>
                      </q-item>
                    </a>
                    <a href="/games/category/terror" >
                      <q-item clickable>
                        <q-item-section>Terror</q-item-section>
                      </q-item>
                    </a>
                    </q-list>
                  </q-menu>
                </q-tab>      
            </q-tabs>
        </q-toolbar>
        <!-- Dropdown - Sign Up -->
        <div class="q-pa-md desaparecer">
            <q-tabs v-model="tab" shrink >  
                <q-tab name="tab3" label="" style="width:160px; max-width: 500px;" >
                  <div class="div-sign-up">
                    <q-btn flat round dense icon="group_add" />
                    <p v-if="!userAuth.isAuthenticated()"> Sign Up</p>
                    <p v-if="userAuth.isAuthenticated()">{{ userAuth.getUsername().replace(/["]/g, '') }}</p>
                  </div>
                  <q-menu fit style="width:158px;border-radius: 0px; max-width: 500px;" >
                    <q-list style="min-width: 100px" class="fundo-cinza text-white">

<!--  =======================     Autenticado!!!!! ======================    -->

                      <RouterLink v-if="userAuth.isAuthenticated()" to="/games/listaDeGames">
                        <q-item clickable>        
                          <q-item-section  >Lista de Games</q-item-section>
                        </q-item>
                      </RouterLink>
                      <RouterLink v-if="userAuth.isAuthenticated()" to="/cadastro">
                        <q-item clickable>                       
                            <q-item-section >Novo Cadastro</q-item-section>
                        </q-item>
                      </RouterLink>
                        <q-item  @click="confirmarLogout()" v-if="userAuth.isAuthenticated()"  clickable >                       
                            <q-item-section >LogOut</q-item-section>
                        </q-item>
                      
<!-- =======================   Não está autenticado!!!!! =======================   -->
                      <RouterLink v-if="!userAuth.isAuthenticated()" to="/login">
                        <q-item clickable>        
                          <q-item-section >Login</q-item-section>
                        </q-item>
                      </RouterLink>

                      <RouterLink  v-if="!userAuth.isAuthenticated()" to="/cadastro">
                        <q-item clickable>                       
                            <q-item-section >Criar Conta</q-item-section>
                        </q-item>
                      </RouterLink>
                    </q-list>
                  </q-menu>

                </q-tab>
            </q-tabs>

        </div>
        <q-btn flat round dense class="btn-menu">
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
      <confirm-alert v-on:confirm="logout()" v-on:cancel="cancelarLogout()" v-if="(logoutAlerta)" :username="userAuth.getUsername()"/>

    </div>
  </template>
<style scoped>

.clickSearch{
  display: none;
}

.header-logo{
  width: 50px;
  padding-left: 12px;
}

.div-sign-up{
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-sign-up p{
  margin: 0;
}

.fundo-cinza{
    background-color: #232323
}
.p-categorias{
  margin: 0;
}
.btn-menu{
  display: none;
}



@media (max-width:545px){
  .desaparecer{
    display: none;
  }
  .q-toolbar-principal{
    text-align: center;
    justify-content: space-between;
  }
  .btn-menu{
    margin: 0;
    display: block;
  }
}

</style>