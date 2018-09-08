//Require dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

//Set up the port
var PORT = process.env.PORT || 3000;

//Instantiate our Express App
var app = express();

//Set up an Express Router
var router = express.Router();

//Require routes file pass router object
require("./config/routes")(router);

//Set out public folder as a static directory
app.use(express.static(makeDir, "/public"));

//Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Use bodyParser in app
app.use(bodyParser.urlencoded({
    extended: false
}));

//Every request goes through the router
app.use(router);

//If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = porcess.env.MONGOOB_URI || "mongo://localhost/mongoHeadlines";

//Connect mongoose to our database
mongoose.connect(db, function(err) {
    //Log any errors
    if (err) {
        console.log(err);
    }
    //Or log a success message
    else {
        res.json("found");
    }
});

//Listen to the port
app.listen(3000, function() {
    console.log("App runnint on port 3000!");
});

