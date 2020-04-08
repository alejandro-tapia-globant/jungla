import { AnimalFactory, defaultAnimalOptions } from './AnimalFactory'

jest.mock('./utils.ts', () => {
  return {
    BASE_ENERGY: 0,
    say: jest.fn(),
  }
})

describe('Animal Factory Test suite', () => {
  let snake = AnimalFactory('SNAKE');
  
  beforeEach(() => {
    snake = AnimalFactory('SNAKE');
  })

  it('Animal should be able to sleep and increase energy', () => {
    snake.sleep()
    expect(snake.getEnergy()).toBe(defaultAnimalOptions.sleep_bonus)
  })
  it('Animal should be able to eat and increase energy', () => {
    snake.eat('GRAIN')
    expect(snake.getEnergy()).toBe(defaultAnimalOptions.eat_bonus)
  })
  it('Animal should be able to make sound and lose energy', () => {
    snake.setEnergy(10)
    snake.makeSound();
    expect(snake.getEnergy()).toBe(7)
  })
  afterAll(() => {
    jest.clearAllMocks();
  })
})