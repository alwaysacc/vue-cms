<template>
  <div class="newsinfo-container">

  <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time | dataFormat}}</span>
      <span>点击：{{newsinfo.click}}</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content">

    </div>
    <comment-box :id="this.id"></comment-box>
  </div>

</template>

<script>
import comment from '../subcomponents/comment'
export default {
  name: "newsinfo",
  data(){
      return{
        id:this.$route.params.id,
        newsinfo:{}
      }
  },
  created(){
    this.getNewsInfo()
  },
  methods:{
    getNewsInfo(){
      this.$http.get('api/getnew/'+this.id).then(result=>{
        if (result.body.status===0){
          console.log(result.body.message)
          this.newsinfo=result.body.message[0]
        } else {
          Toast('获取新闻失败')
        }
      })
    }

  },
  components:{
    'comment-box':comment
  }



}
</script>

<style scoped>
.newsinfo-container{
  padding: 0 4px;
}
.newsinfo-container .title{
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.newsinfo-container .subtitle{
  font-size: 13px;
  color: #0062cc;
  display: flex;
  justify-content: space-between;
}
.newsinfo-container .content{

}
</style>
