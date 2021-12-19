"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    prefix: process.env.PREFIX
};
const prefix = config.prefix;
const statusOptions = [
    'in development',
    'sleeping',
    'working'
];
exports.default = {
    category: 'fun',
    description: 'punching people',
    minArgs: 1,
    expectedArgs: '<status>',
    slash: "both",
    testOnly: true,
    callback: ({ client, args }) => {
        var _a, _b, _c;
        if (args[0] === 'in development') {
            (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
                status: 'dnd',
                activities: [
                    {
                        name: statusOptions[0]
                    }
                ]
            });
        }
        if (args[0] === 'sleeping') {
            (_b = client.user) === null || _b === void 0 ? void 0 : _b.setPresence({
                status: 'dnd',
                activities: [
                    {
                        name: statusOptions[1]
                    }
                ]
            });
        }
        if (args[0] === 'working') {
            (_c = client.user) === null || _c === void 0 ? void 0 : _c.setPresence({
                status: 'online',
                activities: [
                    {
                        name: statusOptions[2]
                    }
                ]
            });
        }
        return 'status updated';
    }
};
//!status
