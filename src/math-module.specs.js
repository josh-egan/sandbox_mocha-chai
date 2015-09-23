var chai = require('chai')
var mathModule = require('./math-module')

var expect = chai.expect

describe('math module', function () {
  describe('add', function () {
    it('should correctly add positive numbers', function () {
      var result = mathModule.add(3, 2)

      expect(result).to.equal(5)
    })
  })
})
