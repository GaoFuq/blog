<template>
  <div class="guess">
    <div 
      class="guess-desc"
      :class="[guessDescChange]"
    >
      <div>猜你喜欢</div>
    </div>
    <router-link
      tag="div"
      class="guess-content"
      v-for="item of guessList"
      :key="item.id"
      :to='"/detail/"+item.id'
   >
      <div class="guess-content-img">
        <img :src="item.imgUrl">
        <div>{{item.rank}}</div>
      </div>
      <div class="guess-content-desc">
        {{item.desc}}
      </div>
      <div class="guess-content-prise">
        <div class="guess-content-prise-left" >
          酒店距景点{{item.distance}}km
        </div>
        <div class="guess-content-prise-right" >
          <span>￥</span>{{item.prise}}<span>起</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeGuess',
   props:{
     guessList:Array
   },
  data(){
    return {
      guessDescChange:'',
     /* guessList: [
        {
          id:'001',
          imgUrl:'https://pic4.40017.cn/scenery/destination/2017/02/08/18/ZTe8Qb_420x228_00.jpg',
          rank:'3915点评  99%满意度',
          desc:'宿宜兴帕佛伦斯酒店，自选宜兴竹海风景区等，尊享60楼“云端”自助早餐，免费泳池健身房【踏青赏花】',
          distance:'酒店距景点19.9km',
          prise:'599'
        },
        {
         id:'004',
          imgUrl:'https://pic4.40017.cn/scenery/destination/2017/02/08/18/ZTe8Qb_420x228_00.jpg',
          rank:'3915点评  99%满意度',
          desc:'宿宜兴帕佛伦斯酒店，自选宜兴竹海风景区等，尊享60楼“云端”自助早餐，免费泳池健身房【踏青赏花】',
          distance:'酒店距景点19.9km',
         prise:'599'
       },
        {
         id:'002',
         imgUrl:'https://pic4.40017.cn/scenery/destination/2017/02/08/18/ZTe8Qb_420x228_00.jpg',
         rank:'3915点评  99%满意度',
         desc:'宿宜兴帕佛伦斯酒店，自选宜兴竹海风景区等，尊享60楼“云端”自助早餐，免费泳池健身房【踏青赏花】',
         distance:'酒店距景点19.9km',
         prise:'599'
        },
        {
         id:'003',
         imgUrl:'https://pic4.40017.cn/scenery/destination/2017/02/08/18/ZTe8Qb_420x228_00.jpg',
         rank:'3915点评  99%满意度',
         desc:'宿宜兴帕佛伦斯酒店，自选宜兴竹海风景区等，尊享60楼“云端”自助早餐，免费泳池健身房【踏青赏花】',
         distance:'酒店距景点19.9km',
         prise:'599'
        }
    ]*/
    }
    
  },
  methods:{
    scrollChange(){
      let height = document.documentElement.scrollTop
      // console.log(height)
      if(height>600){
          this.guessDescChange='guessDescChange'
      }else{
        this.guessDescChange=''
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scrollChange)
  }
  
}
</script>

<style lang="stylus" scoped>
.guess
  border-top:.2rem solid #eee
  background:#fff
  .guess-desc
    overflow:hidden
    height:0
    padding-bottom:10%
    text-align:center
    color:#23beae
  .guessDescChange
    position:fixed
    top:.9rem
    left:0
    width:100%
    background:#fff
    z-index:100
  .guess-desc > div
    overflow:hidden
    width:25%
    height:0
    padding-bottom:6%
    margin:0 auto
    padding-top:.23rem
    border-bottom:.1rem solid #23beae
  .guess-content
    overflow:hidden
    width:92%
    height:0
    padding-bottom:64%
    margin:0 auto
    padding-top:.2rem
    border-top:.05rem solid #eee
    .guess-content-img
      position:relative
      overflow:hidden
      height:0
      padding-bottom:48.3%      
    .guess-content-img >img
      width:100%
    .guess-content-img >div
      position:absolute
      bottom:.2rem
      left:.1rem
      color:#fff
    .guess-content-desc
      overflow:hidden
      height:0
      padding-bottom:12%
      text-align:left
      padding-top:.1rem
      text-indent:.1rem
      font-size:.28rem
      font-weight:bold
      letter-spacing:.01rem
      line-height:.35rem
    .guess-content-prise
      overflow:hidden
      height:0
      padding-bottom:10%
      .guess-content-prise-left
        float:left
        color:#aaa
      .guess-content-prise-right
        float:right
        margin-right:.1rem
      .guess-content-prise-right > span
        color:red
        font-weight:bold
        font-size:.4rem
</style>
