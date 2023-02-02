<script>
import { ref } from 'vue'

export default{
    props: ['tituloAlerta','messageAlerta', 'erro','sucesso'],

    data(){
        return{

        }
    },
    setup () {
        return {
            alert: ref(true)
        }
    },
}
</script>

<template>
    <q-dialog  d v-model="alert">
        <q-card dark class="card-alerta" :class="{erro: erro, sucesso: sucesso}">
            <q-card-section>
            <div class="text-h6 titulo-alerta" >{{ tituloAlerta }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
            {{ messageAlerta }}
            </q-card-section>

            <q-card-actions align="right">
            <q-btn flat label="OK" color="orange" @click="$emit('clicouOk')" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>

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
</style>