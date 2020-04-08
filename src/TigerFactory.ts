import { AnimalFactory, defaultAnimalOptions } from "./AnimalFactory";
import { IAnimal, Food } from "./types";
// Extending an Animal
export const TigerFactory = (tigerName: string = "tiger"): IAnimal => {
  const supported_foods = ["FISH", "MEAT"];
  const tiger: IAnimal = AnimalFactory(tigerName, {
    ...defaultAnimalOptions,
    sleep_bonus: 5,
    sound_description: "Grrr!!!",
  });
  tiger.eat = (food?: Food) => {
    if (!food) return tiger.getEnergy();
    const canEatFood = supported_foods.includes(food);
    if (!canEatFood) {
      // throw new Error('I can't eat that!');
      tiger.say(`I can't eat that!`, tigerName, "error");
      return tiger.getEnergy();
    }
     return tiger.setEnergy(tiger.getEnergy() + defaultAnimalOptions.eat_bonus);
   }
  return tiger;
};
