import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'send an embed',

    callback: ({message, text}) => {
        const embed = new MessageEmbed().setDescription("xin chào")
            .setTitle("testing embed")
            .setColor("GREEN")

        return embed    
            
    }
} as ICommand
//!embed