<template>
  <div class="main">
    <div class="logo">
      <a href="login.html"
        ><img src="../assets/images/nor-logo1.png" alt="三湘银行"
      /></a>
    </div>
    <form action="" class="login">
      <label id="u-ico" for="phonenumber"
        ><span>&#xe601;</span
        ><input
          type="text"
          name="username"
          v-model.number='account'
          placeholder="手机号/身份号"
          id="username"
      /></label>
      <div class="alert-box">
        <div class="icon-cuowu">请输入正确的用户名</div>
        <div class="icon-zhengque"></div>
      </div>
      <label id="p-ico" for="password"
        ><span>&#xe62e;</span
        ><input
          type="password"
          name="password"
          id="password"
          v-model="pwd"
          placeholder="密码"
      /></label>
      <div class="alert-box">
        <div class="icon-cuowu">请输入正确的用户名</div>
        <div class="icon-zhengque"></div>
      </div>
      <div class="more-action">
        <label for="remember">
          <!-- <van-checkbox name="remember" shape="square" id="remember" icon-size=".426rem">记住密码</van-checkbox> -->
          <input type="checkbox" name="" id="remember" />
          <span>记住密码</span>
        </label>
        <a class="find-psw" href="#">找回密码</a>
      </div>
    </form>
    <button class="wide-btn login-btn">登录</button>
    <button class="wide-btn register-btn">注册</button>
    <!-- <button class="wide-btn quick-login-btn">网银登录</button> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            account:'',
            pwd:''
        }
    },
};
</script>

<style scoped>
.main {
    position: relative;
    background-color: #fff;
    width: 100%;
    padding: .5rem;
    border-radius: .2rem;
    box-shadow: 0 0 .4rem #EF4C53;
    box-sizing: border-box;
    /* opacity: .8; */
}
.logo {
    height: auto;
    width: 4rem;
    margin: 0 auto;
}

.logo img {
    width: 100%;
    height: auto;
}

.title {
    font-family: "Microsoft Yahei", "Helvetica Neue";
    text-align: center;
    font-size: .9333rem;
    color: #EF4C53;
    font-weight: 400;
    text-shadow: .1333rem .1333rem .2rem #fc949a;
    margin-top: 0;
}

.login {
    margin-top: .8rem;
}
.login > label{
    font-family: "iconfont";
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    background-color: transparent;
    box-shadow: 0 0 .1rem #EF4C53;
    border-radius: .45rem;
    padding:0 ;
    /* margin-bottom: .4rem; */
}
.login span{
    margin: 0 .2rem ;
    font-size: .64rem;
    color: #a81627;     
}
#username,
#password {
    flex: 1;
    height: 1rem;
    border: none;
    box-sizing: border-box;
    outline: none;
    color: #232332;
    font-size: .4267rem;
    background-color: transparent;
}

.more-action {
    display: flex;
    margin: .2667rem;
    height: .5333rem;
}
.more-action label {
    display: flex;
    flex: 50%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
}
.alert-box{
    display: flex;
    /* visibility: hidden; */
    font-family: "iconfont";
    font-size: .32rem;
    margin: 3.75px;
    height: .5333rem;
    box-sizing: border-box;
    background-color: #fff;
}
.alert-box > div {
    display: none;
    justify-content: center;
    align-items: center;
}
#remember {
    width: .5333rem;
    height: .5333rem;
}
.more-action label span {
    position: relative;
    top: 0;
    left: 0;
    font-size: .4267rem;
    line-height: .5333rem;
    margin-left: .1rem;
}

.find-psw {
    text-align: right;
    text-decoration: none;
    font-size: .4267rem;
    color: #888;
    line-height: .5333rem;
}

.login-btn {
    background-color: #e34c5d;
    color: #fff;
}

.register-btn {
    background-color: #eee;
    border: .04rem solid #e34c5d;
    color: #EF4C53;
    box-shadow: none;
}

.quick-login-btn {
    background-color: rgb(241, 192, 55);
    color: #e0e0e0;
}
</style>