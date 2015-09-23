var chai = require('chai')

var expect = chai.expect

describe('math module', function () {
  describe('add', function () {
    it('should correctly add positive numbers', function () {
      var result = 3 + 3

      expect(result).to.equal(6)
    })
  })
})
