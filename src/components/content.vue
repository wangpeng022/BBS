<template>
    <div class="content">
        <!-- <button @click="getList">+++</button> -->
        <ul>
            <li v-for="item in usr_list" :key="item.id">

               <router-link :to="{ name: 'users', params: { id: item.author.loginname }}" :title="item.author_id">
						    <img :src="item.author.avatar_url" :title="item.author.loginname"/>
					    </router-link>

                <div class="replay"><span >{{item.reply_count}}</span>/ <span>{{item.visit_count}}</span></div>

                <span class="title_one" :title="item.title">{{item.title}}</span>

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
      usr_list: [],
      user_info:{
        loginname:11111111111
      }
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("/api/list").then(res => {
        if (res.data.success == true) {
          this.usr_list = res.data.data;
        }
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
      height: 30px;
      line-height: 30px;
      padding: 10px;
      border-bottom: rgb(231,231,231) 1px solid;
      &:hover {
        background-color: #f6f6f6;
      }
      img {
        width: 30px;
        height: 30px;

        border-radius: 3px;
      }
      .replay {
        display: inline-block;
        width: 80px;
        // height: 50px;
        // line-height: 50px;
        text-align: center;
        font-size: 10px;
        :nth-child(1){
          color: #9E78C0;
          font-size: 14px;
        }
      }
      .title_one {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>