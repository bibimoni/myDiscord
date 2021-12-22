import { ICommand } from "wokcommands";

export default {
    category: 'fun',
    description: 'alert',

    testOnly: true,
    expectedArgs: '<user @>',
    callback: ({message}) => {
        let target = message.mentions.members.first() || message.author;
        let back = target.toString() + ' back';
        return back;
    }
} as ICommand