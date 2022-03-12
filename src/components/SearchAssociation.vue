<template>
  <div class="search-association">
    <van-cell-group>
      <van-cell
        v-for="like in likes"
        :key="like.id"
        :title="like.name"
        @click="goProduct(like.id)"
        icon="search"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: ["likes"],
};
</script>

<style>
</style>