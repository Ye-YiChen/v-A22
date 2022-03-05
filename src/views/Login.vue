<template>
  <div class="login" v-cloak>
    <login-header >欢迎登录</login-header>
    <login-form />
    <streamer/>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import LoginHeader from "../components/LoginHeader.vue";
import Streamer from '../components/Streamer.vue';
export default {
  components: { LoginForm, LoginHeader, Streamer },
  mounted() {
    document.title='登录页面'
  },
};
</script>

<style scoped>
.login{
  padding: 0 1rem;
}
</style>