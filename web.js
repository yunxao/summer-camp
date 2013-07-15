
var express = require('express');

var app = express(); //.createServer(express.logger());

var my_function = function (request, response){

	var cad;
	var os = require ('os');
	cad = "tmpdir:" + os.tmpdir() +"<br>";
	cad = "endianness:" + os.endianness() +"<br>";
	cad = "hostname:" + os.hostname() +"<br>";
	cad = "type:" + os.type() +"<br>";
	cad = "platform:" + os.platform() +"<br>";
	cad = "arch:" + os.arch() +"<br>";
	cad = "release:" + os.release() +"<br>";
	cad = "uptime:" + os.uptime() +"<br>";
	cad = "loadavg:" + os.loadavg() +"<br>";
	cad = "totalmem:" + os.totalmem() +"<br>";
	cad = "freemem:" + os.freemem() +"<br>";
	cad = "cpus:" + os.cpus() +"<br>";
	response.send(cad);

}

console.log("iniciando la aplicacion");

app.get('/',my_function);
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


