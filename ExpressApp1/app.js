
/**
 * Module dependencies.
 */

var express = require('express');
var exphbs = require('express3-handlebars');

var http = require('http');
var path = require('path');

var controllers = require('./controllers');
var index   = require('./controllers/index');
var insert  = require('./controllers/insert.js');



var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.engine('handlebars', 
    exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*
app.use(express.favicon());
app.use(express.logger('dev'));
*/ 
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', index.index);
app.get ('/insert', insert.insert);
app.post('/insert', insert.insertok);
app.get ('/select', insert.select);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});



/*
handlebars 
Handlebars provides the power necessary to let you build semantic templates effectively with no frustration
 

Handlebars.js is an extension to the Mustache templating language created by Chris Wanstrath. Handlebars.js and Mustache are both logicless templating languages that keep the view and the code separated like we all know they should be.

Checkout the official Handlebars docs site at http://www.handlebarsjs.com and the live demo at http://tryhandlebarsjs.com/.

Installing
See our installation documentation.

Usage
In general, the syntax of Handlebars.js templates is a superset of Mustache templates. For basic syntax, check out the Mustache manpage.

Once you have a template, use the Handlebars.compile method to compile the template into a function. The generated function takes a context argument, which will be used to render the template.

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);
 
var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);
 
// Would render: 
// <p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p> 
// <ul> 
//   <li>Jimmy is 12</li> 
//   <li>Sally is 4</li> 
// </ul> 
 */