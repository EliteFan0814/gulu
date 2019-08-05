import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import chai from 'chai'
import spies from 'chai-spies'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
chai.use(spies)

new Vue({
    el:'#app',
    data:{
        loading1:false
    }
})

const expect = chai.expect
// 单元测试
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon: 'setting'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
}

{
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    button.$mount(div)
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}

{
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let useElement = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(useElement)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}

{
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(div)
    let spy = chai.spy(()=>{})
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}