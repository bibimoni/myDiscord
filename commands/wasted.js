const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");
module.exports = {
    category: 'fun',
    description: 'triggered',

    expectedArgs: '<user @>',
    minArgs: 1,
    testOnly: true,

    callback: async ({message}) => {
        const target = message.mentions.members.first();
        let avatar = target.displayAvatarURL({dynamic: false, format: 'png'});
        let image = await canvacord.Canvacord.wasted(avatar);
        let attachment = new MessageAttachment(image, 'image.png');
        return message.channel.send(attachment);
    }  
}