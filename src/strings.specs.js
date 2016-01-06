require('../test/unit-tests-helper')

var strings = require('./strings')

describe('strings', function() {
  beforeEach(function() {
    console.log('suite level beforeEach')
  })

  afterEach(function() {
    console.log('suite level afterEach');
  })

  context('#concat', function() {
    beforeEach(function() {
      console.log('context level beforeEach');
    })

    afterEach(function() {
      console.log('context level afterEach');
    })

    it('should concatenate two strings', function() {
      console.log('in test');
      expect(strings.concat("a", "b")).to.equal("ab")
    })

    it('should concatenate two empty strings', function() {
      console.log('in test');
      expect(strings.concat("", "")).to.equal("")
    })
  })
})
