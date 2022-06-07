"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(width, length, color, filled) {
        super(color, filled);
        this.width = 1.0;
        this.length = 1.0;
        this.width = width;
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return 2 * (this.width + this.length);
    }
    //Override method
    toString() {
        return ("A Rectangle with width=" +
            this.getWidth() +
            " and length=" +
            this.getLength() +
            ", which is a subclass of " +
            super.toString());
    }
}
exports.Rectangle = Rectangle;
