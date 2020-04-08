
import { AnimalFactory, defaultAnimalOptions } from './AnimalFactory'
import { MonkeyFactory } from './MonkeyFactory';
import { say } from './utils';

jest.mock('./utils.ts', () => {
  return {
    BASE_ENERGY: 10,
    say: jest.fn(),
  }
})

describe('Monkey Factory Test suite', () => {
  let monkey = MonkeyFactory('Monkey 1');
  const dog = AnimalFactory('Dog')
  beforeEach(() => {
    monkey = MonkeyFactory('Monkey 1');
  })
  it('Monkeys gain 2 energy from eating', () => {
    monkey.eat("GRAIN")
    expect(monkey.getEnergy()).toBe(12)
  })
  it('Monkeys lose 4 energy from making sound', () => {
    monkey.makeSound()
    expect(monkey.getEnergy()).toBe(6)
  })
  it('Monkeys should be able to sleep and increase energy', () => {
    monkey.setEnergy(0)
    monkey.sleep()
    expect(monkey.getEnergy()).toBe(defaultAnimalOptions.sleep_bonus)
  })
  it('Only Monkeys can play', () => {
    // @ts-ignore:
    expect(dog.play).toBeUndefined()
    expect(monkey.play).toBeDefined()
  })
  it("Monkeys say 'Oooo Oooo' when playing", () => {
    monkey.play()
    expect(say).toHaveBeenLastCalledWith("Oooo Oooo", "Monkey 1")
  })
  it("Monkeys say 'Im too tired!' when can't play anymore", () => {
    monkey.setEnergy(0)
    monkey.play()
    expect(say).toHaveBeenLastCalledWith("Im too tired!", "Monkey 1", "error")
  })
  afterAll(() => {
    jest.clearAllMocks();
  })
})