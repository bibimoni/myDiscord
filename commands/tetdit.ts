import { ICommand } from "wokcommands";
import canvacord from 'canvacord';
import { MessageAttachment } from "discord.js";
export default {
    category: 'fun',
    description: 'spanking people',

    slash: 'both',
    testOnly: true,

    expectedArgs: '<user @>',

    callback: async ({message}) => {
        let user = message.mentions.users.first()
        if(!user) {
            message.reply({
                content: 'please tag someone'
            })
            return;
        }      
        let avatar1 = user?.displayAvatarURL({ format: "png", dynamic: false});
        let avatar2 = message.author.displayAvatarURL({ format: 'png', dynamic: false});
        let image = await canvacord.Canvacord.spank(avatar1, avatar2);
        
        let attachment = new MessageAttachment(image, 'spank.png');
        return message.channel.send('',attachment)
    }
} as ICommand