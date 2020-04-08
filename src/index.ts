import { AnimalFactory, defaultAnimalOptions } from "./AnimalFactory";
import { IAnimal } from "./types";
import { MonkeyFactory } from './MonkeyFactory'
import { TigerFactory } from './TigerFactory'
import { JungleFactory } from './Jungle';
declare global {
  interface Window { Jungle: any; }
}

window.Jungle = window.Jungle || {};
const snake = AnimalFactory("SNAKE");

const tiger = TigerFactory("Tigger 1");
const monkey = MonkeyFactory('Monkey 1');
const animals: IAnimal[] = [monkey, tiger, snake];


window.Jungle = JungleFactory(animals);
