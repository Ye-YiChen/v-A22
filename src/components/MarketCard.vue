<template>
  <li class="pro-box" @click="goProduct(product.id)">
    <div class="pro-title">
      <div class="min-logo">
        <img src="../../public/images/ico.png" alt="" />
      </div>
      <div class="pro-name">{{ product.name }}</div>
      <div class="pro-detail">&#xe6ac;</div>
    </div>
    <div class="pro-body">
      <div class="pro-advantage">
        <div class="adv-num">{{ product.num }}%</div>
        <div class="adv-name">{{ product.info }}</div>
      </div>
      <div class="pro-info">
        <div class="pro-important">{{ product.intro }}</div>
        <div class="pro-time">
          <span class="s-time">{{ dateFormat(product.startTime) }} </span>
          <span class="d-time"> 开始秒杀</span>
        </div>
        <ul class="label-box">
          <li class="pro-label">{{ product.risk }}</li>
          <li class="pro-label">人民币理财</li>
        </ul>
      </div>
    </div>
    <div class="remind red">
      <div class="arrow-top"></div>
      <p style="margin: 0">利率不代表未来表现和实际收益，测算详见说明</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      // products: [],
    };
  },
  methods: {
    timeSize2(value) {
      if (Number(value) < 0) {
        value = -value;
      }
      if (String(value).length < 2) {
        value = "0" + value;
      } else if (String(value).length > 2) {
        value = String(value).substr(0, 2);
      }
      return value;
    },
    dateFormat(value) {
      var time = new Date(value);
      return (
        time.getFullYear(1) +
        "-" +
        this.timeSize2(Number(time.getMonth()) + 1) +
        "-" +
        this.timeSize2(time.getDate()) +
        " " +
        this.timeSize2(time.getHours()) +
        ":" +
        this.timeSize2(time.getSeconds())
      );
    },
  },
};
</script>

<style scoped>
.pro-box {
  display: flex;
  flex-direction: column;
  /* margin-bottom: .05rem; */
  margin: 0.2rem 0.4rem;
  padding: 0.4rem 0.25rem;
  background-color: #fff;
  border-radius: 0.2rem;
  border-bottom: 0.04rem solid #eee;
  box-shadow: 0.0267rem 0.0267rem 0.2667rem #ccc;
}
.pro-title {
  font-family: "iconfont";
  display: flex;
  align-items: center;
  font-size: 0.3733rem;
  margin-bottom: 0.4rem;
}
.min-logo {
  width: 0.6rem;
  margin-right: 0.3rem;
}
.pro-name {
  max-width: 4.5rem;
  /* 1. 先强制一行内显示文本 */
  white-space: nowrap;
  /*(默认normal自动换行)*/
  /* 2. 超出部分隐藏 */
  overflow: hidden;
  /* 3.文字用省略号替代超出部分 */
  text-overflow: ellipsis;
  font-size: 0.45rem;
}
.pro-detail {
  flex: 1;
  text-align: right;
  margin-right: 0.2rem;
}
.pro-body {
  display: flex;
  justify-content: space-between;
  font-size: 0.35rem;
}
.pro-advantage {
  flex: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
}
.adv-num {
  font-size: 0.45rem;
  margin-bottom: 0.3rem;
}
.pro-info {
  flex: 60%;
  display: flex;
  flex-direction: column;
}
.pro-important {
  font-size: 0.38rem;
  margin-bottom: 0.4rem;
}
.s-time {
  font-size: 0.4rem;
}
.d-time {
  color: red;
  font-weight: 700;
}
.label-box {
  display: flex;
  text-align: center;
}
.pro-label {
  margin: 0.3rem;
  margin-left: 0;
  border: 0.04rem solid #ef4c53;
  padding: 0.1rem 0.2rem;
  font-size: 0.3rem;
  color: #ef4c53;
  border-radius: 0.15rem;
}
.remind {
  position: relative;
  border-radius: 0.1333rem;
  padding: 0.15rem 0.3rem;
  width: 8rem;
  font-size: 0.3rem;
  background-color: rgb(243, 220, 220);
}
.arrow-top {
  position: absolute;
  top: -0.53rem;
  left: 0.8rem;
  width: 0;
  height: 0;
  /* 为了照顾兼容性 */
  line-height: 0;
  font-size: 0;
  /* 其他边框透明 */
  border: 0.2667rem solid transparent;
  border-bottom-color: rgb(243, 220, 220);
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;
}
</style>