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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvacord_1 = __importDefault(require("canvacord"));
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'fun',
    description: 'spanking people',
    slash: 'both',
    testOnly: true,
    expectedArgs: '<user @>',
    callback: ({ message }) => __awaiter(void 0, void 0, void 0, function* () {
        let user = message.mentions.users.first();
        if (!user) {
            message.reply({
                content: 'please tag someone'
            });
            return;
        }
        let avatar1 = user === null || user === void 0 ? void 0 : user.displayAvatarURL({ format: "png", dynamic: false });
        let avatar2 = message.author.displayAvatarURL({ format: 'png', dynamic: false });
        let image = yield canvacord_1.default.Canvacord.spank(avatar1, avatar2);
        let attachment = new discord_js_1.MessageAttachment(image, 'spank.png');
        return message.channel.send(attachment);
    })
};
