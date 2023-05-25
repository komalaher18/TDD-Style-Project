// Your code here
const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe("returnsThree", function () {
    it("should return 3", function () {
        const result = returnsThree();
        expect(result).to.equal(3);
    });
});

describe("reciprocal", function () {
    it("should return the reciprocal of the given argument", function () {
        const inputValue = 5;
        const expectedReciprocal = 1 / inputValue;
        const result = reciprocal(inputValue);
        expect(result).to.equal(expectedReciprocal);
    });

    it("should throw a RangeError if value is greater than 100000 or less than 1", function () {
        const input1 = 0;
        const input2 = 1000001;
        const invoke1 = () => reciprocal(input1);
        const invoke2 = () => reciprocal(input2);

        expect(invoke1).to.throw(RangeError, "Input value must be between 1 and 1000000");
        expect(invoke2).to.throw(RangeError, "Input value must be between 1 and 1000000");

        // expect(reciprocal.bind(null, input1)).to.throw(RangeError, "Input value must be between 1 and 1000000");
        // expect(reciprocal.bind(null, input2)).to.throw(RangeError, "Input value must be between 1 and 1000000");
    });

})
