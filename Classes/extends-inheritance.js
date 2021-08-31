// Parent and Child Class

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }
}

// child class inherits props/methods of Person
class Programmer extends Person {
    constructor(name, age, yearsOfExperience) {
        // calls constructor from Person
        super(name, age)      

    // custom behavior of Programmer
    this.yearsOfExperience = yearsOfExperience
    }

    code() {
        console.log(`${this.name} is coding and they have ${this.yearsOfExperience} years of experience`)
    }
}

const programmers = [
    new Programmer('Derrick', 25, 1),
    new Programmer('Stef', 23, 4)
]

function developSoftware(programmers) {
    // develop software
    for (let programmer of programmers) {
        programmer.code()
    }
}
developSoftware(programmers)