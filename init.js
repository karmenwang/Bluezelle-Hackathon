var website = 'ws://127.0.0.1:51010'
var password = 'dc94fa7c-ba7e-4595-8653-e34f70cd9aab';


const bluzelle = require('bluzelle');



var EventInitVals = {Event1:{Orders:{Order1:0, Order2:0, Order3:0}}};



bluzelle.connect(website, password);

var PrivateInitVals = {key1:0 , key2: 0, key3: 0};
bluzelle.create('PrivateKeys',PrivateInitVals).then(()=> {
});
var PublicInitVals = {key1:0, key2: 0, key3: 0};
bluzelle.create('PublicKey',PublicInitVals).then(()=> {
});
//bluzelle.create('Events',EventInitVals).then(()=> {
	//});



