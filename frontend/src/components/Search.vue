<script>
export default {
  props: ['allGames'],
  data(){
    return{
        input: "",
        filtro:"",
        isActive: false,
        isActiveSearch: true,
    }
  },
  setup (props) {
    return {

    }
  },
  methods:{
    aparecePesquisa(){     
        this.filtro = this.input
        if(this.input == "" || this.input == 'undefined'){
            this.isActiveSearch = true
        }else{
            this.isActiveSearch = false
        }
    },
  },
  computed:{
    gamesComFiltro() {
        if(this.filtro) {
            let exp = new RegExp(this.filtro.trim(), 'i');
            return this.allGames.filter(item => exp.test(item.nome));
        } else {
            return this.allGames;
        }
    },
  }
}
</script>

<template>
    <section class="section-search text-white">
        <div class="div-search row no-wrap text-white">
            <input @input="input = $event.target.value" 
            rounded standout v-model="text" class="input" type="search"/>
            <q-btn  flat round dense icon="search" class="btn-search q-mr-xs desaparecer" />
      </div>

        <div class="div-gameSearch " :class="{someImages: isActiveSearch}">
            <p class="p-search text-center">Você está buscando por: "{{input}}"</p>             
            <ul class="ul-search">
                <li class="li-search " v-for="game in gamesComFiltro" :key="game"  
                   style="position:relative;top:0px; left:0px;"> 
                    <RouterLink :to="'/games/'+game.idGame" class="RouterLink">                                  
                        <q-img :ratio="1" class="q-pa-x img-search cards rounded-borders full-height "
                        :src="game.imageCard" />

                    </RouterLink>                 
                </li>
            </ul>
        </div>
        {{aparecePesquisa()}}
    </section>
</template>

<style scoped>
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