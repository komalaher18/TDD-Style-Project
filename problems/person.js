class Person {
  // Your code here
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }

  visit(otherPerson){
    return `${this.name} visited ${otherPerson.name}`;
  }
}



module.exports = Person;
