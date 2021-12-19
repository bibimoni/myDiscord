import { ICommand } from "wokcommands";

export default {
    category: 'fun',
    description: 'punching people',

    minArgs: 1,
    expectedArgs: '<user @>',

    slash: 'both',
    testOnly: true,




} as ICommand