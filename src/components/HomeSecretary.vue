<template>
  <div class="remind">
    <div class="remind-title">
      <span class="re-ico">&#xe630;</span>
      <span>专属秘书</span>
      <div class="remind-more"><span class="temp" @click="goOrder()">全部订单</span>&#xe6ac;</div>
    </div>
    <div class="total-order">
      <div class="appointed orderbox" v-if="1">
        <div class="order-ico blue">&#xe8a2;</div>
        <p>
          您有<span class="order-num">{{userInfo.loan}}个贷款</span>订单
        </p>
      </div>
      <div class="unpaid orderbox" v-if="1">
        <div class="order-ico red">&#xe897;</div>
        <p>
          您有<span class="order-num">{{userInfo.unpaid}}个待支付</span>的订单
        </p>
      </div>
      <div class="paid orderbox" v-if="1">
        <div class="order-ico yellow">&#xe899;</div>
        <p>
          您有<span class="order-num">{{userInfo.store}}个存款</span>订单
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['userInfo']
};
</script>

<style>
.remind {
  font-family: "iconfont";
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0.6rem 0.4rem;
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0.0267rem 0.0267rem 0.2667rem #ccc;
}

.remind-title {
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.5rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.remind-title .temp {
  color: #888;
  font-weight: normal;
  font-size: 0.3rem;
}

.remind-more {
  flex: 1;
  text-align: right;
  color: #888;
  line-height: 0.5rem;
}

.total-order {
  display: flex;
  flex-direction: column;
}

.orderbox {
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: star;
  align-items: center;
}

.order-ico {
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.6rem;
  margin-right: 0.3rem;
  font-weight: 700;
}

.orderbox p {
  font-size: 0.4rem;
  line-height: 0.6rem;
  text-align: center;
  /* 1. 先强制一行内显示文本 */
  white-space: nowrap;
  /*(默认normal自动换行)*/
  /* 2. 超出部分隐藏 */
  overflow: hidden;
  /* 3.文字用省略号替代超出部分 */
  text-overflow: ellipsis;
}

.order-num {
  font-size: 0.5rem;
  margin: 0 0.1333rem;
  color: rgb(90, 146, 90);
}
</style>