<template>
 <div class="location-right">
	<div class="box">
		<ul>
			<li 
				v-for='item of rightList'
				:key='item.id'
				@click='letterClick'
				>{{item.content}}
				</li>
		</ul>
		<div v-show="seen" class="pop" ref="distance" :style="hidden">{{content}}</div>
		<!-- ref用来获取这个节点 -->
	</div>
 </div>
   
</template>

<script>

export default {
  name: 'LocationRight',
  data(){
  	return{
  		seen:false,
  		hidden:{
  			display:'none'
  		},
  		content:'',
  		rightList:[
  			{
  				id:'001',
  				content:'当前'
  			},
  			{
  				id:'002',
  				content:'热门城市'
  			},
  			{
  				id:'003',
  				content:'A'
  			},
  			{
  				id:'004',
  				content:'B'
  			},
  			{
  				id:'005',
  				content:'C'
  			},
  			{
  				id:'006',
  				content:'D'
  			},
  			{
  				id:'007',
  				content:'E'
  			},
  			{
  				id:'008',
  				content:'F'
  			},
  			{
  				id:'009',
  				content:'G'
  			},
  			{
  				id:'010',
  				content:'H'
  			},
  			{
  				id:'011',
  				content:'I'
  			},
  			{
  				id:'012',
  				content:'J'
  			},
  			{
  				id:'013',
  				content:'K'
  			},
  			{
  				id:'014',
  				content:'L'
  			},
  			{
  				id:'015',
  				content:'M'
  			},
  			{
  				id:'016',
  				content:'N'
  			},
  			{
  				id:'017',
  				content:'O'
  			},
  			{
  				id:'018',
  				content:'P'
  			},
  			{
  				id:'019',
  				content:'Q'
  			},
  			{
  				id:'020',
  				content:'R'
  			},
  			{
  				id:'021',
  				content:'S'
  			},
  			{
  				id:'022',
  				content:'T'
  			},
  			{
  				id:'023',
  				content:'U'
  			},
  			{
  				id:'024',
  				content:'V'
  			},
  			{
  				id:'025',
  				content:'W'
  			},
  			{
  				id:'026',
  				content:'X'
  			},
  			{
  				id:'027',
  				content:'Y'
  			},
  			{
  				id:'028',
  				content:'Z'
  			},
  			
  		]
  	}
  },
  methods:{
  	letterClick(e){
  		this.content = e.target.innerText
  		//传递数据给父组件,派发事件
  		this.$emit('change',this.content)
  		for(let i=0;i<this.rightList.length;i++){
  			if(this.content === this.rightList[i].content){//动态改变数据
  				let distance = i*0.3 -0.05
  				const showElement = this.$refs.distance//找到ref定位的节点
  				showElement.style = "top:" + distance + "rem"//给这个节点添加样式
				setTimeout(function(){
  					showElement.style = "display:none"
  				},1000)
  			}
  		}

  	}
  
  }
 }
</script>

<style lang="stylus" scoped>
.location-right{
	position:fixed
	right:0
	top:1rem
}
.location-right ul{
	margin-top:.1rem
	width:2rem
	padding:.02rem
	display:flex
	flex-direction:column
	justify-content:center
	align-items:flex-end
	
	
}

.location-right ul>li{
	color:#23beae
	box-sizing:border-box
	width:50%
	height:.3rem
	background:rgba(242,244,247,.7)
	display:flex
	justify-content:center
	align-items:center
	border-bottom:.01rem solid #eee
	font-size:.08rem

}

.box{
	position:relative
}
.pop{
	height:.3rem
	background:rgba(80,180,0,.7)
	line-height:.3rem
	padding:.1rem
	position:absolute
	z-index:100
	color:#fff
	right:50%
	border-radius:.1rem
	white-space: nowrap
	font-size:.5rem
	

}
.pop:after{
	content: "";
    right: -7px;
    top: 50%;
    margin-top: -4px;
    border-color: transparent transparent transparent rgba(80,180,0,.7);
    border-style: dashed dashed dashed solid;
    border-width: 4px;
    position: absolute;
}
    

</style>
