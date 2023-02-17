<script>
import { ref } from 'vue'
import CarouselPrincipal from './carousels/CarouselPrincipal.vue'
import GamesServices from '../services/GamesServices'
import useAuth from '../stores/auth'
import Alert from './alerts/Alert.vue'

export default {
  props: ['id'],
  components: {
    'carousel-principal': CarouselPrincipal,
    'alert-card': Alert
  },
  data(){
    const auth = useAuth()
    return{
      game: {},
      userAuth: auth,
      favoritos: this.favorito,
      acionaAlerta: false,
      listingCode: ref([]),
      tituloAlerta: "",
      descricaoAlerta: "",
      erro: false,
      sucesso: false
    }
  },
  mounted(){
    this.getGameByID()
  },
  methods:{
    getIdJogoParams(){
      return this.$route.params.id
    },
    async getGameByID(){
      try{
        const id = this.getIdJogoParams()
        const response = await GamesServices.getGameByID(id)
        this.game = response[0]

      }catch(error){
        console.log(error)
        return
      }
    },
    desfazAlerta(){
        this.acionaAlerta = false
    },
    verificaAutenticacaoParaAcionarAlertaAoListarJogo(){      
      if(this.userAuth.isAuthenticated()){
        return this.acionaAlerta = false
      }

      this.acionaAlerta = true
      this.tituloAlerta = "Ação Inválida"
      this.descricaoAlerta = "Você precisa de fazer login antes de listar o jogo."
      this.erro = true
      this.sucesso = false
    },
    async listarJogoEnviar(){
      const idJogo = this.getIdJogoParams()
      const body = {
        idGame: idJogo,
        idUser: this.userAuth.getidUserE(),
        username: this.userAuth.getUsername(),
        listingCode: this.listingCode
      }
      const response = await GamesServices.addListingCodeByIdUser(body)
      if(response.error == false){
        this.acionaAlerta = true
        this.tituloAlerta = "Sucesso"
        this.descricaoAlerta = response.message 
        this.erro = false
        this.sucesso = true
      }
      
    }
   
  }
}
</script>
<template>
  <section class="section-principal text-white">
    <div class="div-img-visao text-white">
      <div class="div-p-visao">
          <carousel-principal :allGames="game" :title="'gamepage'" />
      </div>
      <div class="overlay"></div>
    </div>
    <div class="div-titulos">
        <h1 class="h1-nome-game">{{ game.name }}</h1>
        <div class="div-principal-lancamento-disp-class-btn">
          <div class="div-lancamento-disponivel-classificacao">

            <p>Lançamento: {{ game.releaseDate }}</p>

            <div class="div-disponivel-em">
              <p>Disponível em:</p>
              <p v-for="plataforma in game.platforms" :key="plataforma">
                <a class="a-link-plataforma" :href="plataforma.urlGame" target="_blank" >{{ plataforma.namePlatform}} |</a>
              </p>
            </div>

            <div class="div-classificacao" v-for="info in game.classification" :key="info">
              <img :src="info.imageClassification" style="width: 35px" />
              <div v-for="description in info.description" :key="description">
                <p>{{ description }} |</p>
              </div>
            </div>

          </div>
         
          <div class="div-button-listar-jogo">
            <!-- <q-btn class="btn-listar-jogo" color="black" label="Listar jogo"  > -->
              <q-btn color="black" @click="verificaAutenticacaoParaAcionarAlertaAoListarJogo()"  class="btn-listar-jogo" label="Listar jogo" style="width: 200px;border-radius:0px;">
                <alert-card v-if="acionaAlerta" 
                    v-on:clicouOk="desfazAlerta()"
                    :tituloAlerta="tituloAlerta" 
                    :messageAlerta="descricaoAlerta"
                    :erro="erro"
                    :sucesso="sucesso"     
                />
              <q-menu v-if="userAuth.isAuthenticated()" fit style="border-radius:0px;">

                <q-form @submit="onSubmit" style="min-width: 100px; background-color: black; " class="lista text-white text-center">
                 
                  <q-item clickable class="item-lista">
                    
                    <q-item-section  class="">
                      <q-checkbox keep-color v-model="listingCode" val="10" label="Favorito" color="teal" />
                    </q-item-section>
                  </q-item>
                  <q-item clickable class="item-lista">
                    <q-item-section>           
                      <q-checkbox keep-color v-model="listingCode" val="20" label="Já zerei" color="teal" />
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable class="item-lista">
                    <q-item-section>
                      <q-checkbox keep-color v-model="listingCode" val="30" label="Desejo comprar" color="teal" />
                    </q-item-section>
                  </q-item>
                  <q-item clickable class="item-lista">
                    <q-item-section>
                      <q-checkbox keep-color v-model="listingCode" val="40" label="Jogando" color="teal" />
                    </q-item-section>
                  </q-item>

                  <q-item clickable class="item-lista">
                    <q-item-section>
                      <q-btn @click="listarJogoEnviar" style="color:#16f516;">Enviar</q-btn>
                    </q-item-section>
                  </q-item>

                 
                  
                  <q-separator />

                </q-form>
            </q-menu>

            </q-btn>
            
      
          </div>
        </div>
    </div>
  </section>

  <!-- video e sinopse -->
  <section class="section-video-sinopse  text-white">
    <div class="div-video">
      <iframe class="video" width="420" height="315"
      :src="game.video">
      </iframe>
    </div>
    <div class="div-sinopse">
      <h1 class="h1-sinopse">Sinopse</h1>
      <p class="p-sinopse">{{ game.synopsis }}</p>
    </div>
    <!-- <div class="overlay-sinopse"></div> -->
  </section>
