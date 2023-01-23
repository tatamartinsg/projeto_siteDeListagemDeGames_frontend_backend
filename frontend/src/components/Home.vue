<script>
import { ref } from 'vue'
import axios from 'axios'
import CarouselMiniCard from './carousels/CarouselMiniCard.vue'
import CarouselPrincipal from './carousels/CarouselPrincipal.vue'
import CarouselFavoritos from './carousels/CarouselFavoritos.vue'
import Search from './Search.vue'


export default {
  name:'Home',
  data(){
    return{
      allGames: {},
      gamesDestaques: {},
      gameOfTheYear: {},
      gamesLancamentos: {},
      gamesMaisVendidos: {}
    }
  },
  setup() {
    return {
      slide: ref(1),
    }
  },
  created(){
    this.getGames()
    
  },
  methods:{
    async getGames(){
      await axios.get(`http://localhost:3000/games-imagens`)
          .then(response => {
            this.allGames = response.data
            this.getDestaques(this.allGames)
            this.getGameOfTheYear(this.allGames)
            this.getGamesLancamentos(this.allGames)
            this.getGamesMaisVendidos(this.allGames)

          }).catch( err => {
            console.log(err)
          })
    },
    filtrar(filtro, allGames){
      return allGames.filter((item)=> item.palavraChave.includes(filtro))
    },
    getDestaques(allGames){
      const filtro = 'destaque' 
      this.gamesDestaques = this.filtrar(filtro, allGames)
      this.ordenarPorClassificacao(this.gamesDestaques)
    },
    ordenarPorClassificacao(params){
      params.sort(function(a,b){
        if(a.classificacao > b.classificacao){
          return -1
        }
        else{
          return true
        } 
      })
    },
    getGameOfTheYear(allGames){
      const filtro = 'gameoftheyear' 
      this.gameOfTheYear = this.filtrar(filtro, allGames)
    },
    getGamesLancamentos(allGames){
      const filtro = 'lançamento' 
      this.gamesLancamentos = this.filtrar(filtro, allGames)
    },
    getGamesMaisVendidos(allGames){
      const filtro = 'mais vendido' 
      this.gamesMaisVendidos = this.filtrar(filtro, allGames)
    },


  },
  components: {
    'carousel-minicard': CarouselMiniCard,
    'carousel-principal': CarouselPrincipal,
    'carousel-favoritos': CarouselFavoritos,
    'games-search': Search
  },
}
</script>
<template>
  <main>
      <carousel-principal :allGames="gamesDestaques" :title="'destaque'" />
      <div class="div-h1-search column">
        <h1 class="h1-home text-white">Crie uma conta e liste seus jogos favoritos</h1>
          <games-search :allGames="allGames" />
      </div>
      <section>
        <carousel-favoritos :allGames="allGames" />
      </section>
      <div class="div-minicards-principal text-white">
        <div class="jogos-do-ano">
          <h3>Game Of The Year</h3>
          <carousel-minicard :games="gameOfTheYear" :subtitulo="'gameoftheyear'"  />
        </div>
        <div class="lançamentos">
          <h3>Lançamentos</h3>
          <carousel-minicard :games="gamesLancamentos" :subtitulo="'lançamento'" />
        </div>

        <div class="extra">
          <h3>Mais Vendidos</h3>
          <carousel-minicard :games="gamesMaisVendidos" :subtitulo="'mais-vendidos'"  />
        </div>
      </div>
      <section class="section-img-visao text-white">
          <div class="div-p-visao">
            <p class="p-visao-geral">
              Visão geral do site
            </p>
            <p class="p-visao-cadastre"> Cadastre e liste seus jogos favoritos.
              Mergulhe, explore e, principalmente, se divirta. 
              Chame seus amigos e inicie essa jornada com agente!
            </p>
          </div>
          <div class="overlay"></div>
      </section>
  </main>
</template>

<style scoped>

.div-minicards-principal{
  display: grid;
  grid-template-areas: 
  "jogos-do-ano lançamentos extra"
  "jogos-do-ano lançamentos extra"
  "jogos-do-ano lançamentos extra";
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
}
.div-minicards-principal h3{
  text-transform: uppercase;
  font-size: 22px;
  text-align: center;
  color: rgb(78, 78, 78);
}
.jogos-do-ano{
  grid-area: jogos-do-ano;
}
.lançamentos{
  grid-area: lançamentos;
}
.extra{
  grid-area: extra;
}
.div-p-visao{
  display: flex;
  flex-direction: column;
  width: 32%;
  padding: 50px;
  margin-top: 4%;
  gap: 20px;
  text-shadow: 3px 3px 3px black;
}
.p-visao-geral{
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
}
.p-visao-cadastre{
  text-align: justify;
  font-size: 25px;
  line-height: 45px;
}
.section-img-visao{
  width: 100%;
  height: 500px;
  background-image: url(../assets/img/home/visao-jogo/thelastofus-black.jpg);
  background-size: 100%;
  background-position: 50% 20%;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;
  border-top: 5px groove rgb(16, 16, 16);
  margin: 0;

}
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transition: 0.5s;
  border-radius: 5px;
}
.overlay:hover{
  opacity: 0;
}

.div-h1-search{
  padding: 10px;
}
.h1-home{
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  padding: 30px;
}


@media (max-width: 1240px){
    .div-p-visao{
      width: 40%;
      height: 100%;
    }
}
@media (max-width: 1005px){
    .section-img-visao{
      height: auto;
    }
    .div-p-visao{
      width: 50%;
    }
    .p-visao-geral{
      font-size: 25px;
    }
    .p-visao-cadastre{
      font-size: 22px;
    }
}

@media(max-width: 950px){
  .div-minicards-principal{
    display: grid;
    grid-template-areas: 
    "jogos-do-ano jogos-do-ano jogos-do-ano"
    " lançamentos  lançamentos  lançamentos "
    "extra extra extra";
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 50px;
  }
}

@media (max-width: 765px){
    .h1-home{
      font-size: 22px;
    }
    .div-p-visao{
      padding: 22px;
    }
    .p-visao-geral{
      font-size: 20px;
    }
    .p-visao-cadastre{
      font-size: 16px;
      line-height: 35px;
    }
}

@media (max-width: 600px){
    .section-img-visao{
      height: 270px;
    }
    .p-visao-geral{
      font-size: 15px;
    }
    .p-visao-cadastre{
      font-size: 12px;
      line-height: 18px;
    }
    .div-minicards-principal{
      padding: 5px;
    }
}
@media(max-width: 460px){
  .section-img-visao{
      height: 200px;
    }
    .p-visao-geral{
      font-size: 12px;
    }
    .p-visao-cadastre{
      font-size: 10px;
      line-height: 18px;
    }
    .div-minicards-principal{
      padding: 5px;
    }
}
@media (max-width: 365px){
  .h1-home{
      font-size: 20px;
      line-height: 28px;
  }

}
</style>
