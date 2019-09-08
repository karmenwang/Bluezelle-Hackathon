var website = 'ws://127.0.0.1:51010'
var password = 'dc94fa7c-ba7e-4595-8653-e34f70cd9aab';
var key = 'PublicKeys';


const bluzelle = require('bluzelle');

bluzelle.connect(website, password);

bluzelle.read(key).then(value => {

//val = JSON.parse(value);
console.log(value);
var val = value;
val.key1 = 22;
bluzelle.update(key,val).then(() => {
	
});

console.log(val);
//val = value;
//console.log('value of ' + key + ' is: ' + val);

});

const uuidv4 = require('uuid/v4');
var test = uuidv4();
console.log("test");

