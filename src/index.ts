import { AnimalFactory } from "./AnimalFactory";
import { IAnimal } from "./types";
import { MonkeyFactory } from './MonkeyFactory'
import { TigerFactory } from './TigerFactory'
import { JungleFactory } from './JungleFactory';
declare global {
  interface Window { Jungle: any; }
}

const snake = AnimalFactory("SNAKE");
const tiger = TigerFactory("Tigger 1");
const monkey = MonkeyFactory('Monkey 1');
const animals: IAnimal[] = [monkey, tiger, snake];
const Jungle = JungleFactory(animals);

window.Jungle = Jungle;

export default Jungle;
