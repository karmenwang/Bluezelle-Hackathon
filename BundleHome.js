(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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
	
	document.getElementById('test23').onclick = function(){
		console.log("fire 1");
		
		document.getElementById("1234").innerHTML = "freeeeeeeeee";
		document.getElementById("nights").value = RandomNumber();
		
		
	}
	document.getElementById('1234').onclick = function(){
		console.log("fire 2");
		
		var formParam1 = document.getElementById('cost').value;
		console.log(formParam1);
		
		var formParam2 = document.getElementById('nights').value;
		console.log(formParam2);
		
		var formParam3 = document.getElementById('type').value;
		console.log(formParam3);
		
		
	}
	
	function RandomNumber(){
		var magnitude = 10000000000000000000;
		return parseInt(Math.random()*magnitude);
	}
	




},{}]},{},[1]);
