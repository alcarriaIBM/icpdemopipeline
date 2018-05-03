/**
 *
 */

var express = require('express');
var log4js = require('log4js');
var http = require('http');
var app = express();
var logger = log4js.getLogger('HolaMundoPipeline');
var isHealthy = true;




console.log("Arrancando..")

setInterval(function(){
	if(true)
	{
		console.log("lilili")
	}
	else
	{

		console.log("-tose-")
	}
},1000);

app.get("/", function(req, res, next){
	res.send("Hola holita mundo!!");
});

app.get("/tos", function(req, res, next){
	isHealthy = false;
	res.send("Comineza a toser");
});
app.get("/cura", function(req, res, next){
	isHealthy = true;
	res.send("Sano otra vez");
});


var port = process.env.PORT || 80;

app.listen(port, function(){
	logger.info('Hola mundo escuchando en puerto ' + port);
});
