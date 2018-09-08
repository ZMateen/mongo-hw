//Require request and cheerio
var request = require("request");

var cherrio = require("cheerio");

var scrape = function (cb) {

    request("https://www.nationalgeographic.com/", function(err, res, body) {
        
        var $ = cheerio.load(body);

        var articles = [];

        $(".promo_content_text").each(function(i, element) {

            var head = $(this).children(".promo_content_image").text().trim();
            var sum = $(this).children(".promo_content_title").text().trim();
        });

        articles.push(dataToAdd);
    });
};
cb(articles);

module.exports = scrape;
