const img = require('images-scraper');


const google = new img({
    puppeteer: {
        headless: true,

    }
})

module.exports = {
    name: 'image',
    callback : async(message, args) => {
        const query = args.join(" ");
        if(!query) return message.channel.send('nhập từ khóa bạn muốn tìm kiếm');

        const results = await google.scrape(query, 1);
        message.channel.send(results[0].url);

    }
}