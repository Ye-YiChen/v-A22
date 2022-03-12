<template>
  <div class="login" v-cloak>
    <login-header>欢迎登录</login-header>
    <login-form />
    <streamer />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import LoginHeader from "../components/LoginHeader.vue";
import Streamer from "../components/Streamer.vue";
export default {
  components: { LoginForm, LoginHeader, Streamer },
  data() {
    return {
      // bgc: require("../../public/images/bgc.png"),
    };
  },
  mounted() {
    document.title = "登录页面";
  },
  beforeRouteEnter(to, from, next) {
    document.documentElement.style.background =
      "url(" + require("../../public/images/bgc.png") + ") repeat";

    if (from.path != "/home") {
      next((vm) => {
        vm.$toast.fail("请先登录");
      });
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    document.documentElement.style.background = "";
    document.documentElement.style.backgroundColor = "rgb(253, 241, 241)";
    next();
  },
};
</script>

<style scoped>
.login {
  padding: 0 1rem;
}
</style>