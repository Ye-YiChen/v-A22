<template>
  <footer class="footer" @click="goHome()">
    <button class="purchase-btn" @click.prevent="returnIndex">回到主页</button>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
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