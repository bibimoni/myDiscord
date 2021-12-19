import { ICommand } from "wokcommands";

const config = {
    prefix: process.env.PREFIX
}
const prefix = config.prefix
export default {
    category: 'fun',
    description: 'punching people',

    minArgs: 1,
    expectedArgs: '<user>',

    slash: "both",
    testOnly: true,
    
    callback: ({client, text}) => {
        client.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name:'name'
                }
            ]
        })
        return 'status updated'
    }

} as ICommand