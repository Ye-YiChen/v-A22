<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image fit="contain" :src="require('../../public/upload/swiper1.png')" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image fit="contain" :src="require('../../public/upload/swiper2.png')" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image fit="contain" :src="require('../../public/upload/swiper3.png')" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image fit="contain" :src="require('../../public/upload/swiper4.png')" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image fit="contain" :src="require('../../public/upload/swiper5.png')" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image fit="contain" :src="require('../../public/upload/swiper6.png')" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  width: con;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  height: 150px;
  /* background-color: #39a9ed; */
}
</style>