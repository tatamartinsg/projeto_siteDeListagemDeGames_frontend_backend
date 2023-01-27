<script>
import { ref } from 'vue'
import UserServices from '../../services/UserServices.js'
import validarCadastro from '../../services/validarCadastro.js'

export default {
    data(){
        return{
            clicouInputEmail: false,
            clicouInputPassword: false,
            clicouInputUsername: false,
            username: '',
            email: '',
            password: '',
            tituloAlerta: '',
            messageAlerta: '',
            erro: false,
            sucesso: false
        }
    },
    setup () {
        return {
            text: ref(''),
            ph: ref(''),
            dense: ref(false),
            alert: ref(false),
        }
    },
    methods:{
        clicarInput(param){
            if('username' == param){
                this.clicouInputUsername = !this.clicouInputUsername
                this.clicouInputEmail = false
                this.clicouInputPassword = false
                return
            }
            if('email' == param){
                this.clicouInputUsername = false
                this.clicouInputEmail = !this.clicouInputEmail
                this.clicouInputPassword = false
                return
            }
            if('pass' == param){
                this.clicouInputUsername = false
                this.clicouInputEmail = false
                this.clicouInputPassword = !this.clicouInputPassword
                return
            }
        },
        alerta(title, message, erro, sucesso){
            this.alert = true
            this.tituloAlerta = title
            this.messageAlerta = message
            this.erro = erro
            this.sucesso = sucesso
        },
        realizarValidacoes(){
            const body = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            const validarUsername = validarCadastro.validarUsername(body.username)

            if(validarUsername.error){
                return this.alerta('Username inválido!', validarUsername.message, true, false)
            }

            const validarEmail = validarCadastro.validarEmail(body.email)
            if(validarEmail.error){
                return this.alerta('Email inválido!', validarEmail.message, true, false)
            }

            const validarPassword = validarCadastro.validarPassword(body.password)
            if(validarPassword.error){
                return this.alerta('Senha inválida!', validarPassword.message, true, false)
            }
            //se passar em todas as validacoes, finalmente, chama a api para cadastrar
            this.cadastrar(body)
            this.username = ''
            this.email = ''
            this.password = ''
        },
        async cadastrar(body){


            const data = await UserServices.cadastrarUser(body)
            if(data.error){
                return this.alerta('Alerta', data.message, true, false)
            }
            if(data.error == false){
                return this.alerta('Sucesso', data.message, false, true)
            }
        }
    }
}
</script>

<template>
    <section class="section-principal-cadastrar text-white">
        <q-dialog d v-model="alert">
            <q-card dark class="card-alerta" :class="{erro: erro, sucesso: sucesso}">
                <q-card-section>
                <div class="text-h6 titulo-alerta" >{{ tituloAlerta }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                {{ messageAlerta }}
                </q-card-section>

                <q-card-actions align="right">
                <q-btn flat label="OK" color="orange" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <div id="SignUp">
            <div class="titulos">
                <h1 class="h1-titulo">Crie uma conta</h1>
                <p class="p-subtitulo">E liste seus jogos favoritos</p>
            </div>
            <form id="form-cadastro">
                <div class="div-inputs">
                    <div  @click="clicarInput('username')" class="div-input">
                        <input v-model="username" :class="{clicouInput: clicouInputUsername}"  class="input inputHover" type="text" placeholder="Digite seu username" > 
                        <q-icon class="icone" name="person"></q-icon>
                    </div>
                    <div @click="clicarInput('email')" class="div-input">
                        <input v-model="email" :class="{clicouInput: clicouInputEmail}" class="input inputHover" type="email" placeholder="Digite seu email" > 
                        <q-icon class="icone" name="ion-mail"></q-icon>
                    </div>
                    <div @click="clicarInput('pass')" class="div-input">
                        <input v-model="password" :class="{clicouInput: clicouInputPassword}"  class="input inputHover" type="password" placeholder="Digite sua senha" />
                        <q-icon class="icone" name="ion-alert"></q-icon>
                    </div>
                </div>

                <div class="div-button">
                    <q-btn @click.prevent="realizarValidacoes()" style="width:150px;height:50px" class="button" color="black" label="Cadastrar" />
                </div>
            
            </form>
            <div class="div-clique-aqui text-center">
                <a href="/login">Já possui uma conta? Clique aqui e faça login</a>
            </div>
        </div>
        
        <!-- <div class="overlay"></div> -->
    </section>
</template>

<style>
.erro{
    background-color: #4f0000;
}
.sucesso{
    background-color: #245c00;
}
.card-alerta{
    min-width: 400px;
    border: 0;
    box-shadow: 0 0 0 0;
}
.titulo-alerta{
    text-transform: uppercase;
}
.section-principal-cadastrar {
    width: 100%;
    height: 600px;
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
    gap: 45px;
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
.input:hover, .clicouInput{
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

.div-clique-aqui{
    color: grey;
    transition: 0.3s;
}
.div-clique-aqui:hover{
    color: white;
}
.button{
    width: 150px;
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
@media (max-width: 385px){
    .titulos{
        text-align: center;
    }
}
</style>