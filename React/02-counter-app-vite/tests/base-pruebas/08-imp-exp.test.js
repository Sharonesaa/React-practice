import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () =>{
    test('getHeroeById debe retornar un heroe por id',() => {

        const id = 1;
        const heroe = getHeroeById(id);
      

        expect(heroe).toEqual ({ id: 1, name: 'Batman', owner: 'DC' })

    });
})