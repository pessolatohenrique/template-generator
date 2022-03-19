"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorList = void 0;
class AuthorList {
    constructor() {
        this._list = [];
    }
    add(author) {
        this._list.push(author);
    }
    showAll() {
        return this._list;
    }
    showText() {
        console.log("Author full list:", this._list);
    }
}
exports.AuthorList = AuthorList;
