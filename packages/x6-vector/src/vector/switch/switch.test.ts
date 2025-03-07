import { SVG } from '../svg/svg'
import { Switch } from './switch'

describe('Switch', () => {
  describe('constructor()', () => {
    it('should create an instance with given attributes', () => {
      expect(Switch.create({ id: 'foo' }).id()).toBe('foo')
    })

    it('should create an instance from container', () => {
      const svg = new SVG()
      expect(svg.switch()).toBeInstanceOf(Switch)
    })

    it('should create an instance from container with given attributes', () => {
      const svg = new SVG()
      const elem = svg.switch({ id: 'foo' })
      expect(elem.id()).toEqual('foo')
    })
  })
})
