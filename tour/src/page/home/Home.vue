<template>
 <div class="home">
 	<home-header class="h-header"></home-header>
	<home-swiper></home-swiper>

 </div>
   
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
export default {
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper
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
