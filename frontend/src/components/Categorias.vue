<script>
import axios from 'axios'
import Search from './Search.vue'
export default {
  data(){
    return{
      nomeCategoria: '',
      gamesByCategoria: {}
    }
  },
  setup (props) {
    return {

    }
  },
  created(){
    const nomeCategoria = this.$route.params.nomeCategoria 
    this.nomeCategoria = nomeCategoria
    this.getGames()
    this.getCategorias(nomeCategoria)
  },
  mounted(){
    
   
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
    async getCategorias(nomeCategoria){
        await axios.get(`http://localhost:3000/categorias/${nomeCategoria}`)
        .then(result => {
            this.gamesByCategoria = result.data
            console.log(result.data)
        }).catch(error => {
            console.log(error)
        })
    }
  },
  components: {
    'games-search': Search
  },
}
</script>

<template>
    <section class="section-categorias text-white">
        <div class="div-search-categorias">
            <h1 class="h1-categorias row justify-center text-white q-pa-lg">
                Você está na categoria:  <p class="nomeCategoria">{{ nomeCategoria  }} </p>
            </h1>
            <games-search :allGames="gamesByCategoria" />
        </div>
        <div class="div-gameSearch ">        
            <ul class="ul-search">
                <li class="li-search " v-for="game in gamesByCategoria" :key="game"  
                   style="position:relative;top:0px; left:0px;"> 
                    <RouterLink :to="'/game/'+game.idJogo" class="RouterLink">                                  
                        <q-img :ratio="1" class="q-pa-x img-search cards rounded-borders full-height "
                        :src="game.imagemCard" />

                    </RouterLink>                 
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.section-categorias {
    padding-bottom:50px;
}
.div-search-categorias{
    padding: 35px;
}
.h1-categorias{
    gap:5px;
}
.nomeCategoria::first-letter {
  text-transform: uppercase;
}
.ul-search{
    display: inline-block;
    list-style-type: none;
    position: relative;
}
.li-search{
    display: inline;
    width: 100%;
}
.img-search{
    width: 150px;
    margin: 8px;
    transition: all 0.2s;
}
.img-search:hover{
    transform: scale(1.1);
}
.p-search{
    padding: 20px;
}

.section-search{
    width: 100%;
}
.div-h1-search{
  text-align: center;
  gap: 5px;
  padding-top:40px;
}
.div-search{
  padding: 5px;
  justify-content: center;
  gap: 20px;
}
.input{
  border: 1px solid rgb(115, 115, 115);
  border-radius: 50px;
  background-color: rgb(49, 49, 49);
  width: 210px;
  height: 50px;
  padding: 15px;
  color: white;
}
.btn-search{
  width: 3%; 
}
.div-gameSearch{
    width: 100%;
    text-align: center;
}
.someImages{
    display: none;
}
.img-coracao{
  width: 40px;
}
@media (max-width: 430px){
  .input{
    width: 150px;
    height: 40px;
  }
}
</style>