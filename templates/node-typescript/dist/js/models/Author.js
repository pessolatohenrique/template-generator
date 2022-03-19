"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const Status_1 = require("../enums/Status");
class Author {
    constructor(name, status = Status_1.Status.ACTIVE) {
        this._name = name;
        this._status = status;
    }
    showText() {
        console.log(`Author ${this._name} with status ${this._status}`);
    }
}
exports.Author = Author;
