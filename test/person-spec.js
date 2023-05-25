// Your code here
const chai = require('chai');
const expect = chai.expect;

const Person = require('../problems/person');

describe('Person', function(){
    describe('constructor', function(){
        it('should have name & age property', function(){
            const name = "john";
            const age = 20;
            const result = new Person(name, age);
            expect(result).to.have.property("name");
            expect(result).to.have.property("age");
        })
        it('should set name & age property correctly', function(){
            const name = "john";
            const age = 20;
            const result = new Person(name, age);
            expect(result.name).to.equal("john");
            expect(result.age).to.equal(20);
        })
})

})
