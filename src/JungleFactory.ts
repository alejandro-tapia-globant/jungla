import { IAnimal, IJungle, IMonkey } from "./types";
import { getRandomInt } from "./utils";

export const JungleFactory = (animals: IAnimal[]): IJungle => {
  return {
    animals: {
      tigers: animals.filter((animal) => animal.getAnimalType() === "TIGER"),
      monkeys: animals.filter(
        (animal) => animal.getAnimalType() === "MONKEY"
      ) as IMonkey[],
      snakes: animals.filter((animal) => animal.getAnimalType() === "SNAKE"),
    },
    foods: {
      FISH: "FISH",
      GRAIN: "GRAIN",
      MEAT: "MEAT",
    },
    soundOff: () => {
      animals.forEach((animal: IAnimal) => animal.makeSound());
    },
    random: () => {
      animals.forEach((animal: IAnimal) => {
        animal.setEnergy(20);
        const methods = ["sleep", "eat", "makeSound"];
        const randomIndex: number = getRandomInt(0, methods.length - 1);
        const randomMethod = methods[randomIndex] as
          | "sleep"
          | "eat"
          | "makeSound";
        if (randomMethod === "eat") return animal[randomMethod]("FISH");
        animal[randomMethod]();
      });
    },
  };
};
