<template>
  <div class="search-history">
    <van-cell-group>
      <van-cell title="历史记录" value="" class="big-words">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <span @click="clearAll()">全部删除</span>
          <van-icon name="delete-o" class="delete-icon" @click="clearAll()" />
        </template>
      </van-cell>
      <div class="histories">
        <van-cell
          :title="history"
          value=""
          v-for="(history, index) in localHistories"
          :key="index"
        >
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon
              name="close"
              class="delete-icon"
              @click="clearOne(index)"
            />
          </template>
        </van-cell>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localHistories: [],
    };
  },
  methods: {
    clearAll() {
      this.localHistories= [],
      window.localStorage.removeItem("histories");
    },
    clearOne(index) {
      this.localHistories.splice(index, 1);
      window.localStorage.setItem("histories", this.localHistories);
    },
  },
  mounted() {
    if (window.localStorage.getItem("histories"))
      this.localHistories = window.localStorage.getItem("histories").split(",");
    else this.localHistories = [];
    if (this.localHistories.length == 2) {
      this.clearOne(1);
    }
  },
};
</script>


<style scoped>
.search-history {
  padding-top: 0.2rem;
  background-color: #fff;
}
.delete-icon {
  align-self: center;
  font-weight: 700;
}
.big-words {
  font-size: 16px;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
</style>