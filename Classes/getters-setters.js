class Square {
    constructor(width) {

        this.width = width
        this.height = width
        this.numberOfRequestsForArea = 0
    }

    // define getter, sets width and height based on argument passed into new Square()
    get area() {
        this.numberOfRequestsForArea++
        return this.width * this.height
    }

    // define setter, area param comes from square1.area = 25
    set area(area) {
        this.width = Math.sqrt(area)
        this.height = this.width
    }
}

let square1 = new Square(4)

// modifies width and height based on area passed in 
square1.area = 25

console.log(square1.area)
console.log(square1.area)
console.log(square1.area)
console.log(square1.area)
console.log(square1.numberOfRequestsForArea)