
//the unjumbled js for the user ticket page---referenced as Bundleread1.js

var website = 'ws://127.0.0.1:51010'
var password = 'dc94fa7c-ba7e-4595-8653-e34f70cd9aab';
var PuKey = 'PublicKey';

var PrivateKey;

var foundEvent = 1;


document.getElementById('find event').onclick = function(){	
	
const bluzelle = require('bluzelle');
bluzelle.connect(website, password);

var inputKey = document.getElementById('key').value;

bluzelle.read(PuKey).then(valueA => {


if(valueA.key1 == inputKey || valueA.key2 == inputKey || valueA.key3 == inputKey){
	console.log("TRUE");
	document.getElementById("eventstatus").innerHTML = 'Event Status: FOUND';
	
	bluzelle.read(inputKey).then(value => {
		
		document.getElementById("cost").innerHTML = 'Cost: ' + value.Cost;
		document.getElementById("detail1").innerHTML = 'Detail 1: '+ value.Detail1;;
		document.getElementById("detail2").innerHTML = 'Detail 2: '+ value.Detail2;
		PrivateKey = value.PrivateKey;
		
	
	
	document.getElementById("purchase").innerHTML = "PURCHASE";
	foundEvent = 2;
	
	
	
	
	});
	
}
else{
	console.log("False");
	document.getElementById("eventstatus").innerHTML = 'Event Status: NOT FOUND';
}






});
}

document.getElementById('purchase').onclick = function(){
	if(foundEvent == 2){
		
		const bluzelle = require('bluzelle');
		bluzelle.connect(website, password);
		
		var OrderNum = RandomNumber();
	
		document.getElementById("yourticket").innerHTML = "Your Ticket: " + OrderNum;
	
		bluzelle.read(PrivateKey).then(valueC => {
			
			var S = valueC + ', ' + OrderNum;
		
			bluzelle.update(PrivateKey,S).then(()=>{
			
			
			});
		
		});
		
		
		
		console.log('Purchased');
		
	}
	
}

function RandomNumber(){
	var magnitude = 10000000000000000000;
	return parseInt(Math.random()*magnitude);
}


