//Pokemon Class

class Pokemon{

    //creates various properties for the pokemon class 
    constructor(name, hitPoints, attackDamage, move = 'tackle'){
        this.name = name
        this.hitPoints  = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }

    //take damage to subtract damage which is done to the pokemon 
    takeDamage(damage) {
        this.hitPoints -= damage
    }

    //prints the name of the pokemon and the name of the move used and returns the attack damage 
    useMove() {
        console.log(`${this.name} used ${this.move}`)
        return this.attackDamage
    }

    //checks if the pokemon has been damaged to the point of fainting and returns a boolena 
    hasFainted() {
        return this.hitPoints <= 0
    }
   
}

//creates fire class 

class Fire extends Pokemon {
    
    constructor(name, hitPoints, attackDamage, move = "tackle"){
        super(name, hitPoints, attackDamage, move)
        this.type = "fire"
    }

    //checks to see if a fire pokemon is effective against a grass or a water pokemon and returns correct boolean value 
    isEffectiveAgainst(type) {
        switch(type) {
            case "grass" : return true 
            case "water" : return false 
        }
    }
    //checks to see if a fire pokemon is weak to a grass or a water pokemon and returns correct boolean value 
    isWeakTo(type) {
        switch(type) {
            case "grass" : return false 
            case "water" : return true 
        }
    }

}

//creates charmander class 

class Charmander extends Fire {

    //constuctor function that reassigns the default move to ember for charmander 
    constructor(move){
        super(move)
        this.move = "ember"
    }

}

//creates grass class

class Grass extends Pokemon {

    constructor(name, hitPoints, attackDamage, move = "tackle"){
        super(name, hitPoints, attackDamage, move)
        this.type = "grass"
    }

    isEffectiveAgainst(type) {
        switch(type) {
            case "water" : return true 
            case "fire" : return false 
        }
    }
    isWeakTo(type) {
        switch(type) {
            case "water" : return false 
            case "fire" : return true 
        }
    }

}

//creates bulbasaur class

class Bulbasaur extends Grass {

    //constuctor function that reassigns the default move to vine whip for bulbasaur  
    constructor(move){
        super(move)
        this.move = "vine whip"
    }

}
class Water extends Pokemon {

    constructor(name, hitPoints, attackDamage, move = "tackle"){
        super(name, hitPoints, attackDamage, move)
        this.type = "water"
    }

    isEffectiveAgainst(type) {
        switch(type) {
        case "fire" : return true 
        case "grass" : return false 
        }
    }
    isWeakTo(type) {
        switch(type) {
            case "fire" : return false 
            case "grass" : return true 
        }
    }

}

//creates squirtle class

class Squirtle extends Water {

    //constuctor function that reassigns the default move to water gun for squirtle  
    constructor(move){
        super(move)
        this.move = "water gun"
    }
}

//creates normal class

class Normal extends Pokemon {
    constructor(){
        super()
    }
}

//creates Rattata class

class Rattata extends Normal {
    constructor(){
        super()
    }
}

// creates pokeball class

class pokeBall {

    //constructor function for pokeball that sets up its properties
    constructor() {
        this.pokeBallEmpty = true
        this.pokemonInBall = undefined
    }

    //function that can take a pokemon as an argument and if pokeball is empty, pokemon is captured into the pokeball and if not message is given 
    throw(passedPokemon = undefined) {

    //checks if a pokemon is passed as an argument 
    if (passedPokemon !== undefined)  { 

    //checks if the pokeball is empty or not
    if (this.pokeBallEmpty === true) {
        //if pokeball empty then message printed about having captured the pokemon and pokemon is stored into the pokeball 
            console.log(`you caught ${passedPokemon.name}`)
            this.pokemonInBall = passedPokemon
            this.pokeBallEmpty = false    
    } else {            
        //prints message to inform pokeball not empty
          console.log(`Pokeball is not empty`)
        }

    } else {
        if (!this.isEmpty()) {
        console.log(`GO ${this.pokemonInBall.name}`)
        }
    }

    }

    //checks to see if the pokeball is empty and returns a boolean value
    isEmpty() {
       return this.pokeBallEmpty === true
    }

