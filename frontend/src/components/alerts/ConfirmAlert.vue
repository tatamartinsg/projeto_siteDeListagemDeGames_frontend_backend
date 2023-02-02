<script>
import { ref } from 'vue'

export default {
    props: ['ConfirmaAlerta','username'],

    data(){
        return{
            tituloAlerta: '',
            messageAlerta: '',
            erro: false,
            sucesso: false
        }
    },
  setup () {
    return {
      confirm: ref(true),

      address: ref('')
    }
  }
}
</script>

<template>
      <q-dialog v-model="confirm" persistent>
        <q-card  class="card-alerta" dark>
          <q-card-section class="row items-center">
            <q-icon class="icone-alert" name="ion-alert"></q-icon>
            <span class="q-ml-sm">Você tem certeza de que deseja deslogar de sua conta?</span>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Continuar logado" color="green" @click="$emit('cancel')" v-close-popup />
            <q-btn flat label="Deslogar" color="red" @click="$emit('confirm')" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
</template>
  

<style scoped>
.icone-alert{
    font-size: 30px;
}
.card-alerta{
    min-width: 400px;
    border: 0;
    box-shadow: 5px 6px 20px black;
}
</style>