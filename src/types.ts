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
  play?: () => number;
  getAnimalType: () => string;
  sleep(): void;
  eat: (food: Food) => number;
  makeSound: () => string;
  say: (message: string, error?: string) => void;
}
