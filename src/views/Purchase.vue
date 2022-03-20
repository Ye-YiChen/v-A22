<template>
  <div class="purchase" v-cloak>
    <page-header>支付订单</page-header>
    <van-cell-group class="fix">
      <van-cell title="产品名称" :value="product.name" />
      <van-cell
        title="交易账户"
        :value="secret(userInfo.bankCard)"
        :label="'可用金额' + userInfo.money + ' 元'"
      />
    </van-cell-group>
    <van-cell-group class="fix">
      <van-cell
        title="可购金额"
        :value="'剩余' + Number(product.stock) + '份'"
      />
      <van-cell title="单笔金额" :value="product.price + '元'" />
    </van-cell-group>
    <purchase-num-card />
    <purchase-agree-card />
    <purchase-bottom-buttom />
    <!-- 密码输入框 -->
    <van-password-input
      :value="value"
      :focused="showKeyboard"
      @focus="$store.state.orderAbout.showKeyboard = true"
      v-show="showKeyboard"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-model="value"
      :show="showKeyboard"
      @blur="
        $store.state.orderAbout.showKeyboard = false;
        $store.state.orderAbout.value = '';
        value=''
      "
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
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
      value: "",
      userInfo: {},
    };
  },

  computed: {
    ...mapState("orderAbout", ["showKeyboard"]),
  },
  mounted() {
    document.title = "购买页面";
    this.product = this.$store.state.orderAbout.productInfo;
    this.axios({
      method: "post",
      url: "/user/info",
      params: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
        } else {
          this.userInfo = response.data.data;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
      });
  },
  created() {
    // this.goBack();
  },
  watch: {
    value(newValue) {
      this.$store.state.orderAbout.value = newValue;
    },
    showKeyboard(newValue) {
      this.$store.state.orderAbout.showKeyboard = newValue;
    },
  },
  methods: {
    secret(value) {
      return String(value).substr(0, 4) + "****" + String(value).substr(-4, 4);
    },
  },
};
</script>

<style>
.van-password-input {
  position: fixed;
  bottom: 244px;
  left: 50%;
  width: 100%;
  margin: 0;
  background-color: #fff;
  transform: translateX(-50%);
  z-index: 99;
  box-sizing: border-box;
}
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