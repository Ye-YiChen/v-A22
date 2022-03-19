<template>
  <div class="user-info-container">
    <div class="countdown">
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">剩余{{ timeData.hours }}小时</span>
          <span class="block">{{ timeData.minutes }}分</span>
          <span class="block">{{ timeData.seconds }}秒自动关闭</span>
        </template>
      </van-count-down>
    </div>
    <div class="user-info-card">
      <van-icon name="bag-o" />
      <div class="specific">
        <div class="userInfo">
          <span class="user-name">许鹏辉</span>
          <span class="user-phone">86-11111111111</span>
        </div>
        <div class="bankID">银行卡号：111111111111111111111</div>
      </div>
      <van-button round  size="small" type="danger">修改</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
};
</script>

<style scoped>
.van-count-down{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    
}
.van-count-down span{
    display: inline;
    font-size: 14px;
}
.block {
  display: inline-block;
  width: auto;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: rgb(245, 68, 76);
}
.user-info-container {
  padding: 15px;
  background-color: rgb(245, 68, 76);
}
.user-info-card {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 5px;
}
.van-icon {
  width: 10%;
  background-color: #fff;
  color: red;
  font-weight: 700;
  margin-right: 10px;
  padding: 10px 0;
}
.specific {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  font-size: 14px;
}
.user-name {
  font-weight: 700;
  font-size: 18px;
  margin-right: 5px;
}
.user-phone {
  font-size: 12px;
  color: #888;
}
.bankID {
  font-size: 12px;
  color: #888;
  margin-top: 5px;
}
.van-button {
    /* flex: 1; */
  width: 50px;
  float: right;
  margin-left: 10px;
  transform: translateY(35%);
}
</style>