<template>
 <div class="location-header">
	<div class="search">
    <div class="iconfont">&#xe647;</div>
		<input 
			type="text"
			class="search-input"
			placeholder="请输入城市名称（如重庆，cq，chongqin）">

	</div>
 </div>
   
</template>

<script>

export default {
  name: 'LocationHeader',
 }
</script>

<style lang="stylus" scoped>
.search{
	display:flex
  align-items:center
  width:100%
  background:#e0e4ec
  height:1rem
  box-sizing:border-box
  padding:.1rem .2rem
}
  .iconfont{
    height:.7rem
    background:#fff
    display:flex
    align-items:center
    border-radius:.2rem 0 0 .2rem
    padding-left:.2rem
  }
  .search-input{
  	flex-grow:1
    height:.7rem
    margin-right:.1rem
    padding-left:.2rem
    border-radius:0 .2rem .2rem 0
  }

    

</style>
