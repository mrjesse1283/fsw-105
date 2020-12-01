/* jshint esversion:6 */


//#1 .concat()
const names = "John";
const age = 25;
console.log(names.concat(" is now,", age));

//#2 .indexOf()
var str = "Hello world, welcome to the universe.";
console.log(str.indexOf("welcome"));

//#3 .lastIndexOf()
var str = "Hello planet earth, you are a great planet.";
console.log(str.lastIndexOf("planet"));

//#4 .match()
var str = "The rain in SPAIN stays mainly in the plain, and sing when i sting"; 
console.log(str.match(/ain/g));// I believe the g stands for groups. 

//#5 .replace()
var str = "Welcome to Denver, Please have some coffee!";
console.log(str.replace("Denver", "Florida"),str.replace("coffee", "margaritas"));
//console.log(str.replace("coffee", "Margaritas"));

//#6 .slice()
var str = "Hello world!";
console.log(str.slice(0, 8));
console.log(str.slice(0, 5));

//#7 .split()
var str = "How are you doing today?";
console.log(str.split(" "));

//#8 .toLowerCase()
var upper = "hello my name is jesse";
console.log(upper.toUpperCase(" "));

//#9 .toUpperCase()
var lower = "HELLO MY NAME IS JESSE";
console.log(lower.toLowerCase(" "));

//#10 .substr()
var str = "Hello world!";
console.log(str.substr(1, 4));

//extra .substring()
var str = "Hello world!";
console.log(str.substring(1, 4));

//push() not sure how to use this one. it seems the console is telling me how many strings.
var fruits = [];
console.log(fruits.unshift("kiwi"));