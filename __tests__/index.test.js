const {
  Pokemon,
  FirePokemon,
  GrassPokemon,
  WaterPokemon,
  Trainer,
  Battle,
} = require("../index");

describe("Pokemon", () => {
  it("returns an object", () => {
    const pokemon = new Pokemon();
    expect(pokemon instanceof Pokemon).toBe(true);
  });

  it("returns an object with name initialised", () => {
    const name = "Pikachu";
    const pokemon = new Pokemon(name);

    expect(pokemon.name).toBe(name);
  });

  it("returns an object with hit points initialised", () => {
    const hitPoints = 4;

    const pokemon = new Pokemon("Pikachu", hitPoints);

    expect(pokemon.hitPoints).toBe(hitPoints);
  });

  it("returns an object with attack damage initialised", () => {
    const hitPoints = 4;
    const attackDamage = 8;
    const pokemon = new Pokemon("Pikachu", hitPoints, attackDamage);

    expect(pokemon.attackDamage).toBe(attackDamage);
  });

  it("returns an object with sound initialised", () => {
    const hitPoints = 4;
    const sound = "pika";
    const attackDamage = 8;
    const pokemon = new Pokemon("Pikachu", hitPoints, attackDamage, sound);

    expect(pokemon.sound).toBe(sound);
  });

  it("returns an object with move initialised", () => {
    const hitPoints = 4;
    const sound = "pika";
    const attackDamage = 8;
    const move = "lightning";
    const pokemon = new Pokemon(
      "Pikachu",
      hitPoints,
      attackDamage,
      sound,
      move
    );

    expect(pokemon.move).toBe(move);
  });

  it("should return object with type as default value normal and no strength or weaknesses when passed no argument", () => {
    const pokemon = new Pokemon();

    expect(pokemon.type).toBe("normal");
  });

  describe("FirePokemon", () => {
    it("should return object containing fire type when initiating a fire pokemon", () => {
      const pokemon = new FirePokemon();

      expect(pokemon.type).toBe("fire");
    });
  });

  describe("GrassPokemon", () => {
    it("should return object containing grass type when initiating a grass pokemon", () => {
      const pokemon = new GrassPokemon();

      expect(pokemon.type).toBe("grass");
    });
  });

  describe("WaterPokemon", () => {
    it("should return object containing water type when initiating a water pokemon", () => {
      const pokemon = new WaterPokemon();

      expect(pokemon.type).toBe("water");
    });
  });
  it("returns sound when talk is invoked", () => {
    const pokemon = new WaterPokemon("Squirtle", 3, 3, "squirtle", "torrent");

    expect(pokemon.talk()).toBe(pokemon.sound);
  });

  it("returns move when useYourMove is invoked", () => {
    const pokemon = new WaterPokemon("Squirtle", 3, 3, "squirtle", "torrent");

    expect(pokemon.useYourMove()).toBe(pokemon.move);
  });
});

describe("Trainer", () => {
  it("creates a trainer with name and their pokemon", () => {
    const theirPokemon = new Pokemon();
    const trainer = new Trainer("Ash", theirPokemon);

    expect(trainer instanceof Trainer).toBe(true);
  });

  it("returns an updated array with new pokemon when catch is invoked", () => {
    const trainer = new Trainer("Ash");
    expect(trainer.theirPokemon).toEqual([]);
    trainer.catch("Squirtle", 3, 3, "squirtle", "torrent", "water");
    expect(trainer.theirPokemon).toEqual([
      {
        name: "Squirtle",
        hitPoints: 3,
        attackDamage: 3,
        sound: "squirtle",
        move: "torrent",
        type: "water",
        strength: "fire",
        weakness: "grass",
      },
    ]);
  });
});

describe("Battle", () => {
  test("should calls the trainers with their chosen pokemon to battle", () => {
    const ash = new Trainer("Ash");
    ash.catch("Squirtle", 3, 3, "squirtle", "torrent", "water");
    ash.catch("Bulbasaur", 3, 8, "saur", "overgrow", "grass");
    const ashChosenPoke = ash.theirPokemon[1].name;
    expect(ashChosenPoke).toBe("Bulbasaur");

    const red = new Trainer("Red");
    red.catch("Bulbasaur", 3, 8, "saur", "overgrow", "grass");
    red.catch("Charmeleon", 4, 6, "cry", "blaze", "fire");
    const redChosenPoke = red.theirPokemon[1].name;

    const battle = new Battle(ash, ashChosenPoke, red, redChosenPoke);
  });
  test("should ", () => {});
});

// water   name: "Squirtle",
//         hitPoints: 3,
//         attackDamage: 3,
//         sound: "squirtle",
//         move: "torrent",
//         type: "water",
//         strength: "fire",
//         weakness: "grass",
