<script>
import Search from './Search.vue'
import useAuth from '../stores/auth.js'
import GamesServices from '../services/GamesServices.js'

export default{
    name:"Lista de Games",
    components:{
        'search-games':Search
    },
    mounted(){
        this.getListaDeGames()
    },
    methods:{
        async getListaDeGames(){
            const auth = useAuth()
            const idUserE = auth.getidUserE()
            const username = auth.getUsername()

            const data = await GamesServices.getListaDeGamesByIdEncrypted(idUserE, username)
            console.log(data)



        }
    }
}
</script>

<template>
<section class="section-principal text-white">
    <h1 class="h1-lista-de-games">Lista de Games</h1>
    <search-games/>
</section>


</template>

<style scoped>
.section-principal{
    padding: 35px;
}
.h1-lista-de-games{
    font-size: 30px;
    text-transform: uppercase;
    padding: 30px;
    color: white;
    text-align: center;
}
</style>