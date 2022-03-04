<template>
  <footer class="footer">
       <div class="b-remind">温馨提示：<br><slot></slot></div>
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
    padding: .2rem 0;
}

.b-remind{
    text-align: left;
    font-size: .3rem;
    /* padding-bottom: .2rem ; */
    background-color: rgb(253, 241, 241);
}
</style>