class Person {
  // Your code here
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }
}



module.exports = Person;
