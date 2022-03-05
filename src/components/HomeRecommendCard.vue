<template>
  <div class="recommand">
    <div class="recommand-title">
      <span class="re-ico">&#xe651;</span>
      <span>为您推荐</span>
      <span class="change" @click="changeRecommend()">换一批 &#xe636;</span>
    </div>
    <div class="recommand-main">
      <div class="recommand-box" v-for="(recommend) in localRecommends.slice(3*turn,3*turn+3)" :key="recommend.id">
        <div class="re-name">{{recommend.name}}</div>
        <div class="re-num">{{recommend.num}}%</div>
        <div class="re-info">{{recommend.info}}</div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  props:['recommends'],
  data() {
    return {
      localRecommends:[],
      turn:0,
    };
  },
  methods: {
    changeRecommend() {
      this.turn++
      if(this.turn*3>this.localRecommends.length){
        this.turn =0
      }
    },
  },
  mounted() {
    this.localRecommends=this.recommends
 },
};
</script>

<style scoped>
.recommand {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  margin-bottom: 0.5rem;
  padding: 0.6rem 0.4rem;
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0.0267rem 0.0267rem 0.2667rem #ccc;
}

.recommand-title {
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.5333rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.re-ico {
  font-family: "iconfont";
  color: #eb8108;
  font-weight: 700;
  font-size: 0.6rem;
  margin-right: 0.2rem;
}

.change {
  flex: 1;
  text-align: right;
  font-family: "iconfont";
  font-size: 0.3rem;
  line-height: 0.8rem;
  color: #ef4c53;
}

.recommand-main {
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0;
}

.recommand-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 31%;
  border: 0.0267rem solid #ccc;
  box-shadow: 0.0267rem 0.0267rem 0.267rem #ccc;
  border-radius: 0.2rem;
  padding: 0.3rem;
  font-size: 0.33rem;
  text-align: center;
  background-color: #fcf4f4;
}

.re-name {
  /* 1. 先强制一行内显示文本 */
  white-space: nowrap;
  /*(默认normal自动换行)*/
  /* 2. 超出部分隐藏 */
  overflow: hidden;
  /* 3.文字用省略号替代超出部分 */
  text-overflow: ellipsis;

  margin-bottom: 0.4rem;
  text-align: center;
}

.re-num {
  color: #ef4c53;
  font-size: 0.4267rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.re-info {
  margin-bottom: 0.3rem;
  font-size: 12px;
}
</style>