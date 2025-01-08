import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async', () =>{
    test('Debe retornar una URL de una imagen',async() => {

        const url = await getImagen()
        console.log(url)
        expect (typeof url).toBe ('string');
    });  
});
