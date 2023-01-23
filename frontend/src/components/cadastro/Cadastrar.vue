<script>
import { ref } from 'vue'

export default {
    data(){
        return{
            clicouInputEmail: false,
            clicouInputPassword: false
        }
    },
    setup () {
        return {
        text: ref(''),
        ph: ref(''),
        dense: ref(false)
        }
    },
    methods:{
        clicarInputEmail(){
            this.clicouInputEmail = true
        },
        clicarInputPassword(){
            this.clicouInputPassword = true
        },
    }
}
</script>

<template>
    <section class="section-principal-cadastrar text-white">
        <div class="titulos">
            <h1 class="h1-titulo">Crie uma conta</h1>
            <p class="p-subtitulo">E liste seus jogos favoritos</p>
        </div>
        <form id="form-cadastro">
            <!-- <q-input type="email" class="input text-white" dark standout v-model="email" label="Email" > 
                <template v-slot:append>
                <q-avatar>
                    <q-icon name="ion-mail"></q-icon>
                </q-avatar>
                </template>
            </q-input>

            <q-input type="password" class="input text-white" dark standout v-model="email" label="Email" > 
                <template v-slot:append>
                <q-avatar>
                    <q-icon name="ion-mail"></q-icon>
                </q-avatar>
                </template>
            </q-input> -->
            <div class="div-inputs">

                <div  @mouseenter="clicouInputEmail= true" 
                  @mouseleave="clicouInputEmail= false" class="div-input">
                    <input :class="{clicouInput: clicouInputEmail}"  class="input" type="email" placeholder="Digite seu email" > 
                    <q-icon class="icone" name="ion-mail"></q-icon>
                </div>
                <div @mouseenter="clicouInputPassword = true" 
                @mouseleave="clicouInputPassword = false" class="div-input">
                    <input :class="{clicouInput: clicouInputPassword}"  class="input" type="password" placeholder="Digite sua senha" />
                    <q-icon class="icone" name="ion-alert"></q-icon>
                </div>
            </div>

            <div class="div-button">
                <q-btn class="button" color="black" label="Cadastrar" />
            </div>
        
        </form>
        <div class="div-clique-aqui text-center">
            <a href="/login">Já possui uma conta? Clique aqui e faça login</a>
        </div>
        
        <!-- <div class="overlay"></div> -->
    </section>
</template>

<style>
.section-principal-cadastrar {
    width: 100%;
    height: 430px;
    background-image: url('../../assets/img/home/visao-jogo/thelastofus-black-opacity.png');
    background-size: cover;
    background-position: 75% 35%;
    background-repeat: no-repeat;
    margin: 0 auto;
    padding: 50px;
    border-radius: 30px;
    position: relative;

}

#form-cadastro{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    text-align: center;
    padding: 25px;
}
.titulos{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 15px;
    text-transform: uppercase;
}
.titulos h1{
    font-size: 25px;
    color: rgb(255, 255, 255);
}
.titulos p{
    color: grey;
}
.div-inputs{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 25%;
}
.input{
    background-color: rgb(37, 37, 37);
    border-radius: 5px;
    color: white;
    height: 40px;
    opacity: 0.5;
    width: 100%;
    border: 0;
    padding: 15px;
    outline: none;
    transition: 0.3s;
}
.clicouInput{
    background-color: rgb(255, 255, 255);
    color: black;
    transition: 0.3s;
}
.div-input{
    display: flex;
    align-items: center;
    flex-direction: row;
    position: relative;
}
.icone{
    position: absolute;
    left: -30px;
}

.input input:focus, .input input:active{
    border-color:red;
    background-color: red;
}
.div-clique-aqui{
    color: grey;
    transition: 0.3s;
}
.div-clique-aqui:hover{
    color: white;
}

.imagem-fundo{
    width: 100%;
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
@media (max-width: 1000px){
    .div-inputs{
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 55%;
    }
}
@media (max-width: 550px){
    .div-inputs{
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }
}
</style>