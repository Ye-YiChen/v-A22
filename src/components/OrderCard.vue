<template>
  <div class="order-box">
    <div class="order-title">
      <div class="min-logo">
        <img src="../../public/images/ico.png" alt="" />
      </div>
      <div class="pro-name">{{ orders.itemName }}</div>
      <div class="pro-detail">&#xe6ac;</div>
      <div class="order-state">{{ showStatus(orders.status) }}</div>
    </div>
    <div class="order-body">
      <div class="order-pic">
        <img src="../../public/images/nor-logo1.png" alt="" />
      </div>
      <div class="order-name">{{ orders.itemName }}</div>
      <div class="order-num">共{{ orders.amount }}份</div>
      <div class="order-time">
        <span>下单时间: </span>
        <div class="order-time-s">{{ dateFormat(orders.orderTime) }}</div>
      </div>
      <div class="order-sum">
        <span>合计 </span>
        <div class="order-sum-s">￥{{ orders.orderPrice }}</div>
      </div>
    </div>
    <button class="small-btn order-detail" @click.stop="goDetail(orders.id)">
      订单详情
    </button>
  </div>
</template>

<script>
export default {
  props: ["orders"],
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
    showStatus(value) {
      if (value == 0) {
        return "待支付";
      } else if (value == 1) {
        return "已取消";
      } else if (value == 2) {
        return "已完成";
      }
      return false;
    },
  },
};
</script>

<style scoped>
.order-box {
  font-family: "iconfont";
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  background-color: #fff;
  margin-bottom: 0.4rem;
  padding: 0.4rem;
  box-shadow: 0rem 0 0.5rem #ccc;
  z-index: 5;
}

.order-title {
  display: flex;
  font-size: 0.3733rem;
  align-items: center;
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
}

.order-state {
  flex: 1;
  text-align: right;
  font-size: 0.3rem;
}

.order-body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: 0.2rem;
}

.order-pic {
  flex: 20%;
}

.order-name {
  flex: 40%;
  margin-left: 0.3rem;
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
  margin: 0.2rem 0;
}

.order-time-s,
.order-sum-s {
  margin-left: 0.2rem;
  color: #ef4c53;
  font-weight: 700;
}

.order-detail {
  align-self: end;
  font-size: 0.3rem;
  line-height: 0.2rem;
  height: 0.5rem;
  margin-top: 0.15rem;
  padding: 0.1rem 0.3rem;
  background: #ef4c53;
  color: #fff;
  border-radius: 0.233rem;
  box-sizing: content-box;
}
</style>