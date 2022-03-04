<template>
  <van-notice-bar left-icon="volume-o" :scrollable="false">
    <van-swipe
      vertical
      class="notice-swipe"
      :autoplay="3000"
      :show-indicators="false"
    >
      <van-swipe-item v-for="notice in notices" :key="notice.id">{{
        notice.info
      }}</van-swipe-item>
    </van-swipe>
  </van-notice-bar>
</template>

<script >
export default {
  props:['notices'],
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<style scoped>
.van-notice-bar {
  margin: 0.5rem 0;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>