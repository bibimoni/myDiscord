import { ICommand } from "wokcommands";

export default {
    category: 'random ngu',
    description: 'random 3 thằng ngu',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        let randomValue = Math.round(Math.random()*8+1);
        while(randomValue >= 9) {
            randomValue = Math.round(Math.random()*8+1);
        }
        switch(randomValue) {
            case 1 : return 'béo ngu'; break;
            case 2 : return 'Bùi dốt'; break;
            case 3 : return 'Pô bẽm'; break;
            case 4 : return 'Hoàng non'; break;
            case 5 : return 'Huy ngu'; break;
            case 6 : return 'Bảo ngu'; break;
            case 7 : return 'vịt dốt'; break;
            case 8 : return 'Phúc ngu'; break;          
        }
    },
} as ICommand
//ngu