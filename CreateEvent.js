
//this function is called when the event creator submits the creation form


//the private key list
//var PrivateKeys = 'PrivateKeys';

//the events list
//var Events = 'Events';

//the form values passed by the webpage
//var formParam1 = document.getElementById('test1').value; 
//var formParam2 = document.getElementById('test2').value; 
//var formParam3 = document.getElementById('test3').value; 

//console.log(formParam1 + ' ' + formParam2 + ' ' + formParam3);

//browserify main.js -o bundle.js
// document.getElementById('hello').onclick = function() {

	//};
 

//initialization of database api
	//Bundle.js is the browserfied version
	//must include <script src = '""></script> of browserfied version in the body (below)
	
	//perform a create on click
	
	document.getElementById('test23').onclick = function(){
		console.log("fire");
		var website = 'ws://127.0.0.1:51010'
		var password = '36ab8d5d-3e14-4717-92f2-ea567708b7c7';
	
		const bluzelle = require('bluzelle');
		bluzelle.connect(website, password);

		bluzelle.create('Even','val').then(() => {
		});
		
	}
	



