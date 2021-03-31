class Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.sound = sound;
    this.move = move;
    this.type = "normal";
  }

  talk() {
    return this.sound;
  }

  useYourMove() {
    return this.move;
  }
}

class FirePokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move) {
    super(name, hitPoints, attackDamage, sound, move);
    this.type = "fire";
    this.strength = "grass";
    this.weakness = "water";
  }
}
class GrassPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move) {
    super(name, hitPoints, attackDamage, sound, move);
    this.type = "grass";
    this.strength = "water";
    this.weakness = "fire";
  }
}
class WaterPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move) {
    super(name, hitPoints, attackDamage, sound, move);
    this.type = "water";
    this.strength = "fire";
    this.weakness = "grass";
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
    this.theirPokemon = [];
  }

  catch(name, hitPoints, attackDamage, sound, move, type) {
    let newPoke;
    switch (type) {
      case "fire":
        newPoke = new FirePokemon(name, hitPoints, attackDamage, sound, move);
        break;
      case "grass":
        newPoke = new GrassPokemon(name, hitPoints, attackDamage, sound, move);
        break;
      case "water":
        newPoke = new WaterPokemon(name, hitPoints, attackDamage, sound, move);
        break;
      default:
        newPoke = new Pokemon(name, hitPoints, attackDamage, sound, move);
        break;
    }
    this.theirPokemon.push(newPoke);
    return this.theirPokemon;
  }
}

class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }
}

module.exports = {
  Pokemon,
  FirePokemon,
  GrassPokemon,
  WaterPokemon,
  Trainer,
  Battle,
};
