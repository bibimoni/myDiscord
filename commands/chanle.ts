import { Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'fun',
    description: 'tạo 1 số',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return Math.round(Math.random()*100+1)
    }

} as ICommand