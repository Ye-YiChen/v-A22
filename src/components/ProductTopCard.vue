<template>
  <div class="pro-info">
    <div class="pro-name">{{ product.name }}</div>
    <div class="pro-type">人民币理财产品</div>
    <div class="label-box">
      <ul>
        <li class="pro-label">开放式</li>
        <li class="pro-label">固定收益</li>
      </ul>
    </div>
    <div class="parameter-box">
      <div class="pro-parameter">
        <div class="parameter-num">{{ product.num }}%</div>
        <div class="parameter-info">年化利率</div>
      </div>
      <div class="pro-parameter">
        <div class="parameter-num">{{ product.term}}天</div>
        <div class="parameter-info">产品期限</div>
      </div>
    </div>
    <div class="remind">
      <slot></slot>
      <div class="arrow-top" style="left: 1.4rem"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['product']
};
</script>

<style scoped>
.pro-info {
  display: flex;
  flex-direction: column;
  margin-top: 0.2667rem;
  background-color: #fff;
  text-align: center;
  padding: 0.3rem;
}

.pro-name {
  font-size: 0.5rem;
  margin: 0.1rem;
}

.pro-type {
  font-size: 0.45rem;
}

.label-box ul {
  display: flex;
  justify-content: center;
}

.pro-label {
  margin: 0.2rem;
  border: 0.04rem solid #ef4c53;
  padding: 0.1rem 0.2rem;
  font-size: 0.4rem;
  color: #ef4c53;
  border-radius: 0.15rem;
}

.parameter-box {
  display: flex;
  font-size: 0.4rem;
  justify-content: center;
  align-items: center;
}

.pro-parameter {
  width: 35%;
  height: 1.8rem;
  margin: 0.1rem 0.6rem;
  border: 0.03rem solid #ef4c53;
  border-radius: 0.2rem;
  box-shadow: 0.0267rem 0.0267rem 0.2667rem #ccc;
  padding: 0.2rem;
  box-sizing: border-box;
}

.parameter-num {
  margin-bottom: 0.2rem;
}

.remind {
  position: relative;
  background-color: #eee;
  border-radius: 0.3333rem;
  font-size: 0.3733rem;
  margin: 0.4rem;
  padding: 0.2rem 0.39rem;
  text-align-last: justify;
  line-height: 0.5rem;
}

.arrow-top {
  position: absolute;
  top: -0.52rem;
  left: 1.5rem;
  width: 0;
  height: 0;
  /* 为了照顾兼容性 */
  line-height: 0;
  font-size: 0;
  /* 其他边框透明 */
  border: 0.2667rem solid transparent;
  border-bottom-color: #eee;
}
</style>