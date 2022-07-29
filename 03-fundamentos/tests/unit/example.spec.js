
describe('Example component', ()=>{
    test('Debe de ser mayor a 10', ()=>{
        
        // Arreglar
        let value = 9;

        // Estímulo
        value = value + 2

        // Observar
        expect(value).toBeGreaterThan(10)

    })
})