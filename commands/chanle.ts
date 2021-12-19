
import { ICommand } from "wokcommands";

export default {
    category: 'fun',
    description: 'tạo 1 số',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        let num = Math.round(Math.random()*100+1);
        return num;
    },

} as ICommand