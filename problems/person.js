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

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }
}



module.exports = Person;
