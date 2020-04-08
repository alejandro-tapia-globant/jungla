
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
  it('Tigers get 5 energy from sleeping', () => {
    tiger.sleep()
    expect(tiger.getEnergy()).toBe(5)
  })
  it("Tigers can't eat GRAIN", () => {
    tiger.eat("GRAIN")
    expect(say).toHaveBeenLastCalledWith("I can't eat that!", "Tiger 1", "error")
  })
})