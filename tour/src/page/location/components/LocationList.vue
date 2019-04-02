<template>
  <div class="location-list" ref='wrapper'>
    <div>
  <div class="present ttt">
      <div class="present-title" ref='present'><div>当前</div></div>
      <div class="present-detail"><div>{{this.city}}</div></div>
    </div>
    <div class="hot-city ttt">
      <div class="hot-city-title"><div>热门城市</div></div>
      <div class="hot-city-list">
        <ul>
          <li 
          v-for='item of hotCityList'
         :key='item.id'
          >{{item.name}}</li> 
        </ul>
      </div>
    </div>
    
   <div class="abc-list">
  <!-- <ul>//我的做法，有点臃肿。
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
        :ref='key'
      ><!-- 这里的key是数组的键名，即"A,B,C" -->
      <div>{{key}}</div>
        <ul 
          class='ABC-content'
     
          >
          <li  
          v-for='abc of ABC'
          :key='abc.id'>{{abc.name}}</li>  
        </ul>
      </li>
      
    </ul>
  </div>
  
    </div>
    
 </div>
   
</template>

<script>
import BScroll from 'better-scroll'
import BMap from 'BMap'
export default {
  name: 'LocationList',
  props:{//接收父组件传来的数据，并作校验
    letter:String,
    hotCityList:Array,
    LetterTabel:Object
  },
  watch:{//时刻监听的方法
    letter(){
      //console.log(this.letter)
      const elementLetter = this.$refs[this.letter]
      const elementPresent = this.$refs.present
     // console.log(elementPresent)
      if(elementLetter){
        const element = elementLetter[0]
        //console.log(element)
        this.scroll.scrollToElement(element)
      }else{

        this.scroll.scrollToElement(elementPresent)
      }
    },
  },
  data(){
    return{
      city:'',
     /* hotCityList:[
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
      ],*/
      /*LetterTabel:[复杂版本
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
          ]
        },
        .
        .
        .
      ],*/
       /* LetterTabel:{
          "A":[
              {
                id:'01',
                name:'a1'

              },
              {
                id:'02',
                name:'a2'

              },
            ],
          "B":[
              {
                id:'03',
                name:'b1'

              },
              {
                id:'04',
                name:'b2'

              },
              {
                id:'05',
                name:'b3'

              },
              {
                id:'055',
                name:'b1'

              },
              {
                id:'056',
                name:'b2'

              },
              {
                id:'057',
                name:'b3'

              },
              {
                id:'058',
                name:'b1'

              },
              {
                id:'059',
                name:'b2'

              },
              {
                id:'060',
                name:'b3'

              },
            ],
          "C":[
              {
                id:'06',
                name:'c1'

              },
              {
                id:'07',
                name:'c2'

              },
              {
                id:'08',
                name:'c3'

              },
              {
                id:'077',
                name:'c1'

              },
              {
                id:'078',
                name:'c2'

              },
              {
                id:'079',
                name:'c3'

              },
              {
                id:'080',
                name:'c1'

              },
              {
                id:'081',
                name:'c2'

              },
              {
                id:'082',
                name:'c3'

              },
            ],
             "Z":[
              {
                id:'44',
                name:'哈罗'

              },
              {
                id:'42',
                name:'你好'

              },
              {
                id:'41',
                name:'欢迎'

              },
              {
                id:'40',
                name:'光临'

              },
            ]
            
        }*/
      
    }
    
    },
   mounted(){
     /* 注意：父级wrapper必须有高度，并且overflow为hidden,否则不会滚动*/
        this.scroll = new BScroll(this.$refs.wrapper, {
          
          mouseWheel:{
          speed:20,
          
     
          }
        })
      



     let map = new BMap.Map('map')
     let myCity = new BMap.LocalCity()
     myCity.get((result)=>{
      if(result){
        this.city = result.name
      }else{
        this.city = '正在获取位置信息'
      }
     })
   }
  }
</script>


<style lang="stylus" scoped>
@import "~@/assets/style/mixins.styl"
.location-list{
  height:10rem
  overflow:hidden
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