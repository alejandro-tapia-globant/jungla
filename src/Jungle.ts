import { IAnimal } from './types';
import { getRandomInt } from "./utils";

export const JungleFactory = (animals: IAnimal[]) => {
  return {
    animals,
    soundOff: () => {
      animals.forEach((animal: IAnimal) => animal.makeSound());
    },
    random: () => {
      animals.forEach((animal: IAnimal) => {
        animal.setEnergy(20);
        const methods = ['sleep', 'eat', 'makeSound'];
        const randomIndex: number = getRandomInt(0, methods.length - 1);
        const randomMethod = methods[randomIndex] as 'sleep'| 'eat'| 'makeSound'
        if (randomMethod === 'eat') return animal[randomMethod]('FISH');
        animal[randomMethod]();
      });
    }
  };
}