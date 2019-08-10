import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import chai from 'chai'
import spies from 'chai-spies'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
chai.use(spies)

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})

const expect = chai.expect

try {
// 单元测试
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount()
        console.log(vm.$el)
        let useElement = vm.$el.querySelector('use')
        console.log(useElement)
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-setting')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true
            }
        })
        vm.$mount(div)
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
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
        let spy = chai.spy(() => {
        })
        vm.$on('click', spy)
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
        vm.$el.remove()
        vm.$destroy()
    }
} catch (e) {
    window.errors = [e]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}

