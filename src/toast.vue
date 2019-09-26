<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GuluToast'
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: black;
    .toast{
        border: 1px solid red;
        position: fixed;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        display: flex;
        align-items: center;
        background: $toast-bg;
    }
</style>