import DiscordJS, { Intents, Message } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('bot is ready');

    new WOKCommands(client, {
       commandsDir: path.join(__dirname, 'commands') ,
       testServers: ['724194517863104543']
    });
});

client.login(process.env.TOKEN);