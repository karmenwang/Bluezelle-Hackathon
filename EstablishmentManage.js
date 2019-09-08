
//the unjumbled js for the user ticket page---referenced as Bundleread1.js

var website = 'ws://127.0.0.1:51010'
var password = 'dc94fa7c-ba7e-4595-8653-e34f70cd9aab';
var PuKey = 'PublicKey';
var PrKey = 'PrivateKeys';

var PrivateKey;

var foundEvent = 1;


document.getElementById('manage event').onclick = function(){	
	
const bluzelle = require('bluzelle');
bluzelle.connect(website, password);

var inputKey = document.getElementById('key').value;

bluzelle.read(PrKey).then(valueA => {


if(valueA.key1 == inputKey || valueA.key2 == inputKey || valueA.key3 == inputKey){
	console.log("TRUE");
	document.getElementById("eventstatus").innerHTML = 'Event Status: FOUND';
	
	bluzelle.read(inputKey).then(value => {
		
		var tickets = value.split(', ');
		
		if(tickets.length < 1){
			
		}
		else if(tickets.length < 2){
			document.getElementById("ticket1").innerHTML = 'Ticket: '+ tickets[0];
		}
		else if(tickets.length < 3){
			document.getElementById("ticket1").innerHTML = 'Ticket: '+ tickets[0];
			document.getElementById("ticket2").innerHTML = 'Ticket: '+ tickets[1];
		}
		else{
			document.getElementById("ticket3").innerHTML = 'Ticket: '+ tickets[0];
			document.getElementById("ticket1").innerHTML = 'Ticket: '+ tickets[1];
			document.getElementById("ticket2").innerHTML = 'Ticket: '+ tickets[2];
			
		}
		
		
		
		
	
	
	
	
	});
	
}
else{
	console.log("False");
	document.getElementById("eventstatus").innerHTML = 'Event Status: NOT FOUND';
}


});
}



function RandomNumber(){
	var magnitude = 10000000000000000000;
	return parseInt(Math.random()*magnitude);
}


