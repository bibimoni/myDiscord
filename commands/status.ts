import { ICommand } from "wokcommands";

const config = {
    prefix: process.env.PREFIX
}
const prefix = config.prefix

const statusOptions = [
    'in development',
    'sleeping',
    'working'
]
export default {
    
    category: 'fun',
    description: 'punching people',

    minArgs: 1,
    expectedArgs: '<status>',

    slash: "both",
    testOnly: true,
    
    callback: ({client, args}) => {
        if (args[0] === 'in development') {
            
        client.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: statusOptions[0]
                }
            ] 
        })
        }
        if (args[0] === 'sleeping') {
            
        client.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: statusOptions[1]
                }
            ] 
        })
        }

        if (args[0] === 'working') {
            
            client.user?.setPresence({
                status: 'online',
                activities: [
                    {
                        name: statusOptions[2]
                    }
                ] 
            })
            }
              
        return 'status updated'
    }

} as ICommand
//!status
