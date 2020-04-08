import { AnimalFactory } from "./AnimalFactory";
import { MonkeyFactory } from './MonkeyFactory'
import { TigerFactory } from './TigerFactory'
import { JungleFactory } from './JungleFactory'
import { say } from './utils';

jest.mock('./utils.ts', () => {
  return {
    BASE_ENERGY: 10,
    say: jest.fn(),
  }
})

describe('Jungle Test suite', () => {

  const snake = AnimalFactory("SNAKE");
  const tiger = TigerFactory("Tigger 1");
  const monkey = MonkeyFactory('Monkey 1');

  let Jungle = JungleFactory([snake, tiger, monkey])
  beforeEach(() => {
    Jungle = JungleFactory([snake, tiger, monkey])
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
  afterAll(() => {
    jest.clearAllMocks();
  })
})