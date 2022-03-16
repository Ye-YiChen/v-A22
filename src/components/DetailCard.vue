<template>
  <div class="card">
    <div class="card-title">
      <div class="pro-name">{{ order.itemName }}</div>
      <ul class="pro-box">
        <li class="pro-short-info">
          <div class="short-info-name">自有本金(元)</div>
          <div class="short-info-detail">{{ order.orderPrice }}</div>
        </li>
        <li class="pro-short-info">
          <div class="short-info-name return-ico">累计期望回报(元)</div>
          <div class="short-info-detail">{{ interest }}</div>
        </li>
      </ul>
    </div>
    <ul class="decoration">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="time">
      <van-steps :active="active" class="time-bar">
        <van-step>支付成功</van-step>
        <van-step>封闭期开始</van-step>
        <van-step>封闭期结束</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
    </ul>
    <ul class="specific-info">
      <li>
        <div class="specific-info-name">产品名称</div>
        <div class="specific-info-detail">{{order.itemName}}</div>
      </li>
      <li>
        <div class="specific-info-name">期望年化回报率</div>
        <div class="specific-info-detail">{{order.num}}%</div>
      </li>
      <li>
        <div class="specific-info-name">购买时间</div>
        <div class="specific-info-detail">{{dateFormat(order.orderTime)}}</div>
      </li>
      <li>
        <div class="specific-info-name">起息时间</div>
        <div class="specific-info-detail">{{dateFormat(order.numTime)}}</div>
      </li>
      <li>
        <div class="specific-info-name">封闭期</div>
        <div class="specific-info-detail">{{order.term}}</div>
      </li>
      <li>
        <div class="specific-info-name">结息时间</div>
        <div class="specific-info-detail">{{dateFormat()}}</div>
      </li>
      <li>
        <div class="specific-info-name">总金额</div>
        <div class="specific-info-detail">￥{{order.orderPrice}}</div>
      </li>
      <li>
        <div class="specific-info-name">总份数</div>
        <div class="specific-info-detail">共 {{order.amount}} 份</div>
      </li>
      <li>
        <div class="specific-info-name">订单编号</div>
        <div class="specific-info-detail">{{order.id}}</div>
      </li>
      <li>
        <div class="specific-info-name">风险等级</div>
        <div class="specific-info-detail" :class="riskColor">{{order.risk}}</div>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {
      active: null,
    };
  },
  computed: {
    interest() {
      return (this.order.orderPrice * this.order.num * this.order.term) / 360 / 100;
    },
    riskColor(){
      if(this.order.risk=='高风险'){
        return 'red'
      }
      if(this.order.risk=='中风险'){
        return 'yellow'
      }
      return 'green'
    }
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
.card {
  background-color: #fff;
  width: 90%;
  border-radius: 0.3rem;
  box-shadow: 0.0267rem 0.0267rem 0.2667rem #ccc;
  overflow: hidden;
  margin-bottom: 0.4rem;
}
.card-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0.5rem;
  padding-bottom: 0;
  font-size: 0.5rem;
  background-color: #f56067;
  color: #ffe;
  text-align: center;
}
.pro-box {
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  font-size: 0.4rem;
  text-align: left;
  width: 100%;
  margin-bottom: 0.3rem;
}
.pro-short-info {
  font-family: "iconfont";
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.short-info-name {
  color: #fff;
  opacity: 0.7;
  font-size: 0.35rem;
  white-space: nowrap;
}
.return-ico::before {
  margin-right: 0.1rem;
  content: "\e650" !important;
  font-size: 0.3733rem;
}
.short-info-name:first-child::before {
  margin-right: 0.1rem;
  font-size: 0.3733rem;
  content: "\e61d";
}
.short-info-detail {
  font-size: 0.42rem;
  margin-top: 0.2rem;
  margin-left: 0.5rem;
}
.decoration {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
.decoration li {
  width: 0.2667rem;
  height: 0.2667rem;
  border-radius: 50%;
  z-index: 9;
  background-color: #fff;
  transform: translateY(-40%);
}
.time {
  display: flex;
  font-size: 0.3rem;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.4rem;
}
.time-bar {
  flex: 1;
}

.specific-info {
  margin: 0.4rem;
  padding-top: 0.5rem;
  border-top: 0.03rem solid #ccc;
  display: flex;
  flex-direction: column;
  font-size: 0.4rem;
}
.specific-info li {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin: 0.3rem 0;
}
.specific-info-name {
  /* opacity: .8; */
  color: #888;
}
.specific-info-detail {
  font-weight: 700;
}
</style>