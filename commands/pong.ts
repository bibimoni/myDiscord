import { ICommand } from "wokcommands";

export default {
    category: 'ping pong',
    description: 'Replies with Bùi dốt',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'Bùi dốt'
    },
} as ICommand
    //!pong