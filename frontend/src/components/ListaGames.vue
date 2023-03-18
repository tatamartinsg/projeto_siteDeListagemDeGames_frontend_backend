<script>
import Search from './Search.vue'
import useAuth from '../stores/auth.js'
import GamesServices from '../services/GamesServices.js'
import ConfirmAlert from './alerts/ConfirmAlert.vue'

export default{
    name:"Lista de Games",
    components:{
        'search-games':Search,
        'confirm-alert': ConfirmAlert
    },

    data(){
        return{
            gamesListados: [],
            gamesFavoritos: [],
            gamesZerei: [],
            gamesDesejoComprar: [],
            gamesEstouJogando: [],
            esconderMostrar: false,
            removerGameAlerta: false,
            confirm: false,
            idGameRemove: 0,
            listingCodeRemove: 0,
            li: ""
        }
    },
    mounted(){
        this.getListaDeGames()
    },
    methods:{
        filtrar(filtro){
            return this.gamesListados.filter((item)=> item.listingCode == filtro)
        },
        async getListaDeGames(){
            const auth = useAuth()
            const idUserE = auth.getidUserE()
            const username = auth.getUsername()

            const data = await GamesServices.getListaDeGamesByIdEncrypted(idUserE, username)

            this.gamesListados = data
            console.log(this.gamesListados)
            this.getGamesFavoritos()
            this.getGamesZerei()
            this.getGamesDesejoComprar()
            this.getGamesEstouJogando()
        },
        getGamesFavoritos(){
            const filtro = 10
            this.gamesFavoritos = this.filtrar(filtro)
        },
        getGamesZerei(){
            const filtro = 20
            this.gamesZerei = this.filtrar(filtro)
        },
        getGamesDesejoComprar(){
            const filtro = 30
            this.gamesDesejoComprar = this.filtrar(filtro)
        },
        getGamesEstouJogando(){
            const filtro = 40
            this.gamesEstouJogando = this.filtrar(filtro)
        },
        clickLocalHRef(id){
            window.location.href = `#${id}`
        },
        esconder(){
            this.esconderMostrar = !this.esconderMostrar
        },
        clicouLixeira($event, idGame, listingCode){
            this.idGameRemove = idGame
            this.listingCodeRemove = listingCode
            this.removerGameAlerta = true

            const $li = $event.target.offsetParent.offsetParent
            this.li = $li

        },
        confirmarRemocaoGame(){         
            this.removerGame()

            this.li.parentNode.removeChild(this.li)
            this.li = ""

            this.idGameRemove = 0
            this.listingCodeRemove = 0
            this.removerGameAlerta = false

        },
        cancelarRemocaoGame(){
            this.idGameRemove = 0
            this.listingCodeRemove = 0
            this.removerGameAlerta = false
        },
        async removerGame(){
            const auth = useAuth()
            const body = {
                idUserE: auth.getidUserE(),
                username: auth.getUsername(),
                idGame: this.idGameRemove,
                listingCode: this.listingCodeRemove,
                
            }
            
            const data = await GamesServices.deleteGameById(body)
            console.log(data)

        }
    }
}
</script>

