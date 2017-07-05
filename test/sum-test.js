const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should return one number as a result', function(){
      var testAns = sum(1,5,6,8)
      testAns.should.have.lengthOf(1);
      expect(sum(1,3)).to.be.a('number');
      expect(sum(1,3)).to.equal(4);
    });

    it('Should add numbers', function(){
      assert.equal(sum(1,2,3),6);
      assert.equal(sum(3,-1,2),4);
      assert.equal(sum(0,3,4),7);
    })

    it('Should return "error: invalid character" if you pass in letters', function(){
      expect(sum(1,'g')).to.equal('error: invalid character');
    })


});
