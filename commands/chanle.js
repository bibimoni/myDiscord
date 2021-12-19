"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'fun',
    description: 'tạo 1 số',
    slash: 'both',
    testOnly: true,
    callback: ({}) => {
        let num = Math.round(Math.random() * 100 + 1);
        return num.toString();
    },
};
