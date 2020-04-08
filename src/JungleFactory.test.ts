import { AnimalFactory } from "./AnimalFactory";
import { MonkeyFactory } from './MonkeyFactory'
import { TigerFactory } from './TigerFactory'
import { JungleFactory } from './JungleFactory'
import { say, getRandomInt } from './utils';

jest.mock('./utils.ts', () => {
  return {
    BASE_ENERGY: 10,
    say: jest.fn(),
    getRandomInt: (min: number, max: number) => {
      // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
  }
})

describe('Jungle Test suite', () => {

  let snake = AnimalFactory("SNAKE");
  let tiger = TigerFactory("Tigger 1");
  let monkey = MonkeyFactory('Monkey 1');
  let Jungle = JungleFactory([snake, tiger, monkey])

  beforeEach(() => {
    Jungle = JungleFactory([snake, tiger, monkey])
    snake = AnimalFactory("SNAKE");
    tiger = TigerFactory("Tigger 1");
    monkey = MonkeyFactory('Monkey 1');
  })
  
  it('Jungle should load wo errors', () => {
    expect(Jungle.animals).toBeTruthy()
    expect(Jungle.animals.tigers).toBeTruthy()
    expect(Jungle.animals.monkeys).toBeTruthy()
    expect(Jungle.animals.snakes).toBeTruthy()
  })
  
  it('Jungle should perform soundOff', () => {
    Jungle.soundOff()
    expect(say).toHaveBeenNthCalledWith(1, "Generic Animal Sound!!!", "SNAKE")
    expect(say).toHaveBeenNthCalledWith(2, "I have 7 energy units left", "SNAKE")
    expect(say).toHaveBeenNthCalledWith(3, "Grrr!!!", "Tigger 1")
    expect(say).toHaveBeenNthCalledWith(4, "I have 7 energy units left", "Tigger 1")
    expect(say).toHaveBeenNthCalledWith(5, "uuh uuh ahh ahh", 'Monkey 1')
    expect(say).toHaveBeenNthCalledWith(6, "I have 6 energy units left", 'Monkey 1')
  })
  it('Tigers cant eat GRAIN', () => {
    Jungle.animals.tigers[0].eat(Jungle.foods.GRAIN);
    expect(say).toHaveBeenLastCalledWith("I can't eat that!", "Tigger 1", "error")
  })
  it('Can randomly invoke animals methods', () => {
    const animals = [snake, tiger, monkey];
    animals.forEach((animal) => {
      const availableMethods = animal.getAvailableMethods()
      availableMethods.forEach((method)=> {
        // @ts-ignore:
        animal[method] = jest.fn()
      })
    })
    Jungle = JungleFactory([snake, tiger, monkey])
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    Jungle.random()
    expect(tiger.eat).toHaveBeenCalled()
    expect(snake.sleep).toHaveBeenCalled()
    expect(monkey.play).toHaveBeenCalled()
  })
  afterAll(() => {
    jest.clearAllMocks();
  })
})