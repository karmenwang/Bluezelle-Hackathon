var website = 'ws://127.0.0.1:51010'
var password = 'f4a02781-4c8c-47c5-9670-e770554734e1';

//this function is called when the event creator submits the creation form

function CreateEvent(){

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
// document.getelementbyid('hello').onclick = function(0 {

	//};
 

//initialization of database api
const bluzelle = require('bluzelle');
bluzelle.connect(website, password);


bluzelle.create('Even','val').then(() => {
});

f}
