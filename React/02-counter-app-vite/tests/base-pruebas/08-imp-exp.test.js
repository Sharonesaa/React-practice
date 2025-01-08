import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () =>{
    test('getHeroeById debe retornar un heroe por id',() => {

        const id = 1;
        const heroe = getHeroeById(id);
      

        expect(heroe).toEqual ({ id: 1, name: 'Batman', owner: 'DC' })

    });

    test('getHeroeByOwner debe retornar un heroe por owner',() => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3)
        
        expect(heroes).toEqual ([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }])
        

        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    });
})