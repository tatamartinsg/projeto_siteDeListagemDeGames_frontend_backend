<script>
import axios from 'axios'
import CarouselPrincipal from './carousels/CarouselPrincipal.vue'
import GamesServices from '../services/GamesServices'

export default {
  props: ['id'],
  components: {
    'carousel-principal': CarouselPrincipal,
  },
  data(){
    return{
      game: {}
    }
  },
  mounted(){
    const id = this.$route.params.id
    this.getGameByID(id)
  },
  methods:{
    async getGameByID(id){
      try{
        const response = await GamesServices.getGameByID(id)
        this.game = response[0]

      }catch(error){
        console.log(error)
        return
      }
    }
  }
}
</script>
<template>
  <!-- cabeçalho -->
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
            <q-btn class="btn-listar-jogo" color="black" label="Listar jogo" />
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
    <div class="overlay-sinopse"></div>
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