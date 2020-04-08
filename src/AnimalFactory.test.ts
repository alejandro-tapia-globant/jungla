import { AnimalFactory, defaultAnimalOptions } from './AnimalFactory'

jest.mock('./utils.ts', () => {
  return {
    BASE_ENERGY: 0,
    say: jest.fn(),
  }
})



describe('Animal Factory Test suite', () => {
  it('Animal should be able to eat, sleep and make sound', () => {
    const snake = AnimalFactory('SNAKE')
    snake.sleep()
    expect(snake.getEnergy()).toBe(defaultAnimalOptions.sleep_bonus)
  })
  it('Animal should be able to eat, sleep and make sound', () => {
    const snake = AnimalFactory('SNAKE')
    snake.eat('GRAIN')
    expect(snake.getEnergy()).toBe(defaultAnimalOptions.eat_bonus)
  })
  it('Animal should be able to make sound', () => {
    const snake = AnimalFactory('SNAKE')
    snake.makeSound();
    expect(snake.getEnergy()).toBe(0)
    expect(snake.say).toHaveBeenCalledWith("Im too tired!", "SNAKE", "error")
  })
})