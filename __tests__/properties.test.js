const Pokemon = require('../pokemon/properties')

describe('Pokemon', () => {
    test('returns a property of each argument passed in', () => {
        const pickachu = new Pokemon('Pickachu', 10, 7) 
        expect(pickachu).toEqual({name: 'Pickachu', hitPoints: 10, attackDamage: 7, move: 'tackle'})
    });
    test.only('returns reduced health', () => {
        const pickachu = new Pokemon('Pickachu', 10, 7)
        pickachu.takeDamage(3) 
        expect(pickachu).toEqual({name: 'Pickachu', hitPoints: 7, attackDamage: 7, move: 'tackle'})
    });
    test('returns reduced health', () => {
        const pickachu = new Pokemon('Pickachu', 10, 7) 
        expect(pickachu).toEqual({name: 'Pickachu', hitPoints: 10, attackDamage: 7, move: 'tackle'})
    });
});