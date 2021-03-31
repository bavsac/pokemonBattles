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
  constructor(name, theirPokemon) {
    this.name = name;
    this.theirPokemon = theirPokemon;
  }

  catch() {
    return new Pokemon();
  }
}

module.exports = { Pokemon, FirePokemon, GrassPokemon, WaterPokemon, Trainer };
