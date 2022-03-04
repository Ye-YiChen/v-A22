<template>
  <footer class="footer">
            <div class="remind">温馨提示：理财非存款，产品有风险，投资需谨慎。</div>
            <button class="purchase-btn">支付订单</button>
        </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem 0;
}

.remind{
    text-align: center;
    font-size: .3rem;
    padding-bottom: .4rem ;
}
.purchase-btn{
    border: 0;
    border-radius: .4rem;
    width: 8rem;
    height: 1rem;
    background-color: #EF4C53;
    color:#fff;
    text-align: center;
    padding: .1rem 0;
    font-size: .6rem;
}
</style>