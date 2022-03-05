<template>
  <div class="main">
    <div class="logo">
      <a href="javascript:;"
        ><img src="../../public/images/nor-logo1.png" alt="三湘银行"
      /></a>
    </div>
    <form action="" class="login">
      <label id="u-ico" for="phonenumber"
        ><span>&#xe601;</span
        ><input
          type="text"
          name="username"
          v-model.number="account"
          placeholder="手机号/身份号"
          id="username"
      /></label>
      <label id="p-ico" for="password"
        ><span>&#xe62e;</span
        ><input
          type="password"
          name="password"
          id="password"
          v-model="pwd"
          placeholder="密码"
      /></label>
      <div class="more-action">
        <label for="remember">
          <!-- <van-checkbox name="remember" shape="square" id="remember" icon-size=".426rem">记住密码</van-checkbox> -->
          <input
            type="checkbox"
            name=""
            id="remember"
            v-model="ifRememberPwd"
          />
          <span>记住密码</span>
        </label>
        <a class="find-psw" href="#">找回密码</a>
      </div>
    </form>
    <button class="wide-btn login-btn" @click="Login()">登录</button>
    <button class="wide-btn register-btn" @click="goRegister()">注册</button>
    <!-- <button class="wide-btn quick-login-btn">网银登录</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      pwd: "",
      ifRememberPwd: false,
    };
  },
  methods: {
    Login() {
      // 验证
      if (
        String(this.account).length != 11 &&
        String(this.account).length != 18
      ) {
        this.$toast.fail("请输入正确的账号");
        return false;
      }
      if (!this.pwd) {
        this.$toast.fail("密码不能为空");
        return false;
      }
      this.$toast.loading({
        duration: 0,
        message: "正在登录",
      });

      this.axios({
        methods: "get",
        url: "/user/login",
        data: {
          phone: this.account,
          pwd: this.pwd,
        },
      })
        .then((response) => {
          if (response.status != 0) this.$toast.fail(response.data.message);
          else {
            this.$toast.success("登录成功！");
            if (this.ifRememberPwd) {
              this.rememberPwd;
            }
            this.goHome();
          }
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
    },
    rememberPwd() {
      window.localStorage.setItem(
        "RememberPwd",
        JSON.stringify({
          lastLoginTime: new Date(),
          account: this.account,
          pwd: this.pwd,
        })
      );
    },
  },
  watch: {
    ifRememberPwd(newValue) {
      if (!newValue) {
        window.localStorage.removeItem("RememberPwd");
        this.account = null;
        this.pwd = "";
      }
    },
  },
  mounted() {
    let localInfo = JSON.parse(window.localStorage.getItem("RememberPwd"));
    if (localInfo) {
      this.ifRememberPwd = true;
      this.account = localInfo.account;
      this.pwd = localInfo.pwd;
    }
  },
};
</script>

<style scoped>
.main {
  position: relative;
  background-color: #fff;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.4rem #ef4c53;
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
  font-size: 0.9333rem;
  color: #ef4c53;
  font-weight: 400;
  text-shadow: 0.1333rem 0.1333rem 0.2rem #fc949a;
  margin-top: 0;
}

.login {
  margin-top: 0.8rem;
}
.login > label {
  font-family: "iconfont";
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background-color: transparent;
  box-shadow: 0 0 0.1rem #ef4c53;
  border-radius: 0.45rem;
  padding: 0;
  margin-bottom: 0.4rem;
}
.login span {
  margin: 0 0.2rem;
  font-size: 0.64rem;
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
  font-size: 0.4267rem;
  background-color: transparent;
}

.more-action {
  display: flex;
  margin: 0.2667rem;
  height: 0.5333rem;
}
.more-action label {
  display: flex;
  flex: 50%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
}
.alert-box {
  display: flex;
  /* visibility: hidden; */
  font-family: "iconfont";
  font-size: 0.32rem;
  margin: 3.75px;
  height: 0.5333rem;
  box-sizing: border-box;
  background-color: #fff;
}
.alert-box > div {
  display: none;
  justify-content: center;
  align-items: center;
}
#remember {
  width: 0.5333rem;
  height: 0.5333rem;
}
.more-action label span {
  position: relative;
  top: 0;
  left: 0;
  font-size: 0.4267rem;
  line-height: 0.5333rem;
  margin-left: 0.1rem;
}

.find-psw {
  text-align: right;
  text-decoration: none;
  font-size: 0.4267rem;
  color: #888;
  line-height: 0.5333rem;
}

.login-btn {
  background-color: #e34c5d;
  color: #fff;
}

.register-btn {
  background-color: #eee;
  border: 0.04rem solid #e34c5d;
  color: #ef4c53;
  box-shadow: none;
}

.quick-login-btn {
  background-color: rgb(241, 192, 55);
  color: #e0e0e0;
}
</style>