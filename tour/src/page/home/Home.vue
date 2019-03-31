<template>
 <div class="home">
 	<home-header class="h-header"></home-header>
	<home-swiper></home-swiper>
  <home-catalog></home-catalog>
  <home-hot></home-hot>
  <home-weekend></home-weekend>
 </div>
   
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeCatalog from './components/HomeCatalog'
import HomeHot from './components/HomeHot'
import HomeWeekend from './components/HomeWeekend'
export default {
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
    HomeHot,
    HomeCatalog,
    HomeWeekend
  }
  
}
</script>

<style lang="stylus" scoped>

.home
  position:relative

  .h-header
    position:absolute
    top:0
    left:0
    z-index:50
    width:100%
    

</style>
