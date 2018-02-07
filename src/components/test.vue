<template>

    <!--设置新密码-->
    <div class="findPswd">
        <div class="navHeader">
            <Nav :showBtn="this.showBtn" :showBtn1="this.showBtn1"/>
        </div>

        <div class="content">
            <h1>设置新密码</h1>
            <p class="fl">

                <input type="password" name="pwd1" @focus="_blur"
                       v-model="password1" placeholder="设置8-16位数字和字母组合的新密码">
                <span class="emailSpan email_alert1" v-if="email_alert">请输入8-16位数字和字母组合的新密码</span>

                <input type="password" name="pwd2" @focus="_blur"
                       v-model="password2" placeholder="请确认新密码">
                <span class="emailSpan email_alert2" v-if="email_alertOne">两次新密码输入的不一致</span>

                <button @click="sendEmail">确认提交</button>
            </p>
        </div>
    </div>
</template>
<script>
    // import Nav from '../Public/nav'
    export default {
        data(){
            return {
                showBtn: true,
                showBtn1: false,

                email_alertOne: false,
                email_alert: false,
                password1: '',
                password2: ''

            }
        },
        created () {

        },
        methods: {
            login () {
                this.$router.push('/login')
            },
            _blur(){
                this.email_alertOne = false;
                this.email_alert = false
            },
            //现在验证的时候有问题
            sendEmail(){
                // var p1 = document.form1.pwd1.value;//获取密码框的值
                // var p2 = document.form1.pwd2.value;//获取重新输入的密码值
                var regEmail = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
                if(!regEmail.test(this.password1)) {//第一次输入密码不符合规格的时候
                    this.email_alert = true;
                    return;
                }else if(this.password1!=this.password2){                  //两次输入的值不一致时
                    this.email_alertOne = true;
                    return;
                } else {
                    this.login() //密码相同再跳转页面
                }
            }
        },
        computed: {},
        // components: {
        //     Nav
        // }
    }
</script>
<style>
.findPswd {
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: url('../../assets/img/registerBg.jpg'); */
  background-position: 100% 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  z-index: 0;
}

.navLogin .logina {
  display: inline-block;
  color: #ccc;
  margin-right: -0.7rem;
  font-size: 0.8rem;
}

.logina {
  display: block;
}

.nav {
  width: 100%;
  height: 100%;
  line-height: 3.5rem;
  background: #000;
}
.navLogin a {
  color: #00c2fa;
}
.content {
  color: #00c2fa;
  width: 22rem;
  height: 20rem;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.content h1 {
  font-weight: normal;
  line-height: 5rem;
  border-bottom: 1px solid #00c2fa;
  margin-bottom: 0.7rem;
  text-align: left;
}
button {
  border: none;
  width: 100%;
  height: 2.2rem;
  background: #00c2fa;
  color: #fff;
  margin-top: 0.7rem;
  border-radius: 0.3rem;
}
.content .emailSpan {
  height: 2rem;
  line-height: 2rem;
  font-size: 0.9rem;
}
.content input {
  padding-left: 0.5rem;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.1rem;
  font-weight: normal;
  opacity: 0.6;
  margin: 0;
  text-decoration: none;
  border: none;
  outline: none;
  background-color: transparent;
  color: rgb(29, 28, 28);
  -moz-appearance: none;
  -webkit-appearance: none;
  border-bottom: 1px solid #ccc;
}
</style>

