import { JungleFactory } from './Jungle'

jest.mock('./utils.ts', () => {
  return {
    BASE_ENERGY: 0,
    say: jest.fn(),
  }
})



describe('Jungle Test suite', () => {
  it('Jungle should load wo errors', () => {
    const Jungle = JungleFactory([])
    expect(Jungle).toBeTruthy()
    expect(Jungle.animals).toHaveLength(0)
  })
})