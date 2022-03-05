<template>
  <div class="home" v-cloak>
    <home-header />
    <home-select />
    <div class="main">
      <home-swiper />
      <home-recommend-card :recommends="stores" />
      <home-notice-bar :notices="notices" />
      <div class="noads">
        <home-ad-card :ads="loans.slice(0,3)" type="loan">
          <template v-slot:icon><span class="re-ico">&#xe63e;</span></template>
          <template v-slot:cardName><span>精选贷款</span></template>
        </home-ad-card>
        <home-ad-card :ads="stores.slice(0,3)" type="store">
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
import { mapState } from 'vuex';
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
      loans: [
        {
          num: 3.3,
          name: "易方达",
          info: "近一年增长率",
          intro: "XXXXX",
          id: "0001",
        },
        {
          num: 3.3,
          name: "易方达",
          info: "近一年增长率",
          intro: "XXXXX",
          id: "0002",
        },
        {
          num: 3.3,
          name: "易方达",
          info: "近一年增长率",
          intro: "XXXXX",
          id: "0003",
        },
      ],
      stores: [
        {
          num: 3.3,
          name: "易方达",
          info: "近一年增长率",
          intro: "XXXXX",
          id: "0001",
        },
        {
          num: 3.3,
          name: "易方达",
          info: "近一年增长率",
          intro: "XXXXX",
          id: "0002",
        },
        {
          num: 3.3,
          name: "易方达",
          info: "近一年增长率",
          intro: "XXXXX",
          id: "0003",
        },
      ],
      notices: [
        {
          info: "这里是一条可以很长的消息1",
          id: 1,
        },

        {
          info: "这里是一条可以很长的消息2",
          id: 2,
        },
        {
          info: "这里是一条可以很长的消息3",
          id: 3,
        },
      ],
      userInfo: {
        loan: 4,
        store: 3,
        unpaid: 3,
        // appointed: 5,
      },
    };
  },
  computed:{
    ...mapState('userAbout',['userName'])
  },
  mounted() {
    document.title='主页面'
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
        return false
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
  },
};
</script>

<style>
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