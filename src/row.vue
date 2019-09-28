<template>
    <div class="row" :style="rolStyle" :class="rolClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLuRow',
        props: {
            gutter: [Number, String],
            align: {
                type: String,
                validator(value) {
                    return ['left', 'right', 'center'].includes(value)
                }
            }
        },
        computed: {
            rolStyle() {
                let {gutter} = this
                return {
                    marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'
                }
            },
            rolClass() {
                let {align} = this
                return [align && `align-${align}`]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = Number(this.gutter)
                console.log(vm.gutter)
                console.log(typeof vm.gutter)
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;

        &.align-left {
            justify-content: flex-start;
        }

        &.align-right {
            justify-content: flex-end;
        }

        &.align-center {
            justify-content: center;
        }
    }
</style>