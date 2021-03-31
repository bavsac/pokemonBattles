const {
  Pokemon,
  FirePokemon,
  GrassPokemon,
  WaterPokemon,
  Trainer,
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

  it("returns new pokemon when catch is invoked", () => {
    const theirPokemon = new Pokemon();
    const trainer = new Trainer("Ash", theirPokemon);

    expect(trainer.catch() instanceof Pokemon).toBe(true);
  });
});
