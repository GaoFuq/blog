<template>
 <div class="location">
	<location-header class='header'></location-header>
	<location-list 
	  class='list' 
	  :letter='letter'
	  :LetterTabel='LetterTabel'
	  :hotCityList='hotCityList'
	  ></location-list><!-- :name='data',把name里面的data传递给list子组件 -->
	<location-right 
	  @change='handleChange'
	  :rightList='rightList'
	  ></location-right><!-- 接收子组件传递来的数据,绑定一个handleChange的方法来处理 -->
 </div>
   
</template>

<script>
import axios from 'axios'
import LocationHeader from './components/LocationHeader'
import LocationList from './components/LocationList'
import LocationRight from './components/LocationRight'
export default {
  name: 'Location',
  data(){
  	return{	
  		letter:'',
  		hotCityList:[],
  		LetterTabel:{},
  		rightList:[]
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

  	},
  	getLocationData(){
      axios.get("/api/city.json")
            .then(this.getLocationDataSuccess)
    },
    getLocationDataSuccess(result){
      const res = result.data
      if(res.data){
        const data = res.data
        this.hotCityList = data.hotCityList
        this.LetterTabel = data.LetterTabel
        this.rightList = data.rightList
        
      }
    }
   
  	},
 	mounted(){
    this.getLocationData()
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
