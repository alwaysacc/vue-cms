
<template>
<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotulist" :key="item.index"><img :src="item.img"/></mt-swipe-item>
  </mt-swipe>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
      <img src="../../images/menu1(1).png"/>
      <div class="mui-media-body">新闻资讯</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router to="#">
      <img src="../../images/menu2.png"/>
      <div class="mui-media-body">图片分享</div></router></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router to="#">
      <img src="../../images/menu3.png"/>
      <div class="mui-media-body">商品购买</div></router></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router to="#">
      <img src="../../images/menu4.png"/>
      <div class="mui-media-body">留言反馈</div></router></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a to="#">
      <img src="../../images/menu5.png"/>
      <div class="mui-media-body">视频专区</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router to="#">
      <img src="../../images/menu6.png"/>
      <div class="mui-media-body">联系我们</div></router></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      lunbotulist:{}
    }
  },
  created(){
    this.getLunbotu()
  },
  methods:{
    getLunbotu(){
      this.$http.get("api/getlunbo").then(result=>{
        console.log(result.body)
        if (result.body.status===0){
          this.lunbotulist = result.body.message
        }else {
          alert('失败')
        }
      })
    }
  }
}
</script>

<style scoped>
.mint-swipe{
  height: 200px}

.mint-swipe img{
  width: 100%;
  height: 100%;
}
.mui-grid-view .mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-table-view img{
  width: 50px;
  height: 50px;
}

</style>
