#!/usr/bin/env node

var libxml = require('libxmljs');
var xmlDoc = libxml.parseXmlString('<item><data id="firstName">Your Name</data></item>');
//var xmlDoc = libxml.parseXmlString(cad);

var root = xmlDoc.root();
console.log("Nombre de la raiz: "+root.name());


var express = require('express');
var fs = require('fs');

var app = express();//.createServer(express.logger());

var my_function = function (request, response){

	var cad;
	var os = require ('os');
	cad = "tmpdir:" + os.tmpdir() +"<br>";
	cad += "endianness:" + os.endianness() +"<br>";
	cad += "hostname:" + os.hostname() +"<br>";
	cad += "type:" + os.type() +"<br>";
	cad += "platform:" + os.platform() +"<br>";
	cad += "arch:" + os.arch() +"<br>";
	cad += "release:" + os.release() +"<br>";
	cad += "uptime:" + os.uptime() +"<br>";
	cad += "loadavg:" + os.loadavg() +"<br>";
	cad += "totalmem:" + os.totalmem() +"<br>";
	cad += "freemem:" + os.freemem() +"<br>";
	cad += "cpus:" + os.cpus() +"<br>";
	
	response.send(cad);

}

console.log("iniciando la aplicacion");

app.get('/',my_function);
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});



