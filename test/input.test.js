const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('可以设置icon.', () => {
            vm = new Constructor({
                propsData: {
                    value: 'setting'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.value).to.equal('setting')
            vm.$destroy()
        })
        it('可以接收disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.disabled).to.equal(true)
            vm.$destroy()
        })
        it('可以接收readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.readOnly).to.equal(true)
            vm.$destroy()
        })
        it('可以接收error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'fpc'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorElement = vm.$el.querySelectorAll('.icon-error')[1]
            expect(errorElement.innerText).to.equal('fpc')
            vm.$destroy()
        })
    })
    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('循环单元测试',()=>{
            ['change','input','focus','blur'].forEach((item)=>{
                vm = new Constructor().$mount()
                const callback = sinon.fake()
                vm.$on(item,callback)
                let event = new Event(item)
                Object.defineProperty(event,'target',{
                    value:{value:'hi'},enumerable:true
                })
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })

        // it('change 事件',()=>{
        //     vm = new Constructor().$mount()
        //     const callback = sinon.fake()
        //     vm.$on('change',callback)
        //     let event = new Event('change')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('input 事件',()=>{
        //     vm = new Constructor().$mount()
        //     const callback = sinon.fake()
        //     vm.$on('input',callback)
        //     let event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('focus 事件',()=>{
        //     vm = new Constructor().$mount()
        //     const callback = sinon.fake()
        //     vm.$on('focus',callback)
        //     let event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('blur 事件',()=>{
        //     vm = new Constructor().$mount()
        //     const callback = sinon.fake()
        //     vm.$on('blur',callback)
        //     let event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })

})
