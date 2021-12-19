"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = (client) => {
    const statusOptions = [
        'in development',
        'sleeping',
        'working'
    ];
    let counter = 0;
    const updateStatus = () => {
        var _a;
        (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
            status: 'online',
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]
        });
        if (++counter >= statusOptions.length) {
            counter = 0;
        }
        setTimeout(updateStatus, 1000 * 60 * 10);
    };
    updateStatus();
};
exports.config = {
    dbname: 'STATUS_CHANGER',
    displayname: 'Status Changer'
};
