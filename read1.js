
//the unjumbled js for the establishment create page---referenced as Bundleread1.js

var website = 'ws://127.0.0.1:51010'
var password = 'dc94fa7c-ba7e-4595-8653-e34f70cd9aab';
var PuKey = 'PublicKey';
var PrKey = 'PrivateKeys';


document.getElementById('GenerateKeys').onclick = function(){	
	
const bluzelle = require('bluzelle');

bluzelle.connect(website, password);

var PrivateKeysCurrent;
var PublicKeysCurrent;

var PrivateKey = RandomNumber();
var PublicKey = RandomNumber();

document.getElementById("Public Key").innerHTML = 'Public Key: '+ PublicKey;
document.getElementById("Private Key").innerHTML = 'Private Key: '+ PrivateKey;

var Cost = document.getElementById('Cost').value;
var detail1 = document.getElementById('Input1').value;
var detail2 = document.getElementById('Input2').value;

console.log(detail1+detail2+Cost);

//private key
bluzelle.read(PrKey).then(value => {

PrivateKeysCurrent = value;
console.log(PrivateKeysCurrent);

if(PrivateKeysCurrent.key1 === 0){
	PrivateKeysCurrent.key1 = PrivateKey;
	
}
else if(PrivateKeysCurrent.key2 === 0){
	PrivateKeysCurrent.key2 = PrivateKey;
}
else{
	PrivateKeysCurrent.key3 = PrivateKey;
}

bluzelle.update(PrKey,PrivateKeysCurrent).then(() => {
	
});

console.log(PrivateKeysCurrent);

});


//public key
bluzelle.read(PuKey).then(value => {




if(value.key1 === 0){
	//PublicKeysCurrent.key1 = PublicKey;
	value.key1 = PublicKey;
}

else if(value.key2 === 0){
	value.key2 = PublicKey;
}
else{
	value.key3 = PublicKey;
}

bluzelle.update(PuKey,value).then(() => {
	
});



//bluzelle.read(PuKey).then(value => {

//	console.log(value);
//});

});

var PublicIndex = {Cost:Cost, Detail1:detail1, Detail2:detail2, PrivateKey:PrivateKey};
//create public key index
bluzelle.create(PublicKey.toString(),PublicIndex).then(()=> {
});

var PrivateIndex = '';
//create private key index
bluzelle.create(PrivateKey.toString(),PrivateIndex).then(()=> {
});



}

function RandomNumber(){
	var magnitude = 10000000000000000000;
	return parseInt(Math.random()*magnitude);
}


