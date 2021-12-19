"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    prefix: process.env.PREFIX
};
const prefix = config.prefix;
exports.default = {
    category: 'fun',
    description: 'punching people',
    minArgs: 1,
    expectedArgs: '<user>',
    slash: "both",
    testOnly: true,
    callback: ({ client, text }) => {
        var _a;
        (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: ''
                }
            ]
        });
        return 'status updated';
    }
};
