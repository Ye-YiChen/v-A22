<template>
    <div class="canvans"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
    @keyframes run {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -1200px 0;
    }
}

.canvans {
    position: absolute;
    bottom: .5rem;
    left: 0;
    width: 100%;
    height: 525px;
    background: url(../../public/images/steamer.png);
    animation: run 15s linear infinite backwards;
    z-index: -99;
}

</style>