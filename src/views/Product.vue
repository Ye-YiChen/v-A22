<template>
  <div class="product" v-cloak>
    <page-header>产品详情</page-header>
    <product-top-card :product="product">
      <p>注意：年收益率不等于年化收益率相同。<br />理财有风险，投资需谨慎。</p>
    </product-top-card>
    <product-info-bar :product="product" />

    <van-collapse v-model="activeNames" style="margin-bottom: 0.2rem">
      <van-collapse-item
        title="交易规则"
        name="rule"
        size="large"
        :lazy-render="false"
      >
        <van-cell title="限购数量" :value="product.limited" />
        <van-cell title="产品总数" :value="product.stock" />
        <van-cell title="秒杀开始时间" :value="product.startTime" />
        <van-cell title="秒杀结束时间" :value="product.endTime" />
      </van-collapse-item>
      <van-collapse-item
        title="产品信息"
        name="info"
        size="large"
        :lazy-render="false"
      >
        <van-cell title="产品名称" :value="product.name" />
        <van-cell title="产品价格" :value="product.price" />
        <van-cell title="年化利率" :value="product.num" />
        <van-cell title="产品期限" :value="product.term" />
        <van-cell title="起息日时间" :value="product.numTime" />
        <van-cell title="到期日时间" :value="product.numTime" />
        <van-cell title="风险等级" :value="product.risk" />
      </van-collapse-item>
    </van-collapse>
    <van-cell
      is-link
      @click="showPopup('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')"
      class="bigWords"
      >风险揭示书、产品说明书及投资者权益须知</van-cell
    >
    <van-cell is-link @click="showPopup()" class="bigWords">运作公告</van-cell>
    <van-cell is-link @click="showPopup()" class="bigWords">到期公告</van-cell>
    <van-cell is-link @click="showPopup()" class="coverButton bigWords"
      >产品公告</van-cell
    >
    <product-purchase-button :product="product" />

    <van-popup
      v-model="show"
      ref="popupBox"
      round
      position="bottom"
      class="popupBox"
      closeable
    >
      <p class="popup-text">{{ popupText }}</p>
    </van-popup>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import ProductInfoBar from "../components/ProductInfoBar.vue";
import ProductPurchaseButton from "../components/ProductPurchaseButton.vue";
import ProductTopCard from "../components/ProductTopCard.vue";
export default {
  components: {
    PageHeader,
    ProductTopCard,
    ProductInfoBar,
    ProductPurchaseButton,
  },
  data() {
    return {
      activeNames: ["rule", "info"],
      show: false,
      popupText: "",
      product: {},
      state: -1,
    };
  },
  mounted() {
    this.axios({
      method: "get",
      url: "/item/detail/" + this.$route.params.productID,
    })
      .then((response) => {
        if (response.status != 0) {
          this.$toast.fail(response.data.message);
        } else {
          this.products = response.data;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
      });
  },
  methods: {
    showPopup(text) {
      this.show = true;
      this.popupText = text;
    },
  },
};
</script>

<style >
.product {
  position: relative;
  min-height: 100%;
  /* height: 1000px; */
}
.coverButton {
  margin-bottom: 3rem;
}
.bigWords {
  font-weight: 700;
  font-size: 0.4267rem;
}
.popupBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  text-align: center;
}
.popup-text {
  width: 80%;
  padding: 0 0.2rem;
  white-space: normal;
  word-break: break-all;
  font-size: 14px;
  /* overflow: hidden; */
}
</style>