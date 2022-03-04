<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images:[
        '../../public/upload/swiper1.png',
        '../../public/upload/swiper2.png',
        '../../public/upload/swiper3.png',
        '../../public/upload/swiper4.png',
        '../../public/upload/swiper5.png',
        '../../public/upload/swiper6.png',
      ]
    }
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>