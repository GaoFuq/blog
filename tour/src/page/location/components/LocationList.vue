<template>
  <div class="location-list" ref='wrapper'>
  	<div>
	<div class="present ttt">
      <div class="present-title"><div>当前</div></div>
      <div class="present-detail"><div>正在获取位置信息</div></div>
    </div>
    <div class="hot-city ttt">
      <div class="hot-city-title"><div>热门城市</div></div>
      <div class="hot-city-list">
      	<ul>
      		<li 
      		v-for='item of hotCityList'
			:key='item.id'
      		>{{item.cityName}}</li>	
      	</ul>
      </div>
    </div>
    <div class="abc-list">
    <!--   <ul>//我的做法，有点臃肿。
    	<li 
    	  class='ABC-title'
    		  v-for='ABC of LetterTabel'
    		  :key='ABC.id'
    	>
    	<div>{{ABC.letter}}</div>
    		<ul 
    		  class='ABC-content'
    			  v-for='abc of ABC.city'
    			  :key='abc.id'
    		  >
    			<li >{{abc.name}}</li>	
    		</ul>
    	</li>
    	
    </ul> -->
      <ul>
      	<li 
      	  class='ABC-title'
		  v-for='(ABC,key) of LetterTabel'
		  :key='key'
      	><!-- 这里的key是数组的键名，即"A,B,C" -->
      	<div>{{key}}</div>
      		<ul 
      		  class='ABC-content'
			  v-for='abc of ABC'
			  :key='abc.id'
      		  >
      			<li >{{abc.cityName}}</li>	
      		</ul>
      	</li>
      	
      </ul>
    </div>
    </div>
 </div>
   
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'LocationList',
  data(){
  	return{
  		hotCityList:[
  		  {
  			id:'001',
  			cityName:'重庆'
  		  },
  		  {
  			id:'002',
  			cityName:'北京'
  		  },
  		  {
  			id:'003',
  			cityName:'广州'
  		  },
  		  {
  			id:'004',
  			cityName:'深圳'
  		  },
  		  {
  			id:'005',
  			cityName:'天堂'
  		  },
  		  {
  			id:'006',
  			cityName:'地狱'
  		  },
  		  {
  			id:'007',
  			cityName:'你好'
  		  },
  		  {
  			id:'008',
  			cityName:'家乡'
  		  },
  		  {
  			id:'009',
  			cityName:'上海'
  		  }
  		],
  		/*LetterTabel:[
  			{
  				id:'1',
  				letter:'A',	
  				city:[
  					{
  						id:'1',
  						name:'a1'
  					},
  					{
  						id:'2',
  						name:'a2'
  					},
  					{
  						id:'3',
  						name:'a3'
  					},
  					{
  						id:'4',
  						name:'a4'
  					},
  					{
  						id:'5',
  						name:'a5'
  					},
  				]
  					
  				
  			},
  			{
  				id:'2',
  				letter:'B',
  				city:[
  					{
  						id:'1',
  						name:'b1'
  					},
  					{
  						id:'2',
  						name:'b2'
  					},
  					{
  						id:'3',
  						name:'b3'
  					},
  					{
  						id:'4',
  						name:'b4'
  					},
  					
  				]
  			},
  			{
  				id:'3',
  				letter:'C',
  				city:[
  					{
  						id:'1',
  						name:'c1'
  					},
  					{
  						id:'2',
  						name:'c2'
  					},
  					{
  						id:'3',
  						name:'c3'
  					},
  					{
  						id:'4',
  						name:'c4'
  					},
  					{
  						id:'5',
  						name:'c5'
  					},
  					{
  						id:'6',
  						name:'c6'
  					},
  					{
  						id:'7',
  						name:'c7'
  					},
  					{
  						id:'8',
  						name:'c8'
  					},
  					
  				]
  					
  				
  			},
  			{
  				id:'4',
  				letter:'D',
  				city:[
  					{
  						id:'1',
  						name:'d1'
  					},
  					{
  						id:'2',
  						name:'d2'
  					},
  					{
  						id:'3',
  						name:'d3'
  					},
  					{
  						id:'4',
  						name:'d4'
  					},
  					
  				]
  			},
  			{
  				id:'5',
  				letter:'E',
  				city:[
  					{
  						name:'e1'
  					},
  					{
  						name:'e2'
  					},
  					
  					
  				]
  			},
  			{
  				id:'6',
  				letter:'F',
  				city:[
  					{
  						name:'f1'
  					},
  					
  					
  				]
  			},
  			{
  				id:'7',
  				letter:'G',
  				city:[
  					{
  						name:'g1'
  					},
  					{
  						name:'g2'
  					},
  					{
  						name:'g3'
  					},
  					{
  						name:'g4'
  					},
  					
  				]
  			},
  			{
  				id:'8',
  				letter:'H'
  			},
  			{
  				id:'9',
  				letter:'I'
  			},
  			{
  				id:'10',
  				letter:'J'
  			}

  		],*/
  		LetterTabel:{
  			"A":[
  					{
  						id:'01',
  						cityName:'a1'

  					},
  					{
  						id:'02',
  						cityName:'a2'

  					},
  				],
  			"B":[
  					{
  						id:'03',
  						cityName:'b1'

  					},
  					{
  						id:'04',
  						cityName:'b2'

  					},
  					{
  						id:'05',
  						cityName:'b3'

  					},
  				],
  			"C":[
  					{
  						id:'06',
  						cityName:'c1'

  					},
  					{
  						id:'07',
  						cityName:'c2'

  					},
  					{
  						id:'08',
  						cityName:'c3'

  					},
  				]
  				
  		}
  		
  	}
  	
    },
   mounted(){
   	 this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      mouseWheel:{
        speed:20,
        invert:false,
        easeTime:300
      }
  	 })
   }
}
</script>


<style lang="stylus" scoped>
@import "~@/assets/style/mixins.styl"
.location-list{
	width:100%
	display:flex
	flex-direction:column
	justify-content:center
}
.ttt{
	width:100%
	background:#e0e4ec88
	display:flex
	flex-direction:column
	justify-content:center
	
}

.present-title>div{
	box-sizing: border-box
	height:.6rem
	display:flex
	justify-content:center
	flex-direction:column
	margin-left:.4rem
	margin-top:.3rem
	
}
.present-detail>div{
	
	box-sizing: border-box
	background:green
	height:.9rem
	display:flex
	justify-content:center
	flex-direction:column
	background:#fff
	margin-left:.4rem
	margin-right:.6rem
	border-radius:.1rem
	padding-left:.2rem
}
    
.hot-city-title>div{
	box-sizing: border-box
	height:.6rem
	display:flex
	justify-content:center
	flex-direction:column
	margin-left:.4rem
	margin-top:.3rem
}
.hot-city-list>ul{
	margin-top:.2rem
	padding-bottom:.5rem
	box-sizing: border-box
	display:flex
	align-items:center
	margin-left:.4rem
	flex-wrap:wrap
}
.hot-city-list>ul>li{
	width:1.5rem
	height:.65rem
	background:#fff
	margin-right:.25rem
	margin-bottom:.2rem
	flexItem-h-v-center()/*完全居中*/
	border-radius:.1rem
}
.abc-list .ABC-title>div{
	background:#ddd
	height:.9rem
	display:flex
	align-items:center
	padding-left:.4rem

	
}
.abc-list .ABC-title .ABC-content>li{
	height:.8rem
	display:flex
	align-items:center
	padding-left:.4rem
	border-bottom:.01rem solid #ddd	
	
}
</style>
