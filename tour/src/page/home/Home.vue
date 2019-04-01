<template>
 <div class="home">
 	<home-header class="h-header" :city='city'></home-header>
	<home-swiper :swiperList='swiperList'></home-swiper>
  <home-catalog :iconList='iconList'></home-catalog>
  <home-hot 
    :hotPriseList='hotPriseList'
    :hotTrendList='hotTrendList'
    :hotContentList='hotContentList'
  ></home-hot>
  <home-weekend :weekendList='weekendList'></home-weekend>
  <home-guess :guessList='guessList'></home-guess>
 </div>
   
</template>

<script>
//axios请求数据，然后派发给子组件
import axios from 'axios'
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
  },
  data(){
    return{
      city:'',
      guessList:[],
      hotPriseList:[],
      hotTrendList:[],
      hotContentList:[],
      iconList:[],
      swiperList:[],
      weekendList:[]
    }
  },
  methods:{
    getHomeData(){
      axios.get("/api/index.json")
            .then(this.getHomeDataSuccess)
    },
    getHomeDataSuccess(result){
      //console.log(result)
      const res = result.data
      if(res.data){
        const data = res.data
        this.city = data.city
        this.guessList = data.guessList
        this.hotPriseList = data.hotPriseList
        this.hotTrendList = data.hotTrendList
        this.hotContentList = data.hotContentList
        this.iconList = data.iconList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted(){
    this.getHomeData()
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
