<template>
  <div class="">
    <page-header>
      <span>全部订单</span>
    </page-header>
    <van-notice-bar
      left-icon="volume-o"
      scrollable
      text="涉及第三方服务的订单信息，如未显示，请到购买页面查询。"
    />
    <van-tabs v-model="active" animated>
      <van-tab title="全部" class="order-container">
        <order-card />
      </van-tab>
      <van-tab title="待支付" class="order-container">
        <order-card />
      </van-tab>
      <van-tab title="已完成" class="order-container">
        <order-card />
      </van-tab>
      <van-tab title="已取消" class="order-container">
        <order-card />
      </van-tab>
    </van-tabs>

    <van-empty v-if="isEmpty[active]" description="这里空空如也呢">
      <van-button round type="danger" class="bottom-button" @click="goHome()"
        >去主页看看吧</van-button
      >
    </van-empty>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OrderCard from "../components/OrderCard.vue";
import PageHeader from "../components/PageHeader.vue";

export default {
  components: { PageHeader, OrderCard },
  data() {
    return {
      active: null,
      isEmpty: [false, false, false, false],
      orders: [],
    };
  },
  computed: {
    ...mapState("userAbout", ["userName"]),
  },
  mounted() {
    this.axios({
      method: "get",
      url: "/order/list?token=" + window.localStorage.getItem("token"),
    }).then((response) => {
      if (response.status != 0) {
        this.$toast.fail(response.data.message);
      } else {
        this.orders = response.data;
      }
    });
  },
};
</script>

<style scoped>
.bottom-button {
  width: 160px;
  height: 40px;
}
.order-container {
  width: 95%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0.3rem 0.3rem;
  /* overflow: hidden; */
}
</style>