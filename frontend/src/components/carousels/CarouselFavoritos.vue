<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

export default {
  props: ['games'],
  data(){
    return{
      gamesFavoritosSlide1: [],
      gamesFavoritosSlide2: [],
      hover: false,
    }
  },
  setup (props) {
    return {
      slide: ref(1),
    }
  },
  created(){
    this.getGamesFavoritos()
  },
  methods:{
    getGamesFavoritos(){
      const allGamesFavoritos = this.games
      this.gamesFavoritosSlide1 = allGamesFavoritos.slice(0,5)
      this.gamesFavoritosSlide2 = allGamesFavoritos.slice(5,10)
    },
    hoverGamesFavoritos(){
      this.hover = true
    },
    offHover(){
      this.hover = false
    },
  },

}
</script>

<template>

    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        padding
        arrows
        height="100%"
        class="carousel-cards-favoritos shadow-2 rounded-borders "
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div  id="div-carousel-favoritos" 
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            
              <div v-for="(game, index) in gamesFavoritosSlide1" :key="game" :class="'card'+(index+1)" 
                  class="div-cards">

                  <RouterLink :to="'/game/'+game.idJogo" class="RouterLink" > 
                    <q-img :ratio="1" class="img-query rounded-borders full-height "
                      :src="game.imagemCard" />
                    <div class="div-coracao-preto">
                      <img class="img-coracao" src="../../assets/img/coracao-preto-tracadobranco.png">
                    </div>
                  </RouterLink>

              </div>
           

          </div>
        </q-carousel-slide>


        <q-carousel-slide :name="2" class="column no-wrap">
          <div  id="div-carousel-favoritos"  
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">

            <div v-for="(game, index) in gamesFavoritosSlide2" :key="game" :class="'card'+(index+1)" 
                    class="div-cards">

                    <RouterLink :to="'/game/'+game.idJogo" class="RouterLink" > 
                      <q-img :ratio="1" class="img-query rounded-borders full-height "
                        :src="game.imagemCard" />
                      <div class="div-coracao-preto">
                        <img class="img-coracao" src="../../assets/img/coracao-preto-tracadobranco.png">
                      </div>
                    </RouterLink>

                </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

</template>

<style scoped>

.div-cards{
  transition: all .2s ease-in-out;
  width: 230px;
  position:relative;
  top:0px; 
  left:0px;
}
.div-cards:hover{
  transform: scale(1.1);
}
.div-coracao-preto{
  position:absolute;
  top:0px; 
  left:185px;
}
.carousel-cards-favoritos {
  background-color: rgb(2, 2, 2);
}
.img-coracao{
  width: 40px;
}
#div-carousel-favoritos{
  display: flex;
  flex-direction: row;
  gap: 25px;
}
.img-favoritos{
  object-fit: contain;
}
.hover{
  opacity: 0.5;
}
@media (max-width: 1200.60px){
    #div-carousel-favoritos{
      display: grid;
      grid-template-areas: 
      "card1 card2 card3 X"
      "card4 card4 card5 card5 ";
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      row-gap: 20px;
    }
    .card1{
      grid-area: card1;
    }
    .card2{
      grid-area: card2;
    }
    .card3{
      grid-area: card3;
    }
    .card4{
      grid-area: card4;
    }
    .card5{
      grid-area: card5;
      grid-column: 2/4;
    }
}
@media (max-width: 1000px){
  #div-carousel-favoritos{
      display: grid;
      /* grid-template-areas: 
      "card1 card1 card2 card2"
      "card3 card3 card4 card4 ";
      grid-template-columns: 1fr 1fr 1fr 1fr; */
      justify-items: center;
      grid-row-gap: 15px;
    }
    .card1{
      grid-area: card1;
    }
    .card2{
      grid-area: card2;
    }
    .card3{
      grid-area: card3;
    }
    .card4{
      grid-area: card4;
    }
    .card5{
      grid-area: card5;
      grid-column: 2/4;
    }

}
@media(max-width: 990px){
  .div-cards{
      width: 180px;
    }
    .img-query {
      width: 100%;
      height: 200px;
    }
    .div-coracao-preto{
      left:135px;
    }
}
@media (max-width: 700px){
  #div-carousel-favoritos{
      display: flex;
      flex-direction: column;
    }
    .img-favoritos{
      object-fit: contain;
    }
}
</style>