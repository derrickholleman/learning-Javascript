class Square {
    constructor(width) {
        this.width = width
        this.height = width
    }

    // static method, takes in two parameters which are two square instances
    static equals(sq1, sq2) {
        return sq1.width * sq1.height === sq2.width * sq2.height
    }

    static isValidDimensions(width, height) {
        return width === height
    }
}

let square1 = new Square(8)
let square2 = new Square(8)

// calling static method on class
console.log(Square.equals(square1, square2))
console.log(Square.isValidDimensions(6, 8))