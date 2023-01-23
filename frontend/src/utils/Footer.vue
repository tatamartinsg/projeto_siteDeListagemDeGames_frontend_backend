<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
export default {
  setup () {
    return {
      tab: ref(''),
      clickSearch: false
    }
  },
  methods:{
   clicouSearch(){
    this.clickSearch = !this.clickSearch
    console.log(this.clickSearch)
   } 
  }
}
</script>
<template>
    <div class="q-gutter-y-sm">
      <q-toolbar class="fundo-cinza text-white q-toolbar-principal">
        <q-toolbar class="toolbar-footer  desaparecer text-center">
           <div class="div-footer">
                <p>Desenvolvedora: Tássia Martins</p>
                <a href="https://github.com/tatamartinsg">             
                <div class="icon-p-github">
                    <q-icon name="ion-logo-github" />
                    <p>GitHub: tatamartinsg</p>
                </div>
                </a>
            </div>
        </q-toolbar>
       
        <q-btn flat round dense class="btn-menu">
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
    </div>
  </template>
<style scoped>
p{
  margin: 0;
}
.div-footer{
    color: rgb(198, 198, 198);
}
.div-footer, .toolbar-footer{
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 20px;
    padding: 12px;
}
.icon-p-github{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.icon-p-github p{
    margin: 0;
}
.icon-p-github:hover{
  color: white;
}
.fundo-cinza{
    background-color: #100f0f
}
.btn-menu{
  display: none;
}



@media (max-width:545px){
   .div-footer p{
      font-size: 13px;
      padding: 5px;
   } 
}
@media (max-width:450px){
   
  .div-footer, .toolbar-footer p{
    font-size: 11px;
    padding: 0;
   } 
}
@media (max-width:355px){
   
   .div-footer, .toolbar-footer p, .q-toolbar-principal{
     font-size: 10px;
     padding: 0;
    } 

 }

</style>