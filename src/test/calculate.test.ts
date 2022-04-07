import { sum } from '../calculate/index'

test('adds 1 + 2 to equal 3', () => {
  sum(1, 2).then((total) => {
    expect(total).toBe(3)
  })
})
