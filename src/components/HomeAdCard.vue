<template>
  <div class="noad-card">
    <div class="noad-title">
      <slot name="icon"></slot>
      <slot name="cardName"></slot>
      <span class="noad-more" @click="goMarket(type)">&#xe6ac;</span>
    </div>
    <ul>
      <li class="noad-box" v-for="(ad, index) in ads" :key="ad.id" @click="goProduct(ad.id)">
        <div class="noad-rank" :class="'cl' + (index + 1)">{{ index + 1 }}</div>
        <div class="noad-main">
          <div class="noad-num">{{ Number(ad.num).toFixed(2) }} %</div>
          <div class="noad-info">{{ ad.info }}</div>
        </div>
        <div class="noad-body">
          <div class="noad-name">{{ ad.name }}</div>
          <div class="noad-intro">{{ ad.intro }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["ads","type"],
  data() {
    return {
    };
  },
  methods: {
    moreLoans() {},
  },
  mounted() {
  },
};
</script>

<style scoped>
.noad-card {
  margin-bottom: 0.5rem;
  padding: 0.6rem 0.4rem;
  padding-bottom: 0;
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0.0267rem 0.0267rem 0.2667rem #ccc;
}

.noad-title {
  font-family: "iconfont";
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.5rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.noad-more {
  flex: 1;
  text-align: right;
  font-family: "iconfont";
  color: #888;
}

.noads ul {
  display: flex;
  flex-direction: column;
}

.noad-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5rem 0;
  border-bottom: 0.0267rem solid #ccc;
}

.noad-rank {
  /* flex: 1; */
  width: 0.8rem;
  height: 0.8rem;
  font-size: 0.5333rem;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 50%;
  margin-right: 0.8rem;
  color: #fcf4f4;
}

.cl1 {
  background-image: linear-gradient(to right bottom, red, rgb(255, 115, 0));
}

.cl2 {
  background-image: linear-gradient(to right bottom, rgb(255, 115, 0), orange);
}

.cl3 {
  background-image: linear-gradient(to right bottom, orange, rgb(230, 230, 39));
}
.noad-main{
  flex: 1;
  /* min-width: 2.6667rem; */
}
.noad-body{
  flex: 1;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}

.noad-num {
  font-size: 0.6rem;
  color: #ef4c53;
  font-weight: 700;
  margin-bottom: 0.2rem;
  letter-spacing: 0;
}

.noad-info {
  font-size: 0.37rem;
  color: #888;
}

.noad-name {
  font-size: 0.4rem;
  margin-bottom: 0.4rem;

  /* 1. 先强制一行内显示文本 */
  white-space: nowrap;
  /*(默认normal自动换行)*/
  /* 2. 超出部分隐藏 */
  overflow: hidden;
  /* 3.文字用省略号替代超出部分 */
  text-overflow: ellipsis;
}

.noad-intro {
  font-size: 0.37rem;
  color: #888;
  /* 1. 先强制一行内显示文本 */
  white-space: nowrap;
  /*(默认normal自动换行)*/
  /* 2. 超出部分隐藏 */
  overflow: hidden;
  /* 3.文字用省略号替代超出部分 */
  text-overflow: ellipsis;
}

</style>