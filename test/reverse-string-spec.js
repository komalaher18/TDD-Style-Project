// Your code here
const chai = require('chai');
const expect = chai.expect;

const reverseString = require('../problems/reverse-string');

describe('reverseString', function(){
    it('should return a reverse string', function(){
        const input = "fun";
        const expected = "nuf";
        const result = reverseString(input);
        expect(result).to.equal(expected);
    })

})
