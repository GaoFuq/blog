<template>
 <div class="home-catalog">
 	
	<div 
    class="icon" 
    v-for="item of iconArray"
    :key="item.id"
    >
		<div >
      <img 
        class="img" 
        :src="item.iconUrl"
        :alt="item.alt" 
        :class="[item.color]"
        >
   <div class="desc">{{item.alt}}</div>
    </div><!-- 元素绑定样式 -->
  
	</div>
	
 </div>
   
</template>

<script>

export default {
  name: 'HomeCatalog',
  data(){
    return{
      red:'red',
      orange:'orange',
      green:'green',
      pink:'pink',

      iconArray:[
        {
          id:'001',
          iconUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
          alt:'本地热推',
          color:'red'
        },
        {
          id:'002',
          iconUrl:'https://pic5.40017.cn/01/001/6d/8f/rBANC1mEG1aAU0Q6AAAHyLUGdmU162.png',
          alt:'主题乐园',
          color:'green'
        },
        {
          id:'003',
          iconUrl:'https://pic5.40017.cn/01/001/9d/a8/rBANC1rPFcWAaF5sAAAIHYwRlQQ791.png',
          alt:'竹海',
          color:'orange'
        },
        {
          id:'004',
          iconUrl:'https://pic5.40017.cn/02/001/6d/e2/rBLkCFmEG8eALBI8AAAEA1xXmqI793.png',
          alt:'亲子游',
          color:'pink'
        },
      ]
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.home-catalog
  background:#fff
  padding-top:.2rem

  .icon
    width:25%
    float:left

    .img
      display:block
      background:red
      border-radius:50%
      margin:0 auto
      width:50%
      
    .desc
      text-align:center
      padding-top:.2rem
      padding-bottom:.4rem

    .red
        background:red
    .green
        background:green
    .orange
        background:orange
    .pink
        background:pink
  


      
	
    
</style>
