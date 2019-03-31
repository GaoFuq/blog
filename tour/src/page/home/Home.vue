<template>
 <div class="home">
 	<home-header class="h-header"></home-header>
	<home-swiper></home-swiper>
  <home-catalog></home-catalog>
  <home-hot></home-hot>
  <home-weekend></home-weekend>
  <home-guess></home-guess>
 </div>
   
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeCatalog from './components/HomeCatalog'
import HomeHot from './components/HomeHot'
import HomeWeekend from './components/HomeWeekend'
import HomeGuess from './components/HomeGuess'
export default {
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
    HomeHot,
    HomeCatalog,
    HomeWeekend,
    HomeGuess
  }
  
}
</script>

<style lang="stylus" scoped>

.home
  position:relative

  .h-header
    position:fixed
    top:0
    left:0
    z-index:100
    width:100%
    

</style>
