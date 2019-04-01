<template>
 <div class="location">
	<location-header class='header'></location-header>
	<location-list class='list'></location-list>
 </div>
   
</template>

<script>
import LocationHeader from './components/LocationHeader'
import LocationList from './components/LocationList'

export default {
  name: 'Location',
  components:{
  	LocationHeader,
  	LocationList
  }
 }
</script>

<style lang="stylus" scoped>
.header{
	position:fixed
	z-index:100
	width:100%


}
/*.header:after{
	content:''
	display:block
	clear:both
	height:0
}*/
.list{
	position:absolute
	top:1rem
	left:0
}

    

</style>
