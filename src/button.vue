<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
        <div class="content"><slot></slot></div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        // props:['icon','iconPosition']
        components:{
            'g-icon': Icon
        },
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition:{
                type: String,
                default: 'left',
                validate(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        },
        computed:{
            isLoading(){
                if(this.icon === 'loading'){
                    return 'loading'
                }
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
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
            order: 1;
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
        .loading{
            animation: spin 2s infinite linear;
        }
    }

</style>