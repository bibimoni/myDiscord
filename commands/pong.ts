import {ICommand} from "wokcommands";

export default {
    category: 'ping pong',
    description: 'Replies With An dốt',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'Bùi dốt'     
    },
} as ICommand
    //!pong