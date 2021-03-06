const {
  Pokemon,
  FirePokemon,
  GrassPokemon,
  WaterPokemon,
  Trainer,
  Battle
} = require('../index');

describe('Pokemon', () => {
  it('returns an object', () => {
    const pokemon = new Pokemon();
    expect(pokemon instanceof Pokemon).toBe(true);
  });

  it('returns an object with name initialised', () => {
    const name = 'Pikachu';
    const pokemon = new Pokemon(name);

    expect(pokemon.name).toBe(name);
  });

  it('returns an object with hit points initialised', () => {
    const hitPoints = 4;

    const pokemon = new Pokemon('Pikachu', hitPoints);

    expect(pokemon.hitPoints).toBe(hitPoints);
  });

  it('returns an object with attack damage initialised', () => {
    const hitPoints = 4;
    const attackDamage = 8;
    const pokemon = new Pokemon('Pikachu', hitPoints, attackDamage);

    expect(pokemon.attackDamage).toBe(attackDamage);
  });

  it('returns an object with sound initialised', () => {
    const hitPoints = 4;
    const sound = 'pika';
    const attackDamage = 8;
    const pokemon = new Pokemon('Pikachu', hitPoints, attackDamage, sound);

    expect(pokemon.sound).toBe(sound);
  });

  it('returns an object with move initialised', () => {
    const hitPoints = 4;
    const sound = 'pika';
    const attackDamage = 8;
    const move = 'lightning';
    const pokemon = new Pokemon(
      'Pikachu',
      hitPoints,
      attackDamage,
      sound,
      move
    );

    expect(pokemon.move).toBe(move);
  });

  it('should return object with type as default value normal and no strength or weaknesses when passed no argument', () => {
    const pokemon = new Pokemon();

    expect(pokemon.type).toBe('normal');
    expect(pokemon.strength).toBe(undefined);
    expect(pokemon.weakness).toBe(undefined);
  });

  describe('FirePokemon', () => {
    it('should return object containing fire type when initiating a fire pokemon', () => {
      const pokemon = new FirePokemon();

      expect(pokemon.type).toBe('fire');
      expect(pokemon.strength).toBe('grass');
      expect(pokemon.weakness).toBe('water');
    });
  });

  describe('GrassPokemon', () => {
    it('should return object containing grass type when initiating a grass pokemon', () => {
      const pokemon = new GrassPokemon();

      expect(pokemon.type).toBe('grass');
      expect(pokemon.strength).toBe('water');
      expect(pokemon.weakness).toBe('fire');
    });
  });

  describe('WaterPokemon', () => {
    it('should return object containing water type when initiating a water pokemon', () => {
      const pokemon = new WaterPokemon();

      expect(pokemon.type).toBe('water');
      expect(pokemon.strength).toBe('fire');
      expect(pokemon.weakness).toBe('grass');
    });
  });
  it('returns sound when talk is invoked', () => {
    const pokemon = new WaterPokemon('Squirtle', 3, 3, 'squirtle', 'torrent');

    expect(pokemon.talk()).toBe('squirtle');
  });

  it('returns move when useYourMove is invoked', () => {
    const pokemon = new WaterPokemon('Squirtle', 3, 3, 'squirtle', 'torrent');

    expect(pokemon.useYourMove()).toBe('torrent');
  });
});

describe('Trainer', () => {
  it('creates a trainer with name and their pokemon', () => {
    const theirPokemon = new Pokemon();
    const trainer = new Trainer('Ash', theirPokemon);

    expect(trainer instanceof Trainer).toBe(true);
  });

  it('returns an updated array with new pokemon when catch is invoked', () => {
    const trainer = new Trainer('Ash');
    expect(trainer.theirPokemon).toEqual([]);
    trainer.catch('Squirtle', 3, 3, 'squirtle', 'torrent', 'water');
    expect(trainer.theirPokemon).toEqual([
      {
        name: 'Squirtle',
        hitPoints: 3,
        attackDamage: 3,
        sound: 'squirtle',
        move: 'torrent',
        type: 'water',
        strength: 'fire',
        weakness: 'grass'
      }
    ]);
  });
});

