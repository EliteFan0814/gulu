<template>
    <div class="wrapper">
        <input :value="value" :disabled="disabled" :readonly="readonly" :class="{error}" type="text">
        <template v-if="error">
            <g-icon name="error" class="icon-error"></g-icon>
            <span class="icon-error">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        name: 'GuluInput',
        components:{
            'g-icon': Icon
        },
        props:{
            value:{
                type: String
            },
            disabled:{
                type: Boolean,
                default: false
            },
            readonly:{
                type: Boolean,
                default: false
            },
            error:{
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #f1453d;
    .wrapper{
        font-size: $font-size;display: inline-flex;align-items: center;
        > :not(:last-child){margin-right: .5em;}
        > input{
            height: 32px;border: 1px solid $border-color;border-radius: 4px;padding: 0 8px;font-size: inherit;
            &:hover{border-color: $border-color-hover;}
            &:focus{box-shadow: inset 1 1px 3px $box-shadow-color;}
            &[disabled],&[readonly]{border-color: #ccc;color: #ccc;cursor: not-allowed;}
            &.error{border-color: $red;}
        }
        .icon-error{fill: $red;color: $red;}
    }
</style>