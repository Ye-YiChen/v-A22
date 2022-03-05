<template>
  <div class="register" v-cloak>
    <login-header>欢迎注册</login-header>
    <register-form/>
    <streamer />
  </div>
</template>

<script>
import LoginHeader from "../components/LoginHeader.vue";
import RegisterForm from '../components/RegisterForm.vue';

import Streamer from "../components/Streamer.vue";
export default {
  components: { LoginHeader, Streamer, RegisterForm },
  mounted() {
    document.title='注册页面'
  },
};
</script>

<style scoped>
.register {
  padding: 0 1rem;
}
</style>