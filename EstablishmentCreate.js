
	
	
	//document.getElementById('GenerateKeys').onclick = function(){	
		
		var website = 'ws://127.0.0.1:51010'
		var password = 'dc94fa7c-ba7e-4595-8653-e34f70cd9aab';
	
		const bluzelle = require('bluzelle');
		bluzelle.connect(website, password);
		
		var PrivateKeysCurrent;
		var PublicKeysCurrent;
		
		bluzelle.read('PrivateKeys').then(value => {
			//var PrivateKeysCurrent = {key1:0, key2:0, key3:0};
			//var PublicKeysCurrent = {key1:0, key2:0, key3:0};
			console.log(value);
			PrivateKeysCurrent = value;
		});
		
		console.log('private current' + PrivateKeysCurrent);
		
		bluzelle.read('PublicKeys').then(value => {
			PublicKeysCurrent = value;
		});
		console.log('public current' + PublicKeysCurrent);
		
		console.log("Generating Keys");
		var PublicKey = RandomNumber();
		var PrivateKey = RandomNumber();
		
		//read details 
		//var cost = document.getElementById('Cost').value;
		//var input1 = document.getElementById('Input1').value;
		//var input2 = document.getElementById('Input2').value;
		
		//need to add new keys to Key objects
		
		//this is just for the demo, i know its disgusting and should be a loop
		
		if(PublicKeysCurrent.key1 === 0){
			PublicKeysCurrent.key1 = PublicKey;
		}
		else if(PublicKeysCurrent.key2 === 0){
			PublicKeysCurrent.key2 = PublicKey;
		}
		else{
			PublicKeysCurrent.key3 = PublicKey;
		}
		
		
		if(PrivateKeysCurrent.key1 === 0){
			PrivateKeysCurrent.key1 = PrivateKey;
		}
		else if(PrivateKeysCurrent.key2 === 0){
			PrivateKeysCurrent.key2 = PrivateKey;
		}
		else{
			PrivateKeysCurrent.key3 = PrivateKey;
		}
		
		console.log('new keys '+ PrivateKeysCurrent.key1 + ' '+ PublicKeysCurrent.key1);
		
		
		
		bluzelle.update('PrivateKeys',PrivateKeysCurrent).then(() =>{
			console.log("PrivateKeys Updated")
		});
		
		bluzelle.update('PublicKeys',PublicKeysCurrent).then(() =>{
			console.log("PublicKeys Updated")
		});
		
		
		//post key values
		//document.getElementById("Public Key").innerHTML = PublicKey;
		//document.getElementById("Private Key").innerHTML = PublicKey;
		
				
//	}
	
	function RandomNumber(){
		var magnitude = 10000000000000000000;
		return parseInt(Math.random()*magnitude);
	}
	
	
	



