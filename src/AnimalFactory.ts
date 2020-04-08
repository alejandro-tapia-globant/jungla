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
  animalName: string,
  animalOptions: IAnimalOptions = defaultAnimalOptions
): IAnimal => {
  let energy = BASE_ENERGY;
  let animalType = 'SNAKE'
  const setEnergy = (newEnergy: number, tell: boolean = false): number => {
    if (!newEnergy && newEnergy !== 0) return energy;
    energy = newEnergy;
    if (tell) {
      say(`I have ${energy} energy units left`, animalName);
    }
    return energy;
  };

  return {
    setEnergy,
    getEnergy: () => energy,
    getAnimalType: () => animalType,
    setAnimalType: (newAnimalType:string) => {animalType = newAnimalType},
    sleep: () => setEnergy(energy + Math.abs(animalOptions.sleep_bonus)),
    eat: () => setEnergy(energy + animalOptions.eat_bonus),
    makeSound: () => {
      if (energy < Math.abs(animalOptions.sound_cost)) {
        say("Im too tired!", animalName, "error");
        return 0;
      }
      say(animalOptions.sound_description, animalName);
      setEnergy(energy - Math.abs(animalOptions.sound_cost), true);
      return animalOptions.sound_description;
    },
    say,
  } as IAnimal;
};
