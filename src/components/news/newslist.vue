<template>
<div>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
      <router-link :to="'/home/newsinfo/'+item.id">
        <img class="mui-media-object mui-pull-left" src="item.img_url">
          <div class="mui-media-body">
          <h1>{{item.title}}</h1>
          <p class='mui-ellipsis'><span>发表时间：{{item.add_time | dataFormat}}</span>
          <span>点击次数：{{item.click}}</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: "newslist",
  data(){
    return{
    newslist:[]
    }
  },
  created(){
    this.getNewsList()
  },
  methods:{
  getNewsList(){
    this.$http.get('api/getnewslist').then(result=>{
      if (result.body.status===0){
        console.log(result)
        this.newslist=result.body.message;
      }else {
        Toast('获取新闻列表失败')
      }
    })
  }
  }
}
</script>

<style scoped>

.mui-table-view   li  h1{
      font-size: 14px;
  text-align: left;
    }
.mui-table-view   li .mui-ellipsis{
      text-align: left;
      font-size: 12px;
      color: #0062cc;
      display: flex;
      justify-content: space-between;
}


</style>