</template>
<style scoped>
/* --------- Cabeçalho da page jogo -------*/
.section-principal{
  width: 100%;
}
.div-principal-lancamento-disp-class-btn{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

}
.div-titulos{
  width: 97%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 250px;
  justify-content: space-around;
  position: absolute;
  top:0px; 
  left:10px;
  
}
.div-lancamento-disponivel-classificacao{
  display: flex;
  flex-flow: column wrap;
  gap: 25px;
  width: 100%;
}
.div-disponivel-em{
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
}
.div-classificacao{
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
  align-items: center;
}
.h1-nome-game{
  font-size: 35px;
  text-shadow: 5px 5px 5px black;
}
.section-principal{
  position: relative;
  top: 0;
  left: 0;
}
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  transition: 0.5s;
}

.a-link-plataforma:hover{
  color: rgb(169, 169, 169);
  text-shadow: 5px 5px 5px black;
}
.btn-listar-jogo{
  width: 150px;
  height: 60px;
}
.lista{
  text-transform: uppercase;
  font-size: 14px;
}

@media(max-width: 880px){
  .div-titulos{
    gap: 200px;
    font-size: 14px;
  }
  .div-principal-lancamento-disp-class-btn{
    flex-direction: column;
    gap: 15px;
  }
}
@media(max-width: 620px){
  .div-titulos{
    gap: 195px;
    padding: 35px;
  }
}
@media (max-width: 516px){
  .div-titulos{
    gap: 180px;
    padding: 35px;
  }
  .btn-listar-jogo{
    width: 145px;
    height: 55px;
  }
}
@media (max-width: 451px){
  
  .div-titulos{
    gap: 160px;
    padding: 35px;
    text-align: center;
  }
  .div-lancamento-disponivel-classificacao{
    gap: 13px;
  }
  .div-disponivel-em, .div-classificacao{
    justify-content: center;
    font-size: 12px;
  }
  
}

/* ------- video-sinopse ------- */
.section-video-sinopse{
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5%;
  text-align: center;
  align-items: center;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 8%;
  padding-right: 5%;
}
.div-sinopse{
  display: flex;
  flex-direction: column;
  gap: 40px;
  line-height: 35px;
  margin: 0 auto;
  width: 50%;
  padding: 50px;
}
.video{
  border-radius: 5px;
  width: 420px;
  height: 315px;
}
.h1-sinopse{
  font-size: 25px;
}
.section-video-sinopse{
  position: relative;
  top: 0;
  left: 0;
}
.overlay-sinopse{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(19, 19, 19);
  width: 100%;
  height: 100%;
  opacity: 0.4;
  transition: 0.8s;
}
.overlay-sinopse:hover{
  opacity: 0;
  background-color: black;
}


@media (max-width: 900px){
  .section-video-sinopse{
    flex-direction: column;
  }
  .div-sinopse{
    width: 100%;
    padding: 30px;
    padding-top: 5px;
    gap: 12px;
    text-align: justify;
  }
  .h1-sinopse{
    text-align: center;
  }
  .div-video{
    padding: 25px;
    width: 100%;
  }
  .video{
    width: 100%;
  }
}
</style>