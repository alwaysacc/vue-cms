<template>
<div class="cmt-container">
  <h3>发表评论</h3>
  <hr>
  <textarea placeholder="请输入你想说的话"></textarea>
  <mt-button type="primary" size="large">发表评论</mt-button>

  {{this.id}}
  <div class="cmt-list">
    <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
      <div class="cmt-title">
        第{{i+1}}楼 &nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}
      </div>
      <div class="cmt-body ">
        {{item.content === 'undefined' ?  '此用户很懒，什么都没说': item.content}}
      </div>
    </div>
  </div>

  <mt-button type="primary" size="large" plain @click="getMore()">加载更多</mt-button>
</div>
</template>

<script>
export default {
  name: "comment",
  data(){
    return{
      pageIndex:1,
      comments:[]
    }
  },
  created(){
  this.getComments()
  },
  methods:{
    getComments(){
      this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(reslut=>{
        if (reslut.body.status===0){
          //console.log(reslut.body.message)
          //this.comments=reslut.body.message
          this.comments=this.comments.concat(reslut.body.message)
        } else{
          Toast('获取评论列表失败')
        }
      })
    },
    getMore(){
      this.pageIndex=this.pageIndex+1
      this.getComments()
    }
  },
  props:['id']
}
</script>

<style scoped>
.cmt-container h3{
  font-size: 18px;
}
.cmt-container textarea{
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-container .cmt-list{
  margin: 5px 0;
}
.cmt-container .cmt-list .cmt-item{
  font-size: 13px;
}
.cmt-container .cmt-list .cmt-item .cmt-title{
  line-height: 30px;
  background: #ccc;
}
.cmt-container .cmt-list .cmt-item .cmt-body{
  line-height: 35px;
  text-indent: 2em;
}
</style>
