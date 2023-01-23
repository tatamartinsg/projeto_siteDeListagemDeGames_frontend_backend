<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
export default {
  name:'Header',
  setup () {
    return {
      tab: ref(''),
      clickSearch: false
    }
  }
}
</script>
<template>
    <div class="q-gutter-y-sm">
      <q-toolbar class="fundo-cinza text-white q-toolbar-principal">
        <img class="header-logo" src="../assets/img/header/Playstation_logo_colour.png">
        <!-- Dropdown - Categorias -->
        <q-toolbar class="desaparecer">
            <q-tabs v-model="tab" shrink>
                <RouterLink to="/" class="RouterLink">
                    <q-tab name="tab1" label="Home" />
                </RouterLink> 
                <q-tab name="tab2">
                  <p style="width:120px" class="p-categorias">Categorias</p>
                  <q-menu fit style="width:120px;border-radius: 0px;" >
                    <q-list style="min-width: 100px" class="fundo-cinza text-white">
                        <a href="/categorias/ação">
                          <q-item clickable>
                            <q-item-section>Ação</q-item-section>
                          </q-item>
                        </a>
                      <a href="/categorias/aventura" class="RouterLink">
                        <q-item clickable>
                          <q-item-section>Aventura</q-item-section>
                        </q-item>
                      </a>

                      <a href="/categorias/tiro" >
                        <q-item clickable>
                          <q-item-section>Tiro</q-item-section>
                        </q-item>
                      </a>

                      <a href="/categorias/aberto" >
                        <q-item clickable>
                          <q-item-section>Mundo Aberto</q-item-section>
                        </q-item>
                      </a>

                      <a href="/categorias/luta" >
                        <q-item clickable>
                          <q-item-section>Luta</q-item-section>
                        </q-item>
                      </a>
                      
                      <a href="/categorias/rpg" >
                      <q-item clickable>
                        <q-item-section>RPG</q-item-section>
                      </q-item>
                    </a>
                    <a href="/categorias/sobrevivência" >
                      <q-item clickable>
                        <q-item-section>Sobrevivência</q-item-section>
                      </q-item>
                    </a>
                    <a href="/categorias/terror" >
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
                <q-tab name="tab3" label="" style="width:160px" >
                  <div class="div-sign-up">
                    <q-btn flat round dense icon="group_add" />
                    <p>Sign Up</p>
                  </div>
                  <q-menu fit style="width:158px;border-radius: 0px;" >
                    <q-list style="min-width: 100px" class="fundo-cinza text-white">
                      <q-item clickable>
                        <q-item-section>Login</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <RouterLink to="/cadastrar">
                          <q-item-section>Cadastrar</q-item-section>
                        </RouterLink>
                      </q-item>
                    </q-list>
                  </q-menu>

                </q-tab>
            </q-tabs>
        </div>
        <q-btn flat round dense class="btn-menu">
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
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
.button-sign-up{
    width: 120px;
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