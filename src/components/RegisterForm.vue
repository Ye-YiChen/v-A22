<template>
  <div class="main">
    <div class="logo">
      <a href="javascript:;"
        ><img src="../../public/images/min-logo.png" alt=""
      /></a>
    </div>
    <div class="title">
      <p class="slogan">老百姓自己的银行<br /></p>
    </div>
    <form action="" id="register">
      <label class="input-ico" for="phonenumber"
        ><span>&#xe6c1;</span
        ><input
          type="text"
          placeholder="手机号码"
          id="phonenumber"
          class="wide-input"
          v-model="user.phoneNumber"
      /></label>
      <label class="input-ico" for="IDname"
        ><span>&#xe601;</span
        ><input
          type="text"
          placeholder="姓名"
          name="IDname"
          id="IDname"
          class="wide-input"
          v-model="user.IDname"
      /></label>
      <label class="input-ico" for="IDnumber"
        ><span>&#xe625;</span
        ><input
          type="text"
          placeholder="身份证"
          name="IDnumber"
          id="IDnumber"
          class="wide-input"
          style="padding-left: 0rem"
          v-model="user.IDnumber"
      /></label>
      <label class="input-ico" for="password"
        ><span>&#xe62e;</span
        ><input
          type="password"
          placeholder="密码"
          name="password"
          id="password"
          class="wide-input"
          v-model="user.pwd"
      /></label>
      <label class="input-ico">
        <span>&#xe604;</span>
        <input
          type="text"
          placeholder="短信验证码"
          name="verification"
          id="verification"
          class="wide-input"
          v-model="user.otp"
        />
        <button
          class="wide-btn abled-btn send-verify"
          @click.prevent="sendOTP()"
        >
          发送验证码
        </button>
      </label>
      <button class="wide-btn register" @click.prevent="Reigster()">
        立即注册
      </button>
      <label id="agree" for="register-agree">
        <input
          type="checkbox"
          name="otp"
          id="register-agree"
          v-model="user.ifAgree"
        />
        <span
          >我已阅读并同意<a href="javascript:;" class="details">相关服务条款</a
          >和<a href="#" class="details">隐私政策</a></span
        >
      </label>
    </form>
    <div class="login-box" @click="goLogin()">已有账号,直接登陆</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        phoneNumber: null,
        IDname: "",
        IDnumber: null,
        pwd: "",
        otp: "",
        ifAgree: false,
      },
    };
  },
  methods: {
    Reigster() {
      if (!this.user.ifAgree) {
        this.$toast.fail("请先阅读并同意相关服务条款和隐私政策");
        return false;
      }
      if (!this.user.otp) {
        this.$toast.fail("请先获取验证码");
        return false;
      }
      if (
        !this.user.phoneNumber ||
        String(this.user.phoneNumber).length != 11
      ) {
        this.$toast.fail("请输入正确形式的手机号码");
        return false;
      }
      if (!this.user.IDname) {
        this.$toast.fail("请输入正确形式的姓名");
        return false;
      }
      if (!this.user.IDnumber || String(this.user.IDnumber).length != 18) {
        this.$toast.fail("请输入正确形式的身份证号码");
        return false;
      }
      if (!this.user.pwd) {
        this.$toast.fail("请输入密码");
        return false;
      }

      this.axios({
        type: "POST",
        url: "/user/register",
        data: {
          phone: this.user.phoneNumber,
          name: this.user.IDname,
          ID: this.user.IDnumber,
          otp: this.user.otp,
          password: this.user.pwd,
        },
      }).then((response) => {
        if (response.status != 0) {
          this.$toast.fail(response.data.message);
        } else {
          this.$router.push({
            name: "Login",
          });
        }
      }).catch((err)=>{
          this.$toast.fail(err.message);
      });
      return false;
    },
    sendOTP() {
      if (
        !this.user.phoneNumber ||
        String(this.user.phoneNumber).length != 11
      ) {
        this.$toast.fail("请先输入手机号码");
        return false;
      }
      this.axios({
        type: "GET",
        url: "/user/otp/" + this.user.phoneNumber,
      })
        .then((response) => {
          if (response.status != 0) this.$toast.fail(response.data.message);
          else {
            this.$toast.success("发送成功！");
          }
          return false;
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
    },
    
  },
};
</script>

<style scoped>
.logo {
  position: relative;
  /* display: flex;
    justify-content: center;
    align-items: center; */
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #fff;
  margin: 0 auto;
  margin-top: -1rem;
  overflow: hidden;
}

.logo img {
  position: absolute;
  top: -0.1rem;
  left: 0;
  width: 100%;
}

.main {
  position: relative;
  width: 8rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 0.4rem #ef4c53;
  margin: 0;
  margin-bottom: 1.5rem;
  padding: 0.2rem 1rem;
  border-radius: 0.2rem;
}

.title {
  text-align: center;
  font-size: 0.5rem;
  margin-top: 0.2667rem;
}
.slogan {
  margin: 0.5rem 0;
}
#register > label {
  font-family: "iconfont";
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background-color: transparent;
  box-shadow: 0 0 0.1rem #ef4c53;
  border-radius: 0.45rem;
  padding: 0;
  margin-bottom: 0.6rem;
}

.input-ico {
  display: block;
  position: relative;
  font-family: "iconfont";
  font-size: 0.6rem;
}

.input-ico span {
  margin: 0 0.2rem;
  color: #a81627;
}

.input-ico input {
  border: none;
  box-shadow: none;
}
.wide-input {
  margin: 0rem;
}

.send-verify {
  border-radius: 0.4rem;
  box-shadow: 0.0533rem 0.0533rem #ccc;
  margin: 0;
  margin-right: 0.2rem;
  white-space: nowrap;
  width: 2rem;
  height: 0.8rem;
  font-size: 0.32rem;
  text-align: center;
}

.register {
  margin-top: 0.4rem;
  background-color: #ef4c53;
  color: #fff;
  margin-bottom: 0;
}

#register-agree {
  width: 0.4rem;
  height: 0.4rem;
}

#agree {
  display: flex;
  font-size: 0.2rem;
  margin-top: 0.2333rem;
  margin-bottom: 0.2rem;
  border: none;
  box-shadow: none !important;
}

label input {
  margin-right: 0.1333rem;
}

.login-box {
  position: absolute;
  bottom: -1rem;
  left: 4rem;
  transform: translate(-50%);
  height: 1rem;
  color: #666;
  font-size: 0.4rem;
  line-height: 1rem;
  text-align: center;
  width: 6rem;
  background-color: rgba(245, 218, 218, 0.6);
  border-radius: 0 0 0.2rem 0.2rem;
}
</style>