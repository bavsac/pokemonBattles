class Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.sound = sound;
    this.move = move;
    this.type = 'normal';
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
    this.type = 'fire';
    this.strength = 'grass';
    this.weakness = 'water';
  }
}
class GrassPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move) {
    super(name, hitPoints, attackDamage, sound, move);
    this.type = 'grass';
    this.strength = 'water';
    this.weakness = 'fire';
  }
}
class WaterPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, sound, move) {
    super(name, hitPoints, attackDamage, sound, move);
    this.type = 'water';
    this.strength = 'fire';
    this.weakness = 'grass';
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
      case 'fire':
        newPoke = new FirePokemon(name, hitPoints, attackDamage, sound, move);
        break;
      case 'grass':
        newPoke = new GrassPokemon(name, hitPoints, attackDamage, sound, move);
        break;
      case 'water':
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
  constructor(trainer1, trainer1Pokemon, trainer2, trainer2Pokemon) {
    this.player1 = trainer1;
    this.player2 = trainer2;
    this.player1Poke = trainer1Pokemon;
    this.player2Poke = trainer2Pokemon;
  }

  fight(roundNumber) {
    let attacker, defender, attackTrainer, defenceTrainer;

    if (roundNumber % 2 !== 0) {
      attacker = this.player1Poke;
      attackTrainer = this.player1;
      defender = this.player2Poke;
      defenceTrainer = this.player2;
    } else {
      attacker = this.player2Poke;
      attackTrainer = this.player2;
      defender = this.player1Poke;
      defenceTrainer = this.player1;
    }
    let attackMessage = `${attacker.name} uses ${attacker.move} on ${defender.name}. `;

    if (defender.strength === attacker.type) {
      defender.hitPoints = defender.hitPoints - 0.75 * attacker.attackDamage;
      attackMessage += `${defender.name} minimises damage. `;
    } else if (defender.weakness === attacker.type) {
      defender.hitPoints = defender.hitPoints - 1.25 * attacker.attackDamage;
      attackMessage += `${attacker.name} maximises damage. `;
    } else {
      defender.hitPoints = defender.hitPoints - attacker.attackDamage;
    }

    attackMessage += `${defender.name}'s remaining hitpoints: ${defender.hitPoints}. `;

    if (defender.hitPoints <= 0) {
      attackMessage += `${defender.name} fainted, ${attackTrainer.name} wins.`;
    } else {
      attackMessage += `${defender.name} survives ready for another round.`;
    }

    return attackMessage;

    // an attack msg needed
  }
}

module.exports = {
  Pokemon,
  FirePokemon,
  GrassPokemon,
  WaterPokemon,
  Trainer,
  Battle
};
