<template>
  <div class="market">
    <page-header>
      <span>{{ pageType | pageName }}</span>
    </page-header>
    <market-logo-pic />
    <ul class="pro-show">
      <market-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
    <page-remind/>
  </div>
</template>

<script>
import MarketCard from "../components/MarketCard.vue";
import MarketLogoPic from "../components/MarketLogoPic.vue";
import PageHeader from "../components/PageHeader.vue";
import PageRemind from '../components/PageRemind.vue';
export default {
  components: { PageHeader, MarketLogoPic, MarketCard, PageRemind },
  data() {
    return {
      pageType: "",
      products: [],
    };
  },
  mounted() {
    this.pageType = this.$route.params.type;
    this.axios({
      method: "get",
      url: "",
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
  filters: {
    pageName(value) {
      if (value == "loan") {
        return "贷款";
      } else if (value == "store") {
        return "存款";
      }

      return "未知";
    },
  },
};
</script>

<style>
.pro-show {
  display: flex;
  flex-direction: column;
  margin: 0;
  /* padding: .4rem; */
  /* background-color: #fff; */
  font-size: 0.45rem;
}
</style>