<template>
  <div class="short-info">
    <div class="small-ico red">&#xe651;</div>
    <div class="risk green">{{product.risk}}</div>
    |
    <div class="per-money yellow">单份{{product.price}}元</div>
    |
    <div class="total-num">总额{{product.stock+product.sales}}份</div>
  </div>
</template>

<script>
export default {
  props:['product']
};
</script>

<style>
.short-info {
  font-family: "iconfont";
  display: flex;
  justify-content: space-between;
  font-size: 0.4rem;
  font-weight: 700;
  line-height: 0.4rem;
  padding: 0.3rem 0.5rem;
  margin-top: 0.2667rem;
  margin-bottom: 0.2667rem;
  background-color: #fff;
  /* border-bottom: 10px solid #ddd; */
  overflow: hidden;
}

.small-ico {
  font-size: 0.5333rem;
}
</style>