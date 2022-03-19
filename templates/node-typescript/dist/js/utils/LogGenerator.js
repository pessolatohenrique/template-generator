"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogGenerator = void 0;
class LogGenerator {
    static printOut(...objects) {
        for (const iterator of objects) {
            iterator.showText();
        }
    }
}
exports.LogGenerator = LogGenerator;
