import { ICommand } from "wokcommands";

export default {
    category: 'random ngu',
    description: 'random 3 thằng ngu',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        let randomValue = Math.round(Math.random()*3+1);
        while(randomValue >= 4) {
            randomValue = Math.round(Math.random()*3+1);
        }
        if(randomValue === 1) return 'béo ngu'
        else if(randomValue === 2) return 'Bùi dốt'
        else if(randomValue === 3) return 'Pô bẽm'

    },
} as ICommand
//ngu