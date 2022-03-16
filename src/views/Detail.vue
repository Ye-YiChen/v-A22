<template>
  <div class="detail" v-cloak>
    <page-header><span>订单详情</span></page-header>
    <detail-logo-pic />
    <detail-card  :order="orderInfo"/>
    <page-remind>
      <span>期望汇报不等于实际汇报，产品有风险，投资须谨慎</span>
    </page-remind>
    <back-home-button />
    <back-button />
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";
import BackHomeButton from "../components/BackHomeButton.vue";
import DetailCard from "../components/DetailCard.vue";
import DetailLogoPic from "../components/DetailLogoPic.vue";
import PageHeader from "../components/PageHeader.vue";
import PageRemind from "../components/PageRemind.vue";
export default {
  components: {
    PageHeader,
    BackButton,
    DetailLogoPic,
    DetailCard,
    PageRemind,
    BackHomeButton,
  },
  data() {
    return {
      orderID: "",
      orderInfo: "",
    };
  },
  
  mounted() {
    document.title='订单详情页面'
    this.isLogin()
    this.orderID = this.$route.params.orderID;
    this.axios({
      method: "get",
      url: "/order/detail/" + this.orderID,
      params:{
        token:window.localStorage.getItem('token')
      }
    })
      .then((response) => {
        console.log(response);
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
        } else {
          this.orderInfo = response.data.data;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
      });
  },
};
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>