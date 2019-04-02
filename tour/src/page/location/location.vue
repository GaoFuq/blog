<template>
 <div class="location">
	<location-header class='header'></location-header>
	<location-list class='list' :letter='letter'></location-list><!-- 把letter传递给list子组件 -->
	<location-right @change='handleChange'></location-right><!-- 接收子组件传递来的数据,绑定一个handleChange的方法来处理 -->
 </div>
   
</template>

<script>
import LocationHeader from './components/LocationHeader'
import LocationList from './components/LocationList'
import LocationRight from './components/LocationRight'
export default {
  name: 'Location',
  data(){
  	return{	
  		letter:''
  	}
  	
  },
  components:{
  	LocationHeader,
  	LocationList,
  	LocationRight
  },
  methods:{
  	handleChange(letter){
  		this.letter = letter

  	}
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
