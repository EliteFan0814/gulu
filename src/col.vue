<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border:1px solid green;height: 100px;"></div>
        <slot></slot>
    </div>
</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key)=>{
            if (!['span','offset'].includes(key)){
                valid = false
            }
        })
        return valid
    }
export default {
    name: 'GuluCol',
    props:{
        span:[Number,String],
        offset:[Number,String],
        ipad:{
            type: Object,
            validator
        },
        narrowPc:{
            type: Object,
            validator
        },
        pc:{
            type: Object,
            validator
        },
        widePc:{
            type: Object,
            validator
        }
    },
    data(){
        return {
            gutter:0,
        }
    },
    methods:{
        createClasses (obj,str = '') {
            if(!obj){return []}
            let array = []
            if(obj.span){
                array.push(`col-${str}${obj.span}`)
            }
            if(obj.offset){
                array.push(`col-${str}${obj.offset}`)
            }
            return array
        }
    },
    computed:{
        colClass(){
            let {span,offset,ipad,narrowPc,pc,widePc} = this
            let createClasses = this.createClasses
            return [
                ...createClasses({span,offset}),
                ...createClasses(ipad,'ipad-'),
                ...createClasses(narrowPc,'narrow-pc-'),
                ...createClasses(pc,'pc-'),
                ...createClasses(widePc,'wide-pc')
            ]
        },
        colStyle(){
            return {
                paddingLeft: this.gutter/2 + 'px',
                paddingRight: this.gutter/2 + 'px'
            }

        }
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
        $colClass: offset-;
        @for $n from 1 through 24 {
            &.#{$colClass}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
        @media (min-width:577px) {
            $colClass: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$colClass}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $colClass: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$colClass}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width:769px) {
            $colClass: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$colClass}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $colClass: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$colClass}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width:993px) {
            $colClass: col-pc-;
            @for $n from 1 through 24 {
                &.#{$colClass}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $colClass: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$colClass}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width:1201px) {
            $colClass: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$colClass}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $colClass: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$colClass}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }
</style>