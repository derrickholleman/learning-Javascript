class Rectangle {
    // Set up object
    // constructor takes in parameters
    constructor(width, height, color) {

        // instance properties
        this.width = width
        this.height = height
        this.color = color
    }

    // instance methods
    getArea() {
        return this.width * this.height
    }
    printDescription() {
         return `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`
    }
}

let myRectangle1 = new Rectangle(6, 5, 'green') // takes in property values as arguments
let myRectangle2 = new Rectangle(11, 3, 'yellow')

// call method
console.log(myRectangle1.getArea())
console.log(myRectangle1.printDescription())