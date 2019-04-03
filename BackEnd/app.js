var express = require('express');
var passport = require('passport');
var bodyParser = require("body-parser");
var morgan = require('morgan');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var mongoose = require("mongoose");


// Connecting database 
mongoose.connect("mongodb+srv://aqib5176:Aqibjutt1@amazon-lfxfm.mongodb.net/test?retryWrites=true", {useNewUrlParser:true},(err) => {
    if (err)
        {console.log(err)}
        else {console.log("db connected");}
})

var server = express()

server.use(express.static('./build'))
server.use('/uploads', express.static('./uploads'));
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cookieParser());
server.use(morgan('dev'));
server.use(passport.initialize());
server.use(passport.session());
server.use(flash());

require('./server/config/passport-config')(server);
require('./server/routes/all-routes')(server);

server.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).send("Error Catched by error handler.")
})

server.listen(process.env.PORT || 8000, () => console.log("server is running"))