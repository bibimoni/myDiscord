const img = require('images-scraper');


const google = new img({
    puppeteer: {
        headless: true,
    }
})

module.exports = {
    name: 'image',
    category: 'fun',
    description: 'finding image',
    testOnly: true,
    expectedArgs: 'từ khóa',

    callback : async(message, args) => {
        const results = await google.scrape(args[0], 1);
        message.channel.send(results[0].url);

    }
}