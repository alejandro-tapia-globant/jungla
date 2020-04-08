import { AnimalFactory, defaultAnimalOptions } from "./AnimalFactory";
import { IAnimal } from "./types";
import { MonkeyFactory } from './MonkeyFactory'
import { JungleFactory } from './Jungle';
declare global {
  interface Window { Jungle: any; }
}

window.Jungle = window.Jungle || {};
const snake = AnimalFactory("SNAKE");

const tiger = AnimalFactory("TIGER", {
  ...defaultAnimalOptions,
  sleep_bonus: 5,
  supported_foods: ["FISH", "MEAT"],
  sound_description: "Grrr!!!"
});

const monkey = MonkeyFactory('Monkey 1');
const animals: IAnimal[] = [monkey, tiger, snake];


window.Jungle = JungleFactory(animals);
