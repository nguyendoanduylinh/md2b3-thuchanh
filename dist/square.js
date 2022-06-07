"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const rectangle_1 = require("./rectangle");
class Square extends rectangle_1.Rectangle {
    constructor(side, color, filled) {
        super(side, side, color, filled);
    }
    getSide() {
        return this.getWidth();
    }
    setSide(side) {
        this.setWidth(side);
        this.setLength(side);
    }
    //Override method
    setWidth(width) {
        this.setSide(width);
    }
    //Override method
    setLength(length) {
        this.setSide(length);
    }
    //Override method
    toString() {
        return ("A Square with side=" +
            this.getSide() +
            ", which is a subclass of " +
            super.toString());
    }
}
exports.Square = Square;
