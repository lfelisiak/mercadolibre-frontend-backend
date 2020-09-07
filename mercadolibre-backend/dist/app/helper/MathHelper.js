"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDecimals = void 0;
exports.countDecimals = function (number) {
    var separator = ".";
    var splittedNumber = number.toString().split(separator, 2);
    return splittedNumber[1] ? parseInt(splittedNumber[1].toString()) : "00";
};
//# sourceMappingURL=MathHelper.js.map