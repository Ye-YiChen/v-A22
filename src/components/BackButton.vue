<template>
  <div class="back-btn" v-show="isLow" @click="toTop()" ref="backBtn">
    &#xe619;
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLow: false,
      backTimer: null,
    };
  },
  methods: {
    toTop() {
      this.backTimer = setInterval(() => {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
				let speed = Math.floor(-osTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + speed;
        if (osTop <= 0) {
          clearInterval(this.backTimer);
        }
      }, 8);
    },
  },
  mounted() {
    // DOM加载完毕
    this.$nextTick(() => {
      let clientHeight = document.documentElement.clientHeight;
      window.onscroll = () => {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop > clientHeight) {
          this.isLow = true;
        } else {
          this.isLow = false;
        }
      };
    });
  },
  watch: {
  },
};
</script>

<style scoped>
.back-btn {
  display: block;
  position: fixed;
  text-align: right;
  bottom: 0.5rem;
  right: 0;
  font-family: "iconfont";
  font-size: 0.8rem;
  color: #eb2932;
  padding: 0.4rem;
  z-index: 99;
}
</style>