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

  update(obj){
    if(typeof obj === "object"){
      if(!obj.name && !obj.age){
        throw TypeError("the obj must have name and age property.")
      } else{
        this.name = obj.name;
        this.age = obj.age;
      }

    }
    else {
      throw TypeError("the argument must be a valid object")
    }
  }
}



module.exports = Person;
