import { AnimalFactory, defaultAnimalOptions } from "./AnimalFactory";
import { IMonkey, IAnimal } from "./types";
// Extending an Animal
export const MonkeyFactory = (monkeyName: string = "MONKEY"): IMonkey => {
  const monkey: any = AnimalFactory(monkeyName, {
    ...defaultAnimalOptions,
    sound_description: "uuh uuh ahh ahh",
    eat_bonus: 2,
    sound_cost: 4,
  });
  monkey.play = () => {
    const playCost = 8;
    const currentEnergy = monkey.getEnergy();
    if (currentEnergy < playCost) {
      monkey.say("Im too tired!", monkeyName, "error");
      return 0;
    }
    monkey.say("Oooo Oooo", monkeyName);
    return monkey.setEnergy(currentEnergy - playCost);
  };
  monkey.setAnimalType('MONKEY');
  return monkey as IMonkey;
};
