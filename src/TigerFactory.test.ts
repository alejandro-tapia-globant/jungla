
import { AnimalFactory, defaultAnimalOptions } from './AnimalFactory'
import { TigerFactory } from './TigerFactory';
import { say } from './utils';

jest.mock('./utils.ts', () => {
  return {
    BASE_ENERGY: 0,
    say: jest.fn(),
  }
})

describe('tiger Factory Test suite', () => {
  let tiger = TigerFactory('Tiger 1');
  beforeEach(() => {
    tiger = TigerFactory('Tiger 1');
  })
  it('Tiger should be able to eat and increase energy', () => {
    tiger.eat('FISH')
    expect(tiger.getEnergy()).toBe(defaultAnimalOptions.eat_bonus)
  })
  it('Tiger should be able to make sound and lose energy', () => {
    tiger.setEnergy(10)
    tiger.makeSound();
    expect(tiger.getEnergy()).toBe(7)
  })
  it('Tigers get 5 energy from sleeping', () => {
    tiger.sleep()
    expect(tiger.getEnergy()).toBe(5)
  })
  it("Tigers can't eat GRAIN", () => {
    tiger.eat("GRAIN")
    expect(say).toHaveBeenLastCalledWith("I can't eat that!", "Tiger 1", "error")
  })
})