<template>
  <footer class="footer">
    <div class="remind">温馨提示：理财非存款，产品有风险，投资需谨慎。</div>
    <button class="purchase-btn" @click="purchase">支付订单</button>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed:{
      ...mapState("orderAbout", ["orderNum", "ifAgree"]),

  },
  methods: {
    purchase() {
      if (!this.orderNum) {
        this.$toast.fail("请输入正确的购买数量");
        return false;
      }
      if (this.ifAgree) {
        this.$toast.fail('请完整输入"风险提示说明"');
        return false;
      }
      this.$toast.loading({
        message: "正在购买...",
        duration: 0,
        forbidClick: true,
      });
      this.axios({
        method: "post",
        url: "/order/create",
        data: {
          id: this.$route.params.productID,
          amount: this.orderNum,
        },
      })
        .then((response) => {
          if (response.data.status != 0) {
            this.$toast.fail(response.data.data.message);
          } else {
            this.$toast.success("购买成功");
            this.goDetail(response.data.data.id);
          }
        })
        .catch((err) => {
          this.$toast.fail(err.message);
        });
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