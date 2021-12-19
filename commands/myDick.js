"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'fun command',
    description: 'generate a random size of pee pee',
    callback: ({ message, text }) => {
        let peepee = '3' + '='.repeat(Math.round(Math.random() * 20)) + 'D';
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(message.author.username)
            .setTitle('the pee pee machine')
            .setFooter("by distiled's bot")
            .addField('pee pee size is:', peepee);
        return embed;
    },
};
