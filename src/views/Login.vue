<template>
  <div class="login">
    <LoginHeader />
    <LoginForm />
    <Streamer/>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import LoginHeader from "../components/LoginHeader.vue";
import Streamer from '../components/Streamer.vue';
export default {
  components: { LoginForm, LoginHeader, Streamer },
};
</script>

<style scoped>
.login{
  padding: 0 1rem;
}
</style>