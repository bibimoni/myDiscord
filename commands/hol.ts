import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'fun',
    description: 'higher or lower game',
    
    testOnly: true,
    
    callback: async ({ interaction: mgsInt, channel }) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('higher')
                    .setEmoji('⬆️')
                    .setLabel('higher')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('lower')
                    .setEmoji('⬇️')
                    .setLabel('lower')
                    .setStyle('SUCCESS')
            )
        await mgsInt.reply
    }
} as ICommand