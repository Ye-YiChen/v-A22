<template>
  <div class="bottom-btn" ref="container">
    <van-sticky :container="container" :offset-top="0"> </van-sticky>
  </div>
</template>

<script>
export default {
  data() {
    return {
      container: null,
    };
  },
  mounted() {
    this.container = this.$refs.container;
  },
};
</script>

<style>
.bottom-btn{
    height: 100px;
    background-color: #fff;
}
</style>