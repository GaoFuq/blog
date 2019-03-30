<template>
 <div>
 	<home-header></home-header>
	<home-swiper></home-swiper>
	<home-catalog></home-catalog>
 </div>
   
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeCatalog from './components/HomeCatalog'
export default {
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeCatalog
  }
  
}
</script>

<style scoped>

</style>
