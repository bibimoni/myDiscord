"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'Testing',
    description: 'send an embed',
    callback: ({ message, text }) => {
        const embed = new discord_js_1.MessageEmbed().setDescription("xin chào")
            .setTitle("testing embed")
            .setColor("GREEN");
        return embed;
    }
};
//!embed
