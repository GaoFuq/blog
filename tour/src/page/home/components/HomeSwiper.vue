<template>
 <div class="swiper">
    <swiper :options="swiperOption">
    <!-- slides 轮播图 -->
    <!-- <swiper-slide>
      <img  class="swiper-img" src="https://pic5.40017.cn/03/000/71/c1/rB5oQFyCNUCAMP_sAAD2IbUPKZc944_520x218_00.jpg" alt="ss">
    </swiper-slide>
    <swiper-slide>
      <img  class="swiper-img" src="https://pic5.40017.cn/03/000/e6/fa/rBANB1ybSOSAH-ffAAF-qQMYCa8154_520x218_00.jpg" alt="dd">
    </swiper-slide>
    <swiper-slide>
      <img  class="swiper-img" src="https://pic5.40017.cn/03/000/28/73/rB5oQFxG7M2AOgxwAADChAKgVcA559_520x218_00.jpg" alt="xx">
    </swiper-slide> -->
    <swiper-slide v-for="item of headerImg" :key="item.id">
      <img  class="swiper-img" :src="item.imgUrl" alt="dd">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
   
  </swiper>
   </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data(){
    return {
      swiperOption:{
        loop:true,
        pagination:'.swiper-pagination'
      },
      headerImg:[
        {
          id:'001',
          imgUrl:'https://pic5.40017.cn/03/000/71/c1/rB5oQFyCNUCAMP_sAAD2IbUPKZc944_520x218_00.jpg'
        },
        {
          id:'002',
          imgUrl:'https://pic5.40017.cn/03/000/e6/fa/rBANB1ybSOSAH-ffAAF-qQMYCa8154_520x218_00.jpg'
        },
        {
          id:'003',
          imgUrl: 'https://pic5.40017.cn/03/000/28/73/rB5oQFxG7M2AOgxwAADChAKgVcA559_520x218_00.jpg'
        },
      ]
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.swiper-img
    width:100%

  
  


</style>
