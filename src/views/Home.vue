<template>
  <div class="home" v-cloak v-if="loaded">
    <home-header />
    <home-select />
    <div class="main">
      <home-swiper />
      <home-recommend-card :recommends="stores" />
      <home-notice-bar :notices="notices" />
      <div class="noads">
        <home-ad-card :ads="loans.slice(0, 3)" type="loan">
          <template v-slot:icon><span class="re-ico">&#xe63e;</span></template>
          <template v-slot:cardName><span>精选贷款</span></template>
        </home-ad-card>
        <home-ad-card :ads="stores.slice(0, 3)" type="store">
          <template v-slot:icon><span class="re-ico">&#xe6aa;</span></template>
          <template v-slot:cardName><span>精选存款</span></template>
        </home-ad-card>
      </div>
      <home-secretary :userInfo="userInfo" />
    </div>
    <back-button />
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";
import HomeAdCard from "../components/HomeAdCard.vue";
import HomeHeader from "../components/HomeHeader.vue";
import HomeNoticeBar from "../components/HomeNoticeBar.vue";
import HomeRecommendCard from "../components/HomeRecommendCard.vue";
import HomeSelect from "../components/HomeSelect.vue";
import HomeSwiper from "../components/HomeSwiper.vue";
import HomeSecretary from "../components/HomeSecretary.vue";
import { mapState } from "vuex";
export default {
  components: {
    HomeHeader,
    HomeSelect,
    BackButton,
    HomeAdCard,
    HomeSwiper,
    HomeRecommendCard,
    HomeNoticeBar,
    HomeSecretary,
  },
  data() {
    return {
      loans: [],
      stores: [],
      notices: [],
      userInfo: {
        loan: 0,
        store: 0,
        unpaid: 0,
        // appointed: 5,
      },
    };
  },
  computed: {
    ...mapState("userAbout", ["userName"]),
    loaded(){
      if(this.loans.length==0 && this.stores.length==0 && this.notices.length==0 ){
        return false
      }
      else return true
    }
  },
  mounted() {
    document.title = "主页面";
    // 获取用户ID  zai HomeSelect里
    // 获取贷款列表
    this.axios({
      method: "get",
      url: "/item/loan/list",
    })
      .then((response) => {
        if (response.data.status != 0) {
          console.log(response);
          this.$toast.fail(response.data.data.message);
        } else {
          this.loans = response.data.data;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
        return false;
      });
    //获取存款列表
    this.axios({
      method: "get",
      url: "/item/deposit/list",
    })
      .then((response) => {
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
        } else {
          this.stores = response.data.data;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
      });

    // 获取新闻信息
    this.axios({
      method: "get",
      url: "/item/news",
    })
      .then((response) => {
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
        } else {
          this.notices = response.data.data;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
      });
    // 获取订单部分
    this.axios({
      method: "get",
      url: "/order/list?token=" + window.localStorage.getItem("token"),
    })
      .then((response) => {
        console.log(response);
        if (response.data.status != 0) {
          this.$toast.fail(response.data.data.message);
          return false;
        } else {
          this.orders = response.data.data;
          for(let i of response.data.data){
            if(i.status==0){
              this.unpaid++
            }else if(i.status==2 && i.flag==0){
            this.store++
            }else if(i.status && i.flag==1){
              this.loan++
            }
          }
          return false;
        }
      })
      .catch((err) => {
        this.$toast.fail(err.message);
      });
  },
};
</script>

<style >
.noads {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  font-size: 0.4267rem;
  letter-spacing: 0.0533rem;
  z-index: 10;
  width: 100%;
  overflow: hidden;
}
.main {
  padding: 0 0.4rem;
}
.re-ico {
  font-family: "iconfont";
  color: #eb8108;
  font-weight: 700;
  font-size: 0.6rem;
  margin-right: 0.2rem;
}
</style>