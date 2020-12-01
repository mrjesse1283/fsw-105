/* jshint esversion:6 */
//1
const manName = "John";
const age = 101;

function runForLoop(pets){
    const petObjects = [];
    for(let i = 0; i < pets.length; i++) {
        let pet = {type: pets[i]}
        //let name;
        if(pets[i] === "cat") {
            name = "fluffy";
        } else { name = "spot";}
          console.log("pet name: ",  name)
          pet.name = name;
          petObjects.push(pets);
    }
    console.log("man name: " + manName);
    return petObjects;
}
runForLoop(["cat", "dog"]);  

//2
const carrots =["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
    return arr.map(function(carrot){
        return {type: "carrots", name: carrot}
    });
}
console.log(mapVegetables([carrots]));

//3
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
const filterForFriendly = (arr) => 
    arr.filter((person) => person.friendly);

console.log(filterForFriendly(people));

//4
var doMathSum = (a, b) => (a + b);

var produceProduct = (a, b) => (a * b);

//5 
function printString (firstName = "Jane", lastName ="Doe", age = "100"){
    //return "Hi "  + firstName + lastName + ", how does it feel to be " + age;
//6
    return `Hi ${firstName} ${lastName} , how does it feel to be ${age}?`
}
console.log(printString());

//7
const animals = [
    {type:"dog", name:"theodore"},
    {type:"cat", name:"whiskers"},
    {type:"pig", name:"piglet"},
    {type:"dog", name:"sparky"},
];
filterForDogs = arr => arr.filter(animal => (animal.type === "dog") ? true: false);

console.log(filterForDogs([
    {type:"dog", name:"theodore"},
    {type:"cat", name:"whiskers"},
    {type:"pig", name:"piglet"},
    {type:"dog", name:"sparky"},
]));

//8
function templateString(location, name) {
    return (`Hi ${name}, \n Thank you for visiting, ${location}. \n I hope you enjoyed your stay, you dont have to go home, but you gotta get the hell outta here!! `)
}
console.log(templateString("Yo mommas house", "Jesse"));
