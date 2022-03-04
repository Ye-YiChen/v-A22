<template>
  <header class="header">
    <h2><slot></slot></h2>
    <div class="contact">意见反馈</div>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: .8rem;
    margin-bottom: 2rem;
    background-color: transparent;
}
.contact {
    text-align: right;
    line-height: 1rem;
    font-size: .3733rem;
    font-weight: 700;
    color: #666;
    margin-right: -.3rem;
}
h2 {
    margin: 0;
    margin-left: -.4rem;
    font-size: .88rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    text-shadow: .1rem .15rem .1333rem red;
    letter-spacing: .1rem;
}
</style>