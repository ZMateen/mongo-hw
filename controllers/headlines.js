var scrape = require("../scripts/scrape");
var createDate = require("../scripts/date");

//Bring in the headline and note models
var Headline = require("../models/Headline");

module.exports = {
    fetch: function(cb) {
        scrape(function(data) {
            var articles = data;
            for (var i = 0; i < articles.length; i ++) {
                articles[i].date = createDate();
                articles[i].saved = false;

            }

            Headline.collection.insertMany(articles, {ordered:false}, function(err, docs) {
                cb(err, docs);
            });
        });
    }
}