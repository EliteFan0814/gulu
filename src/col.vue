<template>
    <div class="col" :class="`col-${span}`">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluCol',
    props:{
        span:[Number,String]
    }
}
</script>
<style lang="scss" scoped>
    .col {
        height: 100px;
        background: grey;
        width: 50%;
        border: 1px solid red;

        $colClass: col-;
        @for $n from 1 through 24 {
            &.#{$colClass}#{$n} {
                width: ($n/24)*100%;
            }
        }
    }
</style>