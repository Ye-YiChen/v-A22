<template>
  <div
    class="order-box"
    @click="goProduct(orders.id)"
  >
    <div class="order-title">
      <div class="min-logo"><img src="../../public/images/ico.png" alt="" /></div>
      <div class="pro-name">{{ orders.name }}</div>
      <div class="pro-detail">&#xe6ac;</div>
      <div class="order-state">已完成</div>
    </div>
    <div class="order-body">
      <div class="order-pic"><img src="../../public/images/nor-logo1.png" alt="" /></div>
      <div class="order-name">{{ orders.name }}</div>
      <div class="order-num">共{{orders.amount}}份</div>
      <div class="order-time">
        <span>下单时间: </span>
        <div class="order-time-s">{{orders.orderTime }}</div>
      </div>
      <div class="order-sum">
        <span>合计 </span>
        <div class="order-sum-s">￥{{ orders.price }}</div>
      </div>
    </div>
    <button
      class="small-btn order-detail"
      @click="goDetail(orders.id)"
    >
      订单详情
    </button>
  </div>
</template>

<script>
export default {
  props:['orders'],

};
</script>

<style scoped>
.order-box {
    font-family: "iconfont";
    display: flex;
    flex-direction: column;
    border-radius: .2rem;
    background-color: #fff;
    margin-bottom: .4rem;
    padding: .4rem;
    box-shadow: 0rem 0 .5rem #ccc;
    z-index: 5;
}

.order-title {
    display: flex;
    font-size: .3733rem;
    align-items: center;
}

.min-logo {
    width: .6rem;
    margin-right: .3rem;
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
}

.order-state {
    flex: 1;
    text-align: right;
    font-size: .3rem;
}

.order-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: .2rem;
}

.order-pic {
    flex: 20%;
}

.order-name {
    flex: 40%;
    margin-left: .3rem;
    text-align: left;
}

.order-num {
    flex: 35%;
    text-align: right;
}

.order-time,
.order-sum {
    display: flex;
    flex-direction: row;
    margin: .2rem 0;
}

.order-time-s,
.order-sum-s {
    margin-left: .2rem;
    color: #EF4C53;
    font-weight: 700;
}

.order-detail {
    align-self: end;
    font-size: .3rem;
    line-height: .2rem;
    height: .5rem;
    margin-top: .15rem;
    padding: .1rem .3rem;
    background: #EF4C53;
    color: #fff;
    border-radius: .233rem;
    box-sizing: content-box;
}
</style>