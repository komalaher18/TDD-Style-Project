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

    describe('sayHello', function() {
        it("should return the name and greeting message", function() {
            const name = "john";
            const age = 20;
            const person = new Person(name, age);
            const result = person.sayHello();
            expect(result).to.equal("Hello john");
        });
    });

    describe('visit(otherPerson)', function(){
        it('should return the string stating that person visited other person' ,function(){
            const person1 = new Person("Mai", 25);
            const person2 = new Person("Erin", 30);
            const result = person1.visit(person2);
            expect(result).to.equal("Mai visited Erin");
        })
    });

    describe('switchVisit(otherPerson)', function () {
        it('should invoke visit function of the otherPerson passing current instance as an argument', function () {
            const person1 = new Person("Mai", 25);
            const person2 = new Person("Erin", 30);
            const result = person1.switchVisit(person2);
            expect(result).to.equal("Erin visited Mai");
        });
    });

    describe('update(obj)', function(){
        context('when the incoming argument is valid object',function(){
            it('should update the instance properties to match passed in object values', function(){
                const person = new Person("Mai", 25);
                person.update({name: "Erin", age: 30});
                expect(person.name).to.equal("Erin");
                expect(person.age).to.equal(30);

            })
            it('should throw typeError if obj does not have name & age property', function(){
                const person = new Person("Mai", 25);
                expect(() => {
                    person.update({}).to.throw(TypeError, "the obj must have name and age property.")

                })
                expect(() => {
                    person.update({name: "Mai"}).to.throw(TypeError, "the obj must have name and age property.")

                })
                expect(() => {
                    person.update({age: 25}).to.throw(TypeError, "the obj must have name and age property.")

                })
            })

        })
        context('when the incoming argument is not valid object',function(){
            it('should throw typeError if it is not a valid obj', function(){
                const person = new Person("Mai", 25);
            expect(() => {
                    person.update("").to.throw(TypeError, "the argument must be a valid object")

                })

            })
        })

    })

})
