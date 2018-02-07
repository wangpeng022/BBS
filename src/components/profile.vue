<template>
    <div>
        <div class="main">
             <header>
                <router-link to="/">主页/</router-link>
            </header>
            <div class="profile_header">
                <img :src="user_info.avatar_url" :alt="user_info.loginname">
                 <span class="profile_name">{{user_info.loginname}}</span>
                <ul>
                    <li>{{user_info.score}}积分</li>
                    <li>333个话题收藏</li>
                    <li>http://{{user_info.githubUsername}}.github.io</li>
                    <li>
                        <!-- <a :href="'http://github.com/'+{{user_info.githubUsername}}">
                            @{{user_info.githubUsername}}
                        </a> -->
                        <a href="#">
                            @{{user_info.githubUsername}}
                        </a>
                    </li>
                    <li>http://weibo.com/liuyong25</li>
                </ul>
                <br/>
                <p>注册时间 6 年前</p>
            </div>
        </div>
        <div class="main">
             <header>
                <p>最近创建的话题</p>
            </header>
            <div class="profile_header">
                <img src="https://avatars1.githubusercontent.com/u/227713?v=3&s=120" alt="atian25">
                 <span class="profile_name">atian25</span>
                <ul>
                    <li>234324积分</li>
                    <li>333个话题收藏</li>
                    <li>http://atian25.github.io</li>
                    <li>@atian25</li>
                    <li>http://weibo.com/liuyong25</li>
                </ul>
                <br/>
                <p>注册时间 6 年前</p>
            </div>
        </div>
        <div class="main">
             <header>
               <p>最近参与的话题</p>
            </header>
            <div class="profile_header">
                <img src="https://avatars1.githubusercontent.com/u/227713?v=3&s=120" alt="atian25">
                 <span class="profile_name">atian25</span>
                <ul>
                    <li>234324积分</li>
                    <li>333个话题收藏</li>
                    <li>http://atian25.github.io</li>
                    <li>@atian25</li>
                    <li>http://weibo.com/liuyong25</li>
                </ul>
                <br/>
                <p>注册时间 6 年前</p>
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
                user_info:[]
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
                    console.log(res.data.data);



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
        .profile_header{
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
            .profile_name{
                margin-bottom: 20px;
            }
            ul li{
                line-height: 28px;
            }

        }

    }
</style>