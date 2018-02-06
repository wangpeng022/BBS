<template>
    <div class="content">
        <!-- <button @click="getList">+++</button> -->
        <ul>
            <li v-for="(item,index) in usr_list" :key="index">
                <img :src="item.author.avatar_url" alt="">
                <div class="replay"><span >{{item.reply_count}}</span>/ <span>{{item.visit_count}}</span></div>

                <span class="title_one">{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
export default {
  name: "Content",
  data() {
    return {
      usr_list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("/api/list").then(res => {
        this.usr_list = res.data.data;
        console.log(res.data.data);
      });
    }
  }
};
</script>
<style scoped lang="less">
.content {
  width: 100%;
  margin: 0 250px;
  ul {
    margin-top: 15px;
    width: 1100px;
    border-radius: 3px;
    background: #fff;
    li {
      height: 50px;
      line-height: 50px;
      padding: 0 5px;
      &:hover {
        background-color: #f6f6f6;
      }
      img {
        width: 30px;
        height: 30px;
        margin: 10px;
        border-radius: 3px;
      }
      .replay {
        display: inline-block;
        width: 80px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 10px;
      }
      .title_one{
         height: 50px;
        line-height: 50px;
      }
    }
  }
}
</style>