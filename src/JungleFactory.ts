import { IAnimal, IJungle, IMonkey } from "./types";
import { getRandomInt } from "./utils";

export const JungleFactory = (providedAnimals: IAnimal[]): IJungle => {
  const animals = {
    tigers: providedAnimals.filter((animal) => animal.getAnimalType() === "TIGER"),
    monkeys: providedAnimals.filter(
      (animal) => animal.getAnimalType() === "MONKEY"
    ) as IMonkey[],
    snakes: providedAnimals.filter((animal) => animal.getAnimalType() === "SNAKE"),
  };
  return {
    animals,
    foods: {
      FISH: "FISH",
      GRAIN: "GRAIN",
      MEAT: "MEAT",
    },
    soundOff: () => {
      const { tigers, monkeys, snakes} = animals;
      snakes.forEach((animal: IAnimal) => animal.makeSound());
      tigers.forEach((animal: IAnimal) => animal.makeSound());
      monkeys.forEach((animal: IAnimal) => animal.makeSound());
    },
    random: () => {
      const { tigers, monkeys, snakes} = animals;
      [...tigers, ...monkeys, ...snakes].forEach((animal: IAnimal) => {
        animal.setEnergy(20);
        const methods = animal.getAvailableMethods();
        const randomIndex: number = getRandomInt(0, methods.length);
        const randomMethod = methods[randomIndex] as
          | "sleep"
          | "eat"
          | "makeSound";
        // console.info(animal.getAnimalType() + ' Executing: ' + randomMethod)
        if (randomMethod === "eat") return animal[randomMethod]("FISH");
        animal[randomMethod]();
      });
    },
  };
};
