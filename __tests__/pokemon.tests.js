//imports required classes we need for testing 
const {Pokemon, Fire, Grass, Water, Normal, Charmander, Squirtle, Rattata, Bulbasaur, pokeBall, Trainer, Battle} = require('../pokemon/pokemon')

//Testing 
describe('Pokemon', () => {

    //base tests
    test('returns a property of each argument passed in', () => {
        const bulbasaur = new Pokemon('bulbasaur', 10, 7) 
        expect(bulbasaur).toEqual({name: 'bulbasaur', hitPoints: 10, attackDamage: 7, move: 'tackle'})
    });
    //checks if health is reduced by taking damage
    test('returns reduced health', () => {
        const bulbasaur = new Pokemon('bulbasaur', 10, 7)
        bulbasaur.takeDamage(3) 
        expect(bulbasaur).toEqual({name: 'bulbasaur', hitPoints: 7, attackDamage: 7, move: 'tackle'})
    });

    //checks attack damage aafter

    test('returns atttack damage after used move', () => {
        const bulbasaur = new Pokemon('bulbasaur', 10, 7) 
        expect(bulbasaur).toEqual({name: 'bulbasaur', hitPoints: 10, attackDamage: 7, move: 'tackle'})
    });


    //checks if hasfainted is  true false based on damage
    test('returns hasFainted is false', () => {
        const bulbasaur = new Pokemon('bulbasaur', 10, 7) 
        expect(bulbasaur.hasFainted()).toBe(false)
    });
    test('returns hasFainted is true', () => {
        const bulbasaur = new Pokemon('bulbasaur', 10, 7) 
        bulbasaur.takeDamage(30) 
        expect(bulbasaur.hasFainted()).toBe(true)
    });

    //grass pokemon isEffectiveAgainst tests 

    test('returns true that a grass pokemon is effective against a water pokemon', () => {
        const bulbasaur = new Grass('bulbasaur', 10, 7) 
        expect(bulbasaur.isEffectiveAgainst("water")).toBe(true)
    });
    test('returns false that a grass pokemon is effective against a fire pokemon', () => {
        const bulbasaur = new Grass('bulbasaur', 10, 7) 
        expect(bulbasaur.isEffectiveAgainst("fire")).toBe(false)
    });

    //grass pokemon isWeakTo tests 

    test('returns false that a grass pokemon is weak to a water pokemon', () => {
        const bulbasaur = new Grass('bulbasaur', 10, 7) 
        expect(bulbasaur.isWeakTo("water")).toBe(false)
    });
    test('returns true that a grass pokemon is weak to a fire pokemon', () => {
        const bulbasaur = new Grass('bulbasaur', 10, 7) 
        expect(bulbasaur.isWeakTo("fire")).toBe(true)
    });

    //fire pokemon isEffectiveAgainst tests 

    test('returns true that a fire pokemon is effective against a grass pokemon', () => {
        const charmander = new Fire('charmander', 10, 7) 
        expect(charmander.isEffectiveAgainst("grass")).toBe(true)
    });
    test('returns false that a fire pokemon is effective against a water pokemon', () => {
        const charmander = new Fire('charmander', 10, 7) 
        expect(charmander.isEffectiveAgainst("water")).toBe(false)
    });
    
     //fire pokemon isWeakTo tests 

     test('returns false that a fire pokemon is weak to a grass pokemon', () => {
        const charmander = new Fire('charmander', 10, 7) 
        expect(charmander.isWeakTo("grass")).toBe(false)
    });
    test('returns true that a fire pokemon is effective against a water pokemon', () => {
        const charmander = new Fire('charmander', 10, 7) 
        expect(charmander.isWeakTo("water")).toBe(true)
    });

    //checks that charmanders attack is ember

    test('returns charmenders attack ember from the charamnder class', () => {
        const charmander = new Charmander('charmander', 10, 7) 
        expect(charmander.move).toBe('ember')
    });

    //checks that squirtles attack is water gun

    test('returns squirtles attack water gun from the charamnder class', () => {
        const squirtle = new Squirtle('squirtle', 10, 7) 
        expect(squirtle.move).toBe('water gun')
    });


    //checks that bulbasaur's attack is vine whip

    test('returns bulbasaurs attack vine whip from the bulbasaur class', () => {
        const bulbasaur = new Bulbasaur('bulbasaur', 10, 7) 
        expect(bulbasaur.move).toBe('vine whip')
    });

    //checks that rattata's attack is tackle

    test(`returns rattata's attack tackle from the rattata class`, () => {
        const rattata = new Rattata('rattata', 10, 7) 
        expect(rattata.move).toBe('tackle')
    });

    //checks if pokeball isEmpty 

    test(`returns true that the pokeball is empty`, () => {
        const pokeballone = new pokeBall() 
        expect(pokeballone.isEmpty()).toBe(true)
    });

    //creates a pokemon and adds to the pokeball

    test(`returns name of the pokemon in the pokeball that ive added`, () => {
        //creates a pokeball
        const pokeballone = new pokeBall() 

        //creates a pokemon
        const bulbasaurone = new Bulbasaur('bulbasaur', 10, 7) 

        //adds pokemon to pokeball
        pokeballone.throw(bulbasaurone)

        //
        expect(pokeballone.contains()).toBe('bulbasaur')
    });
    

    //checks if pokeball isEmpty is false after pokemon been captured 

    test(`returns false that the pokeball is empty`, () => {

    //creates a pokeball

    const pokeballone = new pokeBall() 

    //creates a pokemon
    const bulbasaurone = new Bulbasaur('bulbasaur', 10, 7) 

    //adds pokemon to pokeball
    pokeballone.throw(bulbasaurone)
       expect(pokeballone.isEmpty()).toBe(false)
    });
    

    //test 
    
    test(`returns empty... when ask for what pokemon the created pokeball contains and its empty`, () => {
    const pokeballone = new pokeBall() 

    pokeballone.contains(pokeballone.contains())
       expect(pokeballone.contains()).toBe('empty ...')
    });


    test.only(`checks if pokemon are catched into pokeballs and returns squirtle`, () => {

        const trainerOne = new Trainer() 

        const bulbasaurone = new Bulbasaur('bulbasaur', 10, 7) 
        const charmanderone = new Charmander('charmander', 10, 7) 
        const squirtleone = new Squirtle('squirtle', 10, 7) 

        trainerOne.catch(bulbasaurone)
        trainerOne.catch(charmanderone)
        trainerOne.catch(squirtleone)

        expect(trainerOne.getPokemon('squirtle').name).toBe('squirtle')
    });


    test(`returns "no empty Pokeballs" if there are no empty pokeballs as all 6 slots in the belt are used`, () => {

        const trainerOne = new Trainer() 

        const bulbasaurone = new Bulbasaur('bulbasaur', 10, 7) 
        const charmanderone = new Charmander('charmander', 10, 7) 
        const squirtleone = new Squirtle('squirtle', 10, 7) 
        const charmandertwo = new Charmander('charmander', 10, 7) 
        const charmanderthree = new Charmander('charmander', 10, 7) 
        const rattata = new Rattata('rattata', 10, 7) 



        trainerOne.catch(bulbasaurone)
        trainerOne.catch(charmanderone)
        trainerOne.catch(squirtleone)
        trainerOne.catch(charmandertwo)
        trainerOne.catch(charmanderthree)
        trainerOne.catch(rattata)


        expect(trainerOne.catch(rattata)).toBe("no empty Pokeballs")
    });



    
    


});