<template>
  <header class="header">
    <div class="back-ico" @click="goBack()">&#xe6ab;</div>
    <div class="page-name">
      <slot></slot>
      </div>
    <div class="icos">
      <div class="search" @click="goSearch()">&#xe60b;</div>
      <div class="service">&#xe65f;</div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  top: 0;
  background-color: rgb(245, 68, 76);
  color: #fff;
}
.header {
  font-family: "iconfont";
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.3rem 0.3rem;
  margin: 0;
  font-size: 0.45rem;
  box-sizing: border-box;
  line-height: 0.45rem;
  z-index: 10;
}

.page-name {
  font-weight: 700;
  padding-left: 1rem;
}
.icos {
  display: flex;
}
.search {
  font-weight: 700;
  font-size: 0.48rem;
  margin-right: 0.1rem;
}
.service {
  font-size: 1rem;
  line-height: 0.5rem;
  font-weight: 700;
}
</style>