<template>
  <footer class="footer">
    <div class="remind">温馨提示：理财非存款，产品有风险，投资需谨慎。</div>
    <button class="purchase-btn" @click="purchaseCheck()">提交订单</button>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      permissionToken: null,
      orderId: null,
    };
  },
  computed: {
    ...mapState("orderAbout", ["orderNum", "ifAgree", "showKeyboard", "value"]),
  },
  methods: {
    purchaseCheck() {
      if (!this.orderNum) {
        this.$toast.fail("请输入正确的购买数量");
        return false;
      }
      if (!this.ifAgree) {
        this.$toast.fail('请完整输入"风险提示说明"');
        return false;
      }
      this.queryBucket();
    },

    queryBucket() {
      this.$toast.loading({
        message: "正在生成订单...",
        duration: 0,
        forbidClick: true,
      });
      this.axios({
        method: "get",
        url: "/order/bucket",
        params: {
          token: window.localStorage.getItem("token"),
          itemId: this.$route.params.productID,
        },
      })
        .then((response) => {
          if (response.data.status != 0) {
            this.$toast.fail(response.data.data.message);
          } else {
            this.permissionToken = response.data.data;
            this.sendPruchase();
          }
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
    },
    sendPruchase() {
      this.axios({
        method: "post",
        url: "/order/create",
        data: {},
        params: {
          token: window.localStorage.getItem("token"),
          permissionToken: this.permissionToken,
          itemId: this.$route.params.productID,
          amount: this.orderNum,
        },
      })
        .then((response) => {
          if (response.data.status != 0) {
            this.$toast.fail(response.data.data.message);
          } else {
            this.$toast("请输入支付密码");
            this.$store.state.orderAbout.showKeyboard = true;
            this.orderId = response.data.data;
            this.$store.state.orderAbout.showKeyboard = true;
          }
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
    },
    pwdCheck() {
      // this.sendPruchase();
      this.$toast.loading({
        message: "正在购买...",
        duration: 0,
        forbidClick: true,
      });
      this.axios({
        method: "post",
        url: "/order/check",
        params: {
          token: window.localStorage.getItem("token"),
          paymentPwd: this.value,
          price:
            Number(this.$store.state.orderAbout.orderNum) *
            Number(this.$store.state.orderAbout.productInfo.price),
          orderId: this.orderId,
        },
      })
        .then((response) => {
          if (response.data.status != 0) {
            this.$toast.fail(response.data.data.message);
            this.goWait(this.orderId);
          } else {
            this.$store.state.orderAbout.showKeyboard = false;
            this.$store.state.orderAbout.value = "";

            this.$toast.success("购买成功");
            // console.log(this.$route.params.productID);
            this.goDetail(this.orderId);
          }
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
    },
  },
  beforeDestroy() {
    this.$store.state.orderAbout.showKeyboard = false;
    this.$store.state.orderAbout.value = "";
  },
  watch: {
    value(newValue) {
      if (newValue.length >= 6) {
        this.pwdCheck();
      }
      return false;
    },
  },
};
</script>

<style>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
}

.remind {
  text-align: center;
  font-size: 0.3rem;
  padding-bottom: 0.4rem;
}
.purchase-btn {
  border: 0;
  border-radius: 0.4rem;
  width: 8rem;
  height: 1rem;
  background-color: #ef4c53;
  color: #fff;
  text-align: center;
  padding: 0.1rem 0;
  font-size: 0.6rem;
}
</style>