<script>
import { ref } from 'vue'
import UserServices from '../../services/UserServices.js'
import validarCadastro from '../../services/validarCadastro.js'
import api from '../../services/api'

export default {
    data(){
        return{
            clicouInputPassword: false,
            clicouInputUsername: false,
            logarComEmailInput: false,
            username: '',
            password: '',
            email: '',
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
            alert: ref(false)
        }
    },
    methods:{
        clicarInput(param){
            if('username' == param){
                this.clicouInputUsername = !this.clicouInputUsername
                this.clicouInputPassword = false
                return
            }
            if('pass' == param){
                this.clicouInputUsername = false
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
        logarComEmail(param){
            if(param == 'email'){
                this.username = ''
                return this.logarComEmailInput = !this.logarComEmailInput
            }
            if(param == 'username'){
                this.email = ''
                return this.logarComEmailInput = !this.logarComEmailInput
            }
        },
        validarLogin(){
            const body = {
                password: this.password
            }
            if(this.password == ""){
                return this.alerta("Senha inválida","Campo vazio",true,false)
            }
            if(this.logarComEmailInput){
                if(this.email == ""){
                    return this.alerta("Email inválido","Campo vazio",true,false)
                }
                body.email = this.email
            }
            if(this.logarComEmailInput == false){
                if(this.username == ""){
                    return this.alerta("Username inválido","Campo vazio",true,false)
                }
                body.username = this.username
            }

            this.fazerLogin(body)
            this.password = '' 
        },
        async fazerLogin(body){
            const data = await UserServices.fazerLogin(body)
            if(data.error){
                return this.alerta("Erro ao fazer login!", data.message, true, false)
            }
            this.email = ''
            this.username = ''     
            if(data.error == false){
                return this.alerta("Sucesso ao logar!", data.message, false, true)
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
        <div class="titulos">
            <h1 class="h1-titulo">Faça login em sua conta</h1>
            <p class="p-subtitulo">E liste seus jogos favoritos</p>
            <p v-show="!logarComEmailInput" class="p-clique-aqui" @click="logarComEmail('email')">
                Deseja logar com email? Clique aqui
            </p>
            <p v-show="logarComEmailInput" class="p-clique-aqui" @click="logarComEmail('username')">
                Deseja logar com Username? Clique aqui
            </p>
        </div>
        <form id="form-cadastro">
            <div class="div-inputs">
                <div v-show="!logarComEmailInput" @click="clicarInput('username')" class="div-input">
                    <input v-model="username" :class="{clicouInput: clicouInputUsername}"  class="input inputHover" type="text" placeholder="Digite seu username" > 
                    <q-icon class="icone" name="person"></q-icon>
                </div>
                <div v-show="logarComEmailInput" @click="clicarInput('email')" class="div-input">
                        <input v-model="email" :class="{clicouInput: clicouInputEmail}" class="input inputHover" type="email" placeholder="Digite seu email" > 
                        <q-icon class="icone" name="ion-mail"></q-icon>
                </div>
                <div @click="clicarInput('pass')" class="div-input">
                    <input v-model="password" :class="{clicouInput: clicouInputPassword}"  class="input inputHover" type="password" placeholder="Digite sua senha" />
                    <q-icon class="icone" name="ion-alert"></q-icon>
                </div>
            </div>

            <div class="div-button">
                <q-btn @click.prevent="validarLogin()" style="width:150px;height:50px" class="button" color="black" label="Login" />
            </div>
        
        </form>
        <div class="text-center div-clique-aqui ">
            <a class="a-clique-aqui" href="/cadastro">NÃO possui uma conta? Clique aqui e faça cadastro</a>      
        </div>
        
        <!-- <div class="overlay"></div> -->
    </section>
</template>

<style scoped>

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
    background-image: url('../../assets/img/sign-in/red-dead-black.jpg');
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
    gap: 18px;
    align-items: center;
    padding: 15px;
    text-transform: uppercase;
}
.titulos h1{
    font-size: 25px;
    color: rgb(255, 255, 255);
}
.titulos p, .div-clique-aqui{
    color: grey;
    transition: 0.3s;
}
.p-clique-aqui{
    font-size: 11px;
    cursor: pointer;
}
.p-clique-aqui:hover, .div-clique-aqui:hover{
    color: white;
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
    .titulos{
        text-align: center;
    }
}
</style>