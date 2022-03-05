<template>
  <div class="product">
    <page-header>产品详情</page-header>
    <product-top-card>
      <p>注意：年收益率不等于年化收益率相同。<br />理财有风险，投资需谨慎。</p>
    </product-top-card>
    <product-info-bar />

    <van-collapse v-model="activeNames" style="margin-bottom:.2rem">
      <van-collapse-item
        title="交易规则"
        name="rule"
        size="large"
        :lazy-render="false"
      >
        <van-cell title="限购数量" value="10" />
        <van-cell title="产品总数" value="994" />
        <van-cell title="秒杀开始时间" value="2022-02-10" />
        <van-cell title="秒杀结束时间" value="2022-02-10" />
      </van-collapse-item>
      <van-collapse-item
        title="产品信息"
        name="info"
        size="large"
        :lazy-render="false"
      >
        <van-cell title="产品名称" value="易方达" />
        <van-cell title="产品价格" value="10000" />
        <van-cell title="年化利率" value="3.33%" />
        <van-cell title="产品期限" value="180天" />
        <van-cell title="起息日时间" value="2022-02-10" />
        <van-cell title="到期日时间" value="2022-02-10" />
        <van-cell title="风险等级" value="中风险" />
      </van-collapse-item>
    </van-collapse>
    <van-cell is-link @click="showPopup('XXXXXXXXXXXXXXXXXXXXXXXXXX')" class="bigWords">风险揭示书、产品说明书及投资者权益须知</van-cell>
    <van-cell is-link @click="showPopup()" class="bigWords">运作公告</van-cell>
    <van-cell is-link @click="showPopup()" class="bigWords">到期公告</van-cell>
    <van-cell is-link @click="showPopup()" class="coverButton bigWords">到期公告</van-cell>
    <product-purchase-button/>


    <van-popup v-model="show" ref="popupBox" round position="bottom"  class="popupBox" closeable>
      <p>{{popupText}}</p>
    </van-popup>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ProductInfoBar from "../components/ProductInfoBar.vue";
import ProductPurchaseButton from '../components/ProductPurchaseButton.vue';
import ProductTopCard from "../components/ProductTopCard.vue";
export default {
  components: { PageHeader, ProductTopCard, ProductInfoBar, ProductPurchaseButton },
  data() {
    return {
      activeNames: ['rule','info'],
      show:false,
      popupText:''
    };
  },
  mounted() {
  },
  methods:{
    showPopup(text){
      this.show = true;
      this.popupText=text
    }
  }
};
</script>

<style >
.product{
  position: relative;
  min-height: 100%;
  /* height: 1000px; */
}
.coverButton{
  margin-bottom: 3rem;
}
.bigWords{
  font-weight: 700;
  font-size: .4267rem;
}
.popupBox{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  text-align: center;
}
</style>