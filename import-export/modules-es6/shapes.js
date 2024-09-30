// file: shapes.js
export const squareArea = function(side) {
    return side * side;
};

export default class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}
