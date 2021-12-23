"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'fun',
    description: 'higher or lower game',
    testOnly: true,
    callback: ({ interaction: mgsInt, channel }) => __awaiter(void 0, void 0, void 0, function* () {
        const row = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId('higher')
            .setEmoji('⬆️')
            .setLabel('higher')
            .setStyle('SUCCESS'))
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId('lower')
            .setEmoji('⬇️')
            .setLabel('lower')
            .setStyle('SUCCESS'));
        yield mgsInt.reply({
            content: 'asd',
            components: [row],
        });
    }),
};