    //returns what pokemon the pokeball contains if the pokeball is not empty or returns empty if it is empty
    contains() {
        if (this.pokeBallEmpty === true) {
            return "empty ..."
        } else {
           return this.pokemonInBall.name
        }
    }

}

//creates trainer class

class Trainer {

     //constructor function for trainer that sets up its properties
     constructor() {
        this.belt = [this.pokeballone = new pokeBall(), this.pokeballtwo = new pokeBall(), this.pokeballtree = new pokeBall(), this.pokeballfour = new pokeBall(), this.pokeballfive = new pokeBall(), this.pokeballsix = new pokeBall() ]
    }

    catch(passedPokemon) {
        let emptyPokeBallIndex = -1;

        // Find the index of the first empty PokeBall
        for (let i = 0; i < this.belt.length; i++) {
            if (this.belt[i].isEmpty()) {
                emptyPokeBallIndex = i;
                break;
            }
        }
    
        // If an empty PokeBall is found, throw the passed Pokemon into it
        if (emptyPokeBallIndex !== -1) {
            this.belt[emptyPokeBallIndex].throw(passedPokemon);
        } else {
            return "no empty Pokeballs";
        }

    }

    getPokemon(nameOfPokemon) { 


        let count = 0 

        if (this.belt[0].isEmpty() === false) {
            count++
            if (this.belt[0].pokemonInBall.name === nameOfPokemon) {
                return this.belt[0].pokemonInBall
            }
        } 
        
        if (this.belt[1].isEmpty() === false) {
            count++
            if (this.belt[1].pokemonInBall.name === nameOfPokemon) {
                return this.belt[1].pokemonInBall
            }

        } 
        
        if (this.belt[2].isEmpty() === false) {
            count++
            if (this.belt[2].pokemonInBall.name === nameOfPokemon) {
                return this.belt[2].pokemonInBall
            }

        }
        
        if (this.belt[3].isEmpty()=== false) {
            count++
            if (this.belt[3].pokemonInBall.name === nameOfPokemon) {
                return this.belt[3].pokemonInBall
            }

        }
        
        if (this.belt[4].isEmpty() === false) {
            count++
            if (this.belt[4].pokemonInBall.name === nameOfPokemon) {
                return this.belt[4].pokemonInBall
            }

        }
        
        if (this.belt[5].isEmpty() === false) {
            count++
            if (this.belt[5].pokemonInBall.name === nameOfPokemon) {
                return this.belt[5].pokemonInBall
            }

        } 

        if (count === 5) {
            return "pokemon not found"
        }

    }

}

class Battle {

    constructor(trainer1, trainer2, pokemon1name, pokemon2name) {
        this.turn = "trainer1"
    }

    fight() {
        const pokemon1 = trainer1.getPokemon(pokemon1name)
        const pokemon2 = trainer2.getPokemon(pokemon2name)

        if(this.turn === "trainer1") {

            pokemon2.takeDamage(pokemon1.useMove())

            if (pokemon2.isEffectiveAgainst(pokemon1.type)) {
                pokemon1.attackDamage = (pokemon1.attackDamage * 0.75)
                console.log("It's not very effective") 
            }

            if (pokemon2.isWeakTo(pokemon1.type)) {
                pokemon1.attackDamage = (pokemon1.attackDamage * 1.25)
                console.log("It's super effective") 
            }

            if(pokemon2.hasFainted()) {
                console.log(`${pokemon2.name} has Fainted`) 
            }

        } else if (this.turn === "trainer2") {

            pokemon1.takeDamage(pokemon2.useMove())

            if (pokemon1.isEffectiveAgainst(pokemon2.type)) {
                pokemon2.attackDamage = (pokemon2.attackDamage * 0.75)
            }

            if (pokemon1.isWeakTo(pokemon2.type)) {
                pokemon2.attackDamage = (pokemon2.attackDamage * 1.25)
            }

            if(pokemon1.hasFainted()) {
                console.log(`${pokemon1.name} has Fainted`) 
            }
            
        }

    }

}

//export an object of all the classes

module.exports = {Pokemon, Fire, Grass, Water, Normal, Charmander, Rattata, Squirtle, Bulbasaur, pokeBall, Trainer, Battle}