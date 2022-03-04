<template>
  <div class="card">
    <div class="card-title">
      <div class="pro-name">{{}}</div>
      <ul class="pro-box">
        <li class="pro-short-info">
          <div class="short-info-name">自有本金(元)</div>
          <div class="short-info-detail">{{}}</div>
        </li>
        <li class="pro-short-info">
          <div class="short-info-name return-ico">累计期望回报(元)</div>
          <div class="short-info-detail">{{}}</div>
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
        <div class="specific-info-name">{{}}</div>
        <div class="specific-info-detail">{{}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active:null
        }
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
.time-bar{
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