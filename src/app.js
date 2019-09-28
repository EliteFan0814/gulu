import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import chai from 'chai'
import spies from 'chai-spies'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-toast', Toast)
Vue.use(plugin)

chai.use(spies)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: 'fpc'
    },
    created() {
        setTimeout(() => {
            let event = new Event('change')
            let inputElement = this.$el.querySelectorAll('input')[0]
            inputElement.dispatchEvent(event)
            console.log('hai')
        }, 3000)
    },
    methods: {
        outChange(e) {
            console.log(e)
        },
        showToast() {
            this.$toast('我是 message<p>这是一个段落</p>', {
                closeButton: {
                    text: '知道了',
                    callback(toast) {
                        toast.log()
                        console.log('用户说他知道了')
                    }
                },
                enableHtml: false
            })
        }
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

