var website = 'ws://127.0.0.1:51010'
var password = 'f4a02781-4c8c-47c5-9670-e770554734e1';
var key = 'TestX';
var val = 'This is the value';

const bluzelle = require('bluzelle');

bluzelle.connect(website, password);

bluzelle.create(key,val).then(() => {

console.log('we just created '+ key + ' with the value ' + val);

});




