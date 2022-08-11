import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter"

describe("Counter component", () => {

    let wrapper
    
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })
//   test("Debe de hacer match con el snapshot", () => {
//     const wrapper = shallowMount(Counter)
//     expect(wrapper.html()).toMatchSnapshot()
//   })

    test('h2 debe de tener el valor por defecto', () => {

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2 = wrapper.find('h2')

        expect(h2.text()).toBe('Counter')
    })

    test('el valor por defecto debe de ser 100 por defecto', () => {

        // Wrapper

        // pTags
        // const paragraph = wrapper.findAll('p').at(1)
        const value = wrapper.find('[data-testid="counter"]').text()

        // expect segundo p === 100

        expect(value).toBe('100')
    })

    test('debe de incrementar y decrementar', async() => {

        let [increase, decrease] = wrapper.findAll('button')

        await increase.trigger('click')
        await increase.trigger('click')
        await increase.trigger('click')
        await decrease.trigger('click')
        await decrease.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')

    })

    test('debe de establecer siempre el valor por defecto', () => {
        const {start} = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test('debe de mostrar laa prop title', () => {

        const title = 'Hola mundo'
        
        const wrapper = shallowMount(Counter, {

            props: {
                title,
                // start: '100'
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)
    })
})