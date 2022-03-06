<template>
  <div class="market" v-cloak>
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
    <page-remind>
      <span>以上产品利率仅供参考，请您以实际交易利率为准</span>
    </page-remind>

    <back-button />
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";
import MarketCard from "../components/MarketCard.vue";
import MarketLogoPic from "../components/MarketLogoPic.vue";
import PageHeader from "../components/PageHeader.vue";
import PageRemind from "../components/PageRemind.vue";
export default {
  components: { PageHeader, MarketLogoPic, MarketCard, PageRemind, BackButton },
  data() {
    return {
      pageType: "",
      products: [],
    };
  },
  mounted() {
    this.pageType = this.$route.params.type;
    let url = "";
    if (this.pageType == "loan") {
      document.title = "贷款超市";
      url = "loan";
    } else if (this.pageType == "store") {
      document.title = "存款超市";
      url = "deposit";
    } else {
      document.title = "商品超市";
    }
    this.axios({
      method: "get",
      url: "/item/" + url + "/list",
    })
      .then((response) => {
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
        } else {
          this.products = response.data.data;
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