<script>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

export default {
  props: ['games','subtitulo'],
  data(){
    return{
      anoLancamento: [],
      primeiroSlide: [],
      segundoSlide: [],
      terceiroSlide: [],
      subtituloString:''
    }
  },
  setup (props) {
    return {
      slide: ref(1),
      autoplay: ref(false)
    }
  },
  created(){
    this.separarSlides()
  },
  methods:{
    separarSlides(){
      this.primeiroSlide = this.games.slice(0,3)
      this.segundoSlide = this.games.slice(3,6)
      this.terceiroSlide = this.games.slice(6,9)
    },
  }
}
</script>
<template>
    <div class="div-carousel-geral">
      <q-carousel
        class="q-carousel-minicard"
        swipeable
        animated
        v-model="slide"
        ref="carousel"
        infinite
      >
        <q-carousel-slide :name="1" >
            <div v-for="(game, index) in primeiroSlide " :key="game" >
              <RouterLink :to="'/games/'+game.idGame" class="div-minicards" >
                <div class="div-img-minicard col-4">
                    <q-img
                      class="img-jogo-do-ano"
                      :src="game.imageCard"
                      :ratio="4/3"
                    />                 
                </div>
               
                <div class="div-p-minicard" >
                    <p class="p-minicard p-minicard-titulo">{{ game.name }}</p>
                    <p v-if="subtitulo == 'gameoftheyear'" class="p-minicard p-minicard-premiado">
                      Game of the year {{ game.releaseDate.split(" ")[4] }}
                    </p>
                    <p v-if="subtitulo == 'lançamento'" class="p-minicard p-minicard-premiado">{{ game.releaseDate.split(" ")[4]  }}</p>
                </div>
                <div class="div-opcoes-minicard">
                    <q-btn flat round dense icon="more_vert" />
                </div>
              </RouterLink>
                
            </div>         
        </q-carousel-slide>

        <q-carousel-slide :name="2">
          <div v-for="(game, index) in segundoSlide " :key="game" >
            <RouterLink :to="'/games/'+game.idGame" class="div-minicards" >
              <div class="div-img-minicard col-4">
                  <q-img
                    class="img-jogo-do-ano"
                    :src="game.imageCard"
                    :ratio="4/3"
                  />                 
              </div>
              <div class="div-p-minicard" >
                  <p class="p-minicard p-minicard-titulo">{{ game.name }}</p>
                  <p v-if="subtitulo == 'gameoftheyear'" class="p-minicard p-minicard-premiado">
                      Game of the year {{ game.releaseDate.split(" ")[4]  }}
                    </p>
                  <p v-if="subtitulo == 'lançamento'" class="p-minicard p-minicard-premiado">{{ game.releaseDate.split(" ")[4] }}</p>
              </div>
              <div class="div-opcoes-minicard">
                  <q-btn flat round dense icon="more_vert" />
              </div>
            </RouterLink>
          </div>        
        </q-carousel-slide>
        
        <q-carousel-slide :name="3">
          <div v-for="(game, index) in terceiroSlide " :key="game" >
            <RouterLink :to="'/games/'+game.idGame" class="div-minicards" >
              <div class="div-img-minicard col-4">
                  <q-img
                    class="img-jogo-do-ano"
                    :src="game.imageCard"
                    :ratio="4/3"
                  />                 
              </div>
              <div class="div-p-minicard" >
                  <p class="p-minicard p-minicard-titulo">{{ game.name }}</p>
                  <p v-if="subtitulo == 'gameoftheyear'" class="p-minicard p-minicard-premiado">
                      Game of the year {{ game.releaseDate.split(" ")[4] }}
                    </p>
                  <p v-if="subtitulo == 'lançamento'" class="p-minicard p-minicard-premiado">{{ game.releaseDate.split(" ")[4]  }}</p>
              </div>
              <div class="div-opcoes-minicard">
                  <q-btn flat round dense icon="more_vert" />
              </div>
            </RouterLink>
          </div>
        </q-carousel-slide>

  
        <template v-slot:control>
          <!-- <q-carousel-control
            position="top-right"
            :offset="[18, 18]"
            class="text-white rounded-borders"
            style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
          >
            <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />
          </q-carousel-control> -->
  
          <q-carousel-control
            position="bottom-right"
            :offset="[17, 17]"
            class="q-gutter-xs"
          >
            <q-btn
              push round dense color="grey" text-color="black" icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push round dense color="grey" text-color="black" icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </template>
  
<style scoped>
.div-carousel-geral{
  padding: 15px;
}
.div-minicards{
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1.5fr 2fr 0.5fr;
    grid-template-areas: 
    "div-img-minicard div-p-minicard  div-opcoes-minicard"
    "div-img-minicard div-p-minicard  div-opcoes-minicard"
    "div-img-minicard div-p-minicard  div-opcoes-minicard";
    transition: 0.5s;

}
.div-minicards:hover{
    cursor: pointer;
    background-color: black;
    opacity: 0.9;
    width: 100%;
}
.div-img-minicard {
    padding: 15px;
    grid-area: div-img-minicard;
}
.div-opcoes-minicard {
    padding-top: 30px;
    grid-area: div-opcoes-minicard;
}
.div-p-minicard {
    grid-area: div-p-minicard;
    display: flex;
    flex-direction: column;
    gap: 28px;
    text-transform: uppercase;
    padding-top: 35px;

}
.div-p-minicard p{
  font-size: 12px;
}
.p-minicard{
  line-height: 18px;
}

.q-carousel-minicard{
    margin: 0 auto;
    height: 100%;
    width: 100%;
    background-color: rgb(19, 19, 19);
    border-radius: 8px;
    padding-bottom: 45px;
}
.img-jogo-do-ano{
    width: 140px;
    height: 190px;
}

@media (max-width: 1111px){
  .img-jogo-do-ano{
    width: 100px;
    height: 120px;
}
}
@media (max-width: 950px){
  .q-carousel-minicard{
    width: 80%;
  }
}

@media (max-width: 600px){
  .q-carousel-minicard{
    width: 100%;
  }
}
@media (max-width: 340px){
  .div-carousel-geral{
    padding: 5px;
  }
  .div-p-minicard p{
    font-size: 10px;
  }
  .p-minicard{
    text-align: center;
  }
}
</style>