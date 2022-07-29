import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter"

describe("Counter component", () => {

//   test("Debe de hacer match con el snapshot", () => {
//     const wrapper = shallowMount(Counter)
//     expect(wrapper.html()).toMatchSnapshot()
//   })

    test('h2 debe de tener el valor por defecto', () => {
        const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2 = wrapper.find('h2')

        expect(h2.text()).toBe('Counter')

    })

    test('el valor por defecto debe de ser 100 por defecto', () => {

        // Wrapper
        const wrapper = shallowMount(Counter)

        // pTags
        // const paragraph = wrapper.findAll('p').at(1)
        const value = wrapper.find('[data-testid="counter"]').text()

        // expect segundo p === 100

        expect(value).toBe('100')
    })

    test('debe de incrementar y decrementar', async() => {

        const wrapper = shallowMount(Counter)
        
        const increaseBtn = wrapper.find('button')

        await increaseBtn.trigger('click')

        let value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')



        const decreaseBtn = wrapper.findAll('button')[1]

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        value = wrapper.find('[data-testid="counter"]').text()

        
        expect(value).toBe('99')



    })
})