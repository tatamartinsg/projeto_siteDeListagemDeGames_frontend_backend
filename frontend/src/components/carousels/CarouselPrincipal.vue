<script>
import { ref } from 'vue'

export default {
  props: ['allGames', 'title'],
  data(){
    return{

    }
  },
  setup (props) {
    return {
      slide: ref(1),
      autoplay: ref(true)
      
    }
  },

}
</script>
<template >
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      :autoplay="autoplay"
      infinite
      class="carousel-principal"
      @mouseenter="autoplay = false"  
      @mouseleave="autoplay = true"     
    >
    
      <q-carousel-slide v-if="title == 'destaque'" v-for="(game, index) in allGames" :key="game" 
          :name="index-1" :img-src="game.imageBg"  />

      <q-carousel-slide v-if="title == 'gamepage'" :name="1" :img-src="allGames.imageBg"  />
    </q-carousel>
  </div>
  
</template>

<style scoped>
.carousel-principal{
  height: 550px;
}
</style>