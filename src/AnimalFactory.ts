import { IAnimalOptions, IAnimal, Food } from "./types";
import { BASE_ENERGY, say } from './utils'

export const defaultAnimalOptions: IAnimalOptions = {
  sound_cost: 3,
  eat_bonus: 5,
  sleep_bonus: 10,
  sound_description: "Generic Animal Sound!!!",
  supported_foods: ["FISH", "GRAIN", "MEAT"],
};

export const AnimalFactory = (
  species: string,
  animalOptions: IAnimalOptions = defaultAnimalOptions
): IAnimal => {
  let energy = BASE_ENERGY;
  
  const setEnergy = (newEnergy: number, tell: boolean = false) => {
    if (!newEnergy && newEnergy !== 0) return;
    energy = newEnergy;
    if (tell) {
      say(`I have ${energy} energy units left`, species);
    }
  };

  return {
    setEnergy,
    getEnergy: () => energy,
    getAnimalType: () => species,
    sleep: () => setEnergy(energy + animalOptions.sleep_bonus),
    eat: (food: Food) => {
      if (!food) return;
      const canEatFood = animalOptions.supported_foods.includes(food);
      if (!canEatFood) {
        // throw new Error(`I CAN'T EAT ${food}`);
        say(`I can't eat ${food}`, species, "error");
        return;
      }
      return setEnergy(energy + animalOptions.eat_bonus);
    },
    makeSound: () => {
      if (energy < animalOptions.sound_cost) {
        say("Im too tired!", species, "error");
        return 0;
      }
      say(animalOptions.sound_description, species);
      setEnergy(energy - animalOptions.sound_cost, true);
      return animalOptions.sound_description;
    },
    say,
  } as IAnimal;
};
