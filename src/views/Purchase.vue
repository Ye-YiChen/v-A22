<template>
  <div class="purchase" v-cloak>
    <page-header>支付订单</page-header>
    <van-cell-group class="fix">
      <van-cell title="产品名称" :value="product.name" />
      <van-cell
        title="交易账户"
        :value="'6288****7077'"
        label="可用金额99.99元"
      />
    </van-cell-group>
    <van-cell-group class="fix">
      <van-cell
        title="可购金额"
        :value="'剩余' + Number(product.stock) +'份'"
      />
      <van-cell title="单笔金额" :value="product.price + '元'" />
    </van-cell-group>
    <purchase-num-card />
    <purchase-agree-card />
    <purchase-bottom-buttom />
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import PurchaseAgreeCard from "../components/PurchaseAgreeCard.vue";
import PurchaseBottomButtom from "../components/PurchaseBottomButtom.vue";
import PurchaseNumCard from "../components/PurchaseNumCard.vue";
export default {
  components: {
    PageHeader,
    PurchaseNumCard,
    PurchaseAgreeCard,
    PurchaseBottomButtom,
  },
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    document.title = "购买页面";
    this.product = this.$store.state.orderAbout.productInfo;
  },
  created(){
    // this.goBack();
  }
};
</script>

<style>
.fix {
  margin-top: 0.2rem;
}
.box {
  background-color: #fff;
  margin-top: 0.2rem;
  padding-right: 0.5rem;
  /* padding-left: 0rem; */
  font-size: 0.4rem;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
  margin-left: 0.5rem;
  border-bottom: 1.5px solid #eee;
}
.tip {
  display: flex;
  justify-content: end;
  padding: 0.13rem;
  margin-left: 0.5rem;
  font-size: 0.25rem;
}
</style>