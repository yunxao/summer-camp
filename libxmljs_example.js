var libxml = require('libxmljs');


// EJEMPLO DE CREACION DE CONTENIDOS
var doc = libxml.Document();
var elem = doc.node('name1');
var newChild = libxml.Element(doc, 'new-child');
elem.addChild(newChild);

var child1 = elem.node('child1');
var child2 = elem.node('child2', 'second');
var newChild = libxml.Element(doc, 'new-child');
var name2 = elem.node('name2');
name2.addChild(newChild);
child2.cdata('<h1>cdata test</h1>').cdata('<p>It\'s worked</p>').cdata('<hr/>All done');

console.log('Document with CDATA: %s', doc.toString());

// EJEMPLO DE LECTURA
var fs = require('fs');
var cad = fs.readFileSync('mydata.xml');
var xmlDoc = libxml.parseXmlString('<item><data id="firstName">Your Name</data></item>');
var xmlDoc = libxml.parseXmlString(cad);

var root = xmlDoc.root();
console.log("Nombre de la raiz: "+root.name());
console.log(root.text); 
var status_ = root.find("/PlaceSearchResponse/status");
// todos los hijos que caen de root y que se llaman result
// en esta libreía siempre hay que acceder con el path completo, hay que concatenar el path del padre con los de los hijos, a veces puede ser problematico
var allResults = xmlDoc.find(root.path() + "/result");
// Todos los hijos retorna tambien los hijos que son texto, aunque sean espacios en blanco
var allChilds = root.childNodes()

console.log("size result="+allResults.length);
console.log("todos lo shiejos="+allChilds.length);
console.log(status_);
console.log(status_[0].text());
for (var i = 0; i < allChilds.length;i++){
	console.log("hijo["+i+"]="+allChilds[i].name());
}
var primerElemento = root.child(0);
console.log("primer elemento: "+primerElemento.name()+ ":" + primerElemento);

//var hijos = root.childNodes();
//console.log("hijos = " + hijos.lenght);

