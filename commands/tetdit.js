const {Client, Message, MessageAttachment} = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
    category: 'fun',
    description: 'spanking people',
    minArgs: 1,
    expectedArgs: '<user @>',
    slash: false,
    testOnly: true,
    callback: async ({Client, message, args}) => {
        const target = message.mentions.members.first() || message.author;

        const avatar1 = target.displayAvatarURL({format: 'png', dynamic: false});
        const avatar2 = message.author.displayAvatarURL({format:'png', dynamic: false});

        const image = await Canvas.spank(avatar1, avatar2);
        let attachment = new MessageAttachment(image, 'image.png');

        message.channel.send(attachment);


    }
}