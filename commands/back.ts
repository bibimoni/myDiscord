import { ICommand } from "wokcommands";

export default {
    category: 'fun',
    description: 'alert',
    testOnly: true,
    callback: ({message}) => {
        let target = message.mentions.members.first()
        if(!target) return 'im back'
        if(target) {
        let back = target.toString() + ' back';
        return back;
        }
    }
} as ICommand