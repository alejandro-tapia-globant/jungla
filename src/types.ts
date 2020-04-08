export type Food = "FISH" | "GRAIN" | "MEAT";

export interface IAnimalOptions {
  sound_cost: number;
  eat_bonus: number;
  sleep_bonus: number;
  sound_description: string;
  supported_foods: Array<Food>;
}

export interface IAnimal {
  setEnergy: (newEnergy: number) => number;
  getEnergy: () => number;
  getAnimalType: () => string;
  setAnimalType: (species: string) => void;
  sleep: () => void;
  eat: (food?: Food) => number;
  makeSound: () => string;
  say: (message: string, species:string, error?: string) => void;
}
export interface IMonkey extends IAnimal {
  play: () => number;
}

export interface IJungle {
  animals: {
    tigers: IAnimal[];
    monkeys: IMonkey[];
    snakes: IAnimal[];
  };
  foods: {
    GRAIN: Food;
    FISH: Food;
    MEAT: Food;
  }
  soundOff: () => void;
  random: () => void;
}