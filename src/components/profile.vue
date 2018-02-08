<template>
    <div>
        <div class="main">
             <header>
                <router-link to="/">主页/</router-link>
            </header>
            <div class="profile_header1">
                <img :src="user_info.avatar_url" :alt="user_info.loginname">
                 <span class="profile_name">{{user_info.loginname}}</span>
                <ul>
                    <li>{{user_info.score}}积分</li>
                    <li>333个话题收藏</li>
                    <li>
                        <a :href='"http://"+user_info.githubUsername+".github.io"'>
                            http://{{user_info.githubUsername}}.github.io
                        </a></li>
                    <li>
                        <a :href="'http://github.com/'+user_info.githubUsername">
                            @{{user_info.githubUsername}}
                        </a>
                    </li>
                    <li>
                        <a :href="'http://weibo.com/'+user_info.githubUsername">
                        http://weibo.com/{{user_info.githubUsername}}
                        </a>
                    </li>
                </ul>
                <br/>
                <p>注册时间:{{user_info.create_at|formatDate}}</p>
            </div>
        </div>
        <div class="main">
             <header>
                <p>最近创建的话题</p>
            </header>
            <div class="profile_header">
                <ul v-for="(item,index) in recent_topics" :key="item.id">
                    <li v-if = "index <= 5">
                        <img class="img" :src="item.author.avatar_url" :alt="item.author.loginname">
                        <!-- <span class="profile_name">{{item.author.loginname}}</span> -->
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a href="#">
                            <span class="title_1">{{item.title}}</span>
                        </a>
                        <span class="last_reply">{{item.last_reply_at|formatDate}}</span>
                    </li>
                </ul>
                <br/>
                <p>更多内容</p>
            </div>
        </div>
        <div class="main">
             <header>
                <p>最近参与的话题</p>
            </header>
            <div class="profile_header">
                <ul v-for="(item,index) in recent_replies" :key="item.id">
                    <li v-if = "index <= 5">
                        <img class="img" :src="item.author.avatar_url" :alt="item.author.loginname">
                        <!-- <span class="profile_name">{{item.author.loginname}}</span> -->
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a href="#">
                            <span class="title_1">{{item.title}}</span>
                        </a>
                        <span class="last_reply">{{item.last_reply_at|formatDate}}</span>
                    </li>
                </ul>
                <br/>
                <p>更多内容</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import MHeader from './header'
    export default {
        data () {
            return {
                user_info:[],
                recent_topics:[],
                recent_replies:[]
            }
        },
        mounted () {
            this.getUser();
        },
        methods:{
            getUser(){
                axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.id}`)
                .then((res)=>{
                    this.user_info = res.data.data;
                    this.recent_replies = this.user_info.recent_replies;
                    this.recent_topics = this.user_info.recent_topics
                    console.log( this.recent_replies);
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .main{

        margin: 15px auto;
        width: 1100px;
        color: #777;
        a{
            color: #555;
            text-decoration: none;
        }
        header{
            width: 100%;
            height: 20px;
            padding: 10px;
            background-color: #F6F6F6;
            border-bottom: 1px solid #f6f6f6;
            a {
                color: #80BD01;
                text-decoration: none;
            }
        }
        .profile_header,.profile_header1{
            width: 100%;
            background-color: #fff;
            font-size: 14px;
            padding: 10px;

            img{
                width: 40px;
                height: 40px;
                border-radius: 3px;
                vertical-align: top;
            }
            .img{
                width: 30px;
                height: 30px;
                border-radius: 3px;
            }

            .profile_name{
                margin-bottom: 20px;
            }
            ul li{
                height: 30px;
                line-height: 30px;
                padding: 10px;
                .title_1{
                    font-size: 16px;
                    color: #08c;
                }
                .last_reply{
                    float: right;
                    padding-right: 10px;
                }
            }

        }
        .profile_header1{
            ul li{
               padding: 0;
            }
        }

    }
</style>