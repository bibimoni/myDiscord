"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'fun',
    description: 'tạo 1 số',
    slash: 'both',
    testOnly: true,
    callback: ({}) => {
        return Math.round(Math.random() * 100 + 1);
    }
};