describe('Battle', () => {
  test('should calls the trainers with their chosen pokemon to battle', () => {
    const ash = new Trainer('Ash');
    ash.catch('Squirtle', 3, 3, 'squirtle', 'torrent', 'water');
    ash.catch('Bulbasaur', 3, 8, 'saur', 'overgrow', 'grass');
    const ashChosenPoke = ash.theirPokemon[1];
    expect(ashChosenPoke.name).toBe('Bulbasaur');

    const red = new Trainer('Red');
    red.catch('Bulbasaur', 3, 8, 'saur', 'overgrow', 'grass');
    red.catch('Charmeleon', 4, 6, 'cry', 'blaze', 'fire');
    const redChosenPoke = red.theirPokemon[1];

    const battle = new Battle(ash, ashChosenPoke, red, redChosenPoke);
    expect(Object.keys(battle).length).toBe(4);
  });

  test('should assign player1 to be attacker and player2 to be defender for round 1. It should also deduct the attackDamage of the attacking pokemon from hitPoints of the defending pokemon.', () => {
    const ash = new Trainer('Ash');
    ash.catch('Squirtle', 3, 3, 'squirtle', 'torrent');
    ash.catch('Bulbasaur', 3, 8, 'saur', 'overgrow');
    const ashChosenPoke = ash.theirPokemon[1];

    const red = new Trainer('Red');
    red.catch('Bulbasaur', 3, 8, 'saur', 'overgrow');
    red.catch('Charmeleon', 24, 6, 'cry', 'blaze');
    const redChosenPoke = red.theirPokemon[1];

    const battle = new Battle(ash, ashChosenPoke, red, redChosenPoke);

    const round1 = battle.fight(1);
    const round2 = battle.fight(2);

    expect(round1).toBe(
      "Bulbasaur uses overgrow on Charmeleon. Charmeleon's remaining hitpoints: 16. Charmeleon survives ready for another round."
    );
    expect(round2).toBe(
      "Charmeleon uses blaze on Bulbasaur. Bulbasaur's remaining hitpoints: -3. Bulbasaur fainted, Red wins."
    );
  });

  test('if defender strength type is equal to attacking type then damage to the defender is x0.75', () => {
    const ash = new Trainer('Ash');
    ash.catch('Squirtle', 3, 3, 'squirtle', 'torrent', 'water');
    ash.catch('Bulbasaur', 3, 8, 'saur', 'overgrow', 'grass');
    const ashChosenPoke = ash.theirPokemon[1];

    const red = new Trainer('Red');
    red.catch('Bulbasaur', 3, 8, 'saur', 'overgrow', 'grass');
    red.catch('Charmeleon', 4, 6, 'cry', 'blaze', 'fire');
    const redChosenPoke = red.theirPokemon[1];

    const battle = new Battle(ash, ashChosenPoke, red, redChosenPoke);

    const round1 = battle.fight(1);

    expect(round1).toBe(
      "Bulbasaur uses overgrow on Charmeleon. Charmeleon minimises damage. Charmeleon's remaining hitpoints: -2. Charmeleon fainted, Ash wins."
    );
  });

  test("if defender is weak against the attacker's type then damage to the defender is x1.25", () => {
    const ash = new Trainer('Ash');
    ash.catch('Squirtle', 3, 3, 'squirtle', 'torrent', 'water');
    ash.catch('Bulbasaur', 3, 8, 'saur', 'overgrow', 'grass');
    const ashChosenPoke = ash.theirPokemon[1];

    const red = new Trainer('Red');
    red.catch('Bulbasaur', 3, 8, 'saur', 'overgrow', 'grass');
    red.catch('Squirtle', 4, 3, 'squirtle', 'torrent', 'water');
    const redChosenPoke = red.theirPokemon[1];

    const battle = new Battle(ash, ashChosenPoke, red, redChosenPoke);

    const round1 = battle.fight(1);

    expect(round1).toBe(
      "Bulbasaur uses overgrow on Squirtle. Bulbasaur maximises damage. Squirtle's remaining hitpoints: -6. Squirtle fainted, Ash wins."
    );
  });
});

// water   name: "Squirtle",
//         hitPoints: 3,
//         attackDamage: 3,
//         sound: "squirtle",
//         move: "torrent",
//         type: "water",
//         strength: "fire",
//         weakness: "grass",
