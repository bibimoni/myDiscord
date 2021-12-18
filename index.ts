import DiscordJS, { Intents, Message } from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', async () => {
    
    console.log('bot is ready');

    new WOKCommands(client, {
       commandsDir: path.join(__dirname, 'commands') ,
       typeScript: true,
       testServers: ['724194517863104543'],
       //mongoUri: process.env.MONGO_URI,
    });
});

client.login(process.env.TOKEN);