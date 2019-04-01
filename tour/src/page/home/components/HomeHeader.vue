<template>
 <div class="header" :class='[showHeader]'>
   <div class="back" :class='[showBack]'>
     <span class="iconfont">&#xe641;</span>
   </div>
   <div class="search" :class='[showSearch]'>
     <span class="iconfont">&#xe647;</span>欢迎光临</div>
  <router-link to='/location'>
    <div class="city" :class='[showCity]'>{{this.city}}<span class="iconfont">&#xe651;</span></div>
  </router-link>
 </div>
  
</template>

<script>

export default {
  name: 'HomeHeader',
  props:['city'],
  data(){
  	return{
  		showHeader:'',
  		showBack:'',
  		showCity:'',
  		showSearch:''
  	}
  	
  },
  methods:{
    scrollChange(){
      let height = document.documentElement.scrollTop
      // console.log(height)
      if(height>10){
          this.showHeader='showHeader'
          this.showBack='showBack'
          this.showCity='showCity'
          this.showSearch='showSearch'
      }else{
          this.showHeader=''
          this.showBack=''
          this.showCity=''
          this.showSearch=''
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scrollChange)
  }
  
}
</script>

<style lang="stylus" scoped>
.showHeader
  background:#fff
.header
   line-height:.88rem
   text-align:center
   display:flex
	
	.showBack
	  color:#000
	.back
 	 float:left
 	 width:.9rem

	.showSearch
	  color:#000
	  background:#eee
	.search
	  flex:1
	  height:.5rem
	  line-height:.5rem
	  margin-top:.22rem
	  margin-left:.2rem
	  margin-right:.2rem
	  border-radius:.5rem
	  box-shadow:0 0 .01rem .02rem #999
	  
 
	.showCity
	  color:#000
	.city
	  float:right
	  width:1.4rem
 
</style>
