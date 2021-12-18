import { ICommand } from "wokcommands";

export default {
    category: 'ping pong',
    description: 'Replies with Béo ngu',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'Béo ngu'
    },
} as ICommand
    //!ping

    