<template>
    <main>
        <confirm-alert v-if="removerGameAlerta == true" cancelar="Não Remover" confirmar="Remover"  message="Você tem certeza de que deseja deletar este jogo?" 
        v-on:confirm=" confirmarRemocaoGame()" v-on:cancel="cancelarRemocaoGame()" />

        <section class="section-principal text-white">

        <h1 id="favoritos" class="h1-lista-de-games">Lista de Games</h1>
        <search-games :allGames="gamesListados" />

        <div  class="fundoVerde div-lista-games ">
            <h1 class="div-h1-lista-games">MEUS JOGOS FAVORITOS</h1>
            <ul class="ul-lista-games">
                
                <li class="li-lista-games" v-for="(game, index) in gamesFavoritos" :key="game">

                    <RouterLink :to="'/games/'+game.idGame" class="li-RL-lista-games" >
                        <q-img
                            class="img-jogo-do-ano"
                            :src="game.imageCard"
                            :ratio="4/3"
                            />  
                        <h1>{{ game.name }}</h1>                                 
                    </RouterLink>
                    <q-btn @click="clicouLixeira($event, game.idGame, game.listingCode)"  size="11px" class="btn-icone" round color="red" icon="ion-trash" />  
                    

                </li>
            </ul>
        </div>

        <div id="zerei" class="fundoVermelho div-lista-games">
            <h1 class="div-h1-lista-games">JOGOS QUE JÁ ZEREI</h1>
            <ul class="ul-lista-games">
                
                <li v-for="(game, index) in gamesZerei" :key="game">         
                    <RouterLink :to="'/games/'+game.idGame" class="li-RL-lista-games" >
                        <q-img
                            class="img-jogo-do-ano"
                            :src="game.imageCard"
                            :ratio="4/3"
                            />  
                        
                        <h1>{{ game.name }}</h1>
                    </RouterLink>
                    <q-btn @click="clicouLixeira($event, game.idGame, game.listingCode)" size="11px" class="btn-icone" round color="red" icon="ion-trash" />
                </li>
            </ul>
        </div>

        <div id="desejo-comprar" class="fundoAzul div-lista-games">
            <h1 class="div-h1-lista-games">JOGOS QUE DESEJO COMPRAR</h1>
            <ul class="ul-lista-games">
                
                <li v-for="(game, index) in gamesDesejoComprar" :key="game">         
                    <RouterLink :to="'/games/'+game.idGame" class="li-RL-lista-games" >
                        <q-img
                            class="img-jogo-do-ano"
                            :src="game.imageCard"
                            :ratio="4/3"
                            />  
                        
                        <h1>{{ game.name }}</h1>                  
                    </RouterLink>
                    <q-btn @click="clicouLixeira($event, game.idGame, game.listingCode)" size="11px" class="btn-icone" round color="red" icon="ion-trash" />
                </li>
            </ul>
        </div>

        <div id="jogando" class="fundoRosa div-lista-games">
            <h1 class="div-h1-lista-games">JOGOS QUE ESTOU JOGANDO</h1>
            <ul class="ul-lista-games">
                
                <li v-for="(game, index) in gamesEstouJogando" :key="game">         
                    <RouterLink :to="'/games/'+game.idGame" class="li-RL-lista-games" >
                        <q-img
                            class="img-jogo-do-ano"
                            :src="game.imageCard"
                            :ratio="4/3"
                            />  
                        
                        <h1>{{ game.name }}</h1>                       
                    </RouterLink>
                    <q-btn @click="clicouLixeira($event, game.idGame, game.listingCode)"  size="11px" class="btn-icone" round color="red" icon="ion-trash" />
                </li>
            </ul>
        </div>
    </section>

    <section>
     
        <div class="div-icones q-pa-md q-gutter-sm">

            <q-btn :class="{ esconderCSS: esconderMostrar }"  size="18px" round color="green" @click="clickLocalHRef('favoritos')">
                <a href="#teste"></a>
                F
                <q-tooltip anchor="center left" self="center right">
                Jogos Favoritos
                </q-tooltip>
            </q-btn>

            <q-btn :class="{ esconderCSS: esconderMostrar }"  size="18px" round color="red" @click="clickLocalHRef('zerei')">
                Z
                <q-tooltip anchor="center left" self="center right">
                Jogos que já zerei
                </q-tooltip>
            </q-btn>

            <q-btn :class="{ esconderCSS: esconderMostrar }"  size="18px" round color="blue" @click="clickLocalHRef('desejo-comprar')">
                C
                <q-tooltip anchor="center left" self="center right">
                Jogos que desejo comprar
                </q-tooltip>
            </q-btn>
            
            <q-btn :class="{ esconderCSS: esconderMostrar }" size="18px" class="tamanhoIcon" round color="purple" @click="clickLocalHRef('jogando')">
                J
                <q-tooltip anchor="center left" self="center right">
                Jogos que estou jogando
                </q-tooltip>
            </q-btn>

            <q-btn class="tamanhoIcon" size="18px" round color="black" @click="esconder()">
                <q-icon name="menu" />
                <q-tooltip anchor="center left" self="center right">
                Esconder/Mostrar
                </q-tooltip>
            </q-btn>
        </div>  
    </section>

    </main>

</template>

<style scoped>

main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
}
.esconderCSS{
    display: none;
}
/* ==== icones da direita ==== */
.div-icones{    
    width: 90px;
    height: 100px;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 5%;
    top: 35%;
    gap: 10px;
}

/* ==== */


.section-principal{
    padding: 35px;
}
.h1-lista-de-games{
    font-size: 30px;
    text-transform: uppercase;
    padding: 30px;
    color: white;
    text-align: center;
    font-family:'Courier New', Courier, monospace;
}

/* CORES de fundo para os botoes fixos na direita */
.fundoVerde{
    background-color: rgb(29 54 41 / 57%);
}
.fundoAzul{
    background-color: rgb(15 34 59 / 57%);
}
.fundoVermelho{
    background-color: rgb(54 29 29 / 57%);
}
.fundoRosa{
    background-color: rgb(59 15 45 / 57%);
}
/*===== DIV LISTA DE GAMES ===== */
.div-lista-games{
    border-radius: 8px;
    width:600px;
    margin: 50px auto;
    height:auto;
    overflow:hidden;
}
/*===== H1 DA DIV LISTA DE GAMES ===== */
.div-h1-lista-games{
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    font-family:'Courier New', Courier, monospace;
}
/*========== */

/*===== ul da lista de games  ===== */
.ul-lista-games{
    width:98%;
    height:auto;
    padding: 20px;
}
/*========== */


/* ====  li da lista de games === */
.ul-lista-games li{
    position: relative;
    width:100%;
    padding: 10px;
    border-radius: 8px;
    font-family:'Courier New', Courier, monospace;
}

.li-RL-lista-games{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
}
.ul-lista-games li:hover{
    background-color: rgb(82, 82, 82);
}
/* ===== imagem(jogo) da li ===== */
.img-jogo-do-ano{
    width: 100px;
    height: 100px;
}
/* 
===== ICONE LIXEIRA da li===== */
.icon-lixeira{
    color: red;
}
/* ===== BOTAO LIXEIRA da li===== */
.btn-icone{
    position: absolute;
    top: 42px;
    left: 90%;
}
/*========== */



@media (max-width: 885px) {
    main{
        justify-content:left;
    }
    
    .div-icones{ 
        right: 5px;
    }

}

@media (max-width: 500px){
    .div-icones{
        display: none;
    }
    .section-principal{
        padding:0;
        margin: 0 auto;
    }
    .div-lista-games{
        width: 90%;
        text-align: center;
    }
    .li-RL-lista-games {
        gap: 10px;
    }
    .li-RL-lista-games h1{
        font-size: 15px;
        width: 50%;
    }
}
</style>