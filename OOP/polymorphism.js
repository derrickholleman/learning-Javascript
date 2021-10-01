class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name}s make a generic animal sound`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  // overriding Parent class method
  makeSound() {
    console.log(`${this.name}s go Woof Woof!`);
  }
}

const animal1 = new Animal("Zebra");
const animal2 = new Dog("Dog");
animal1.makeSound();
animal2.makeSound();
