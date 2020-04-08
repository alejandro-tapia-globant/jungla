import { AnimalFactory, defaultAnimalOptions } from "./AnimalFactory";
import { IAnimal } from "./types";
import { getRandomInt } from "./utils";

const snake = AnimalFactory("SNAKE");

const tiger = AnimalFactory("TIGER", {
  ...defaultAnimalOptions,
  sleep_bonus: 5,
  supported_foods: ["FISH", "MEAT"],
  sound_description: "Grrr!!!"
});
// Extending an Animal
const monkey = AnimalFactory("MONKEY", {
  ...defaultAnimalOptions,
  sound_description: "uuh uuh ahh ahh"
});
monkey.play = () => {
  const playCost = 8;
  const currentEnergy = monkey.getEnergy();
  if (currentEnergy < playCost) {
    monkey.say("Im too tired!", "error");
    return 0;
  }
  monkey.say("Oooo Oooo");
  return monkey.setEnergy(currentEnergy - playCost);
};

const animals: IAnimal[] = [monkey, tiger, snake];

const Jungle = {
  animals,
  soundOff: () => {
    animals.forEach((animal: IAnimal) => animal.makeSound());
  },
  random: () => {
    animals.forEach((animal: IAnimal) => {
      animal.setEnergy(20);
      const methods = Object.keys(animal);
      const randomIndex = getRandomInt(0, methods.length - 1);
      console.log(animal.getAnimalType());
      console.log("Executing " + methods[randomIndex]);
      animal[methods[randomIndex]]();
    });
  }
};

window.Jungle = Jungle;
