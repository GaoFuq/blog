<template>
 <div class="header">
   <div class="back">
     <span class="iconfont">&#xe641;</span>
   </div>
   <div class="search">
     <span class="iconfont">&#xe647;</span>欢迎光临</div>
   <div class="city">重庆<span class="iconfont">&#xe651;</span></div>
   </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  
}
</script>

<style lang="stylus" scoped>
.header
   line-height:.88rem
   text-align:center
   display:flex

.back
  float:left
  width:.9rem
 

.search
  flex:1
  height:.5rem
  line-height:.5rem
  margin-top:.22rem
  margin-left:.2rem
  margin-right:.2rem
  border-radius:.5rem
  box-shadow:0 0 .01rem .02rem #005
 

.city
  float:right
  width:1.4rem
 
</style>
