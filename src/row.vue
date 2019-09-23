<template>
    <div class="row" :style="rolStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'GuLuRow',
    props:{
        gutter:[Number,String]
    },
    computed:{
        rolStyle(){
            let {gutter} = this
            return {
                marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'
            }
        }
    },
    mounted() {
        this.$children.forEach((vm)=>{
            vm.gutter = Number(this.gutter)
            console.log(vm.gutter)
            console.log(typeof vm.gutter)
        })
    }
}
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
        flex-wrap: wrap;
    }
</style>