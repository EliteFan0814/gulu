<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <div class="content"><slot></slot></div>
    </button>
</template>

<script>
    export default {
        // props:['icon','iconPosition']
        props:{
            icon:{},
            iconPosition:{
                type: String,
                default: 'left',
                validate(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-background);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color);
        }

        &:active {
            background-color: var(--button-active-background);
        }

        &:focus {
            outline: none;
        }
        > .icon{
            margin-right: .1em;
        }
        /*> .content{*/
        /*    order: 2;*/
        /*}*/
        &.icon-right{
            > .icon{
                order: 2; margin-right: 0em;
                margin-left: .1em;
            }
            > .content{
                order: 1;
            }
        }
    }

</style>