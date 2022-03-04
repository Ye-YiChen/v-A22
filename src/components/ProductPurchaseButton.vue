<template>
  <footer class="footer" id="footer">
    <div class="state">
      <div class="min-logo"><img src="../../public/images/ico.png" alt="" /></div>
      <!-- 最长 "剩余10,00000000份" 可正常显示 -->
      <div class="pro-left">剩余{{  }}份</div>
      <div class="time-box red">
        <div class="arrow-left"></div>
        <div class="time-title red" ref="countTitle">本次秒杀开始还剩</div>
        <div class="time-left">
          <div id="time-h">{{  }}</div>
          :
          <div id="time-m">{{  }}</div>
          :
          <div id="time-s">{{  }}</div>
        </div>
      </div>
    </div>
    <button class="wide-btn scheduled-btn" ref="btn" @click.once="press()">
      即将开始
    </button>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position:fixed;
  width: 100%;
  /* height: 2.9333rem; */
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.state {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  background-color: rgb(119, 55, 55);
  padding: 0;
  /* padding: .2rem .5rem; */
  box-sizing: border-box;
  border-bottom: 0.1333rem solid #ccc;
  border-radius: 0.2333rem;
  color: #fff;
}

.min-logo {
  width: 1rem;
  padding: 0.2rem 0 0.2rem 0.3rem;
}

.pro-left {
  line-height: 1.1rem;
  font-size: 0.5rem;
  letter-spacing: 0.0267rem;
  padding: 0.2rem 0.5rem 0.2rem 0;

  /* 不允许换行 */
  white-space: nowrap;
}

.time-box {
  /* flex: 25%; */
  position: relative;
  background-color: rgb(252, 227, 230);
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
}

.arrow-left {
  position: absolute;
  top: 0rem;
  left: -1.5rem;
  width: 0;
  height: 0;
  /* 为了照顾兼容性 */
  line-height: 0;
  font-size: 0;
  /* 其他边框透明 */
  border: 0.8rem solid transparent;
  border-right-color: rgb(252, 227, 230);
}

.time-left {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.time-title {
  font-size: 0.1rem;
  margin-bottom: 0.1rem;
}

#time-h,
#time-m,
#time-s {
  background-color: #ef4c53;
  padding: 0.1rem;
  border-radius: 0.1rem;
  color: #fff;
  box-sizing: border-box;
  font-size: 0.3rem;
  line-height: 0.3rem;
  font-weight: 700;
}

.scheduled-btn {
  border-radius: 0;
  margin: 0;
  box-shadow: 0;
  background-image: linear-gradient(to right, #ef4c53, rgb(255, 115, 0));
  color: #fff;
}
</style>