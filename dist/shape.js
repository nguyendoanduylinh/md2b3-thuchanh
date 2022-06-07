"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this.color = "green";
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return ("A Shape with color of " +
            this.getColor() +
            " and " +
            (this.isFilled() ? "filled" : "not filled"));
    }
}
exports.Shape = Shape;
