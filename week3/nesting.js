/* var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer" ]
var count       = 0;

for (var i = 0; i < officeItems.length; i++ ){
   if (officeItems[i] === "computer"){
    count++
   }
}
console.log(count); */

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {   name: "Mike",
        age: 12,
        gender: "male"  }, 

    {   name: "Madeline",
        age: 80,
        gender: "female"}, 

    {   name: "Cheryl",
        age: 22,
        gender: "female"},

    {   name: "Sam",
        age: 30,
        gender: "male"  },
        
    {   name: "Suzy",
        age: 4,
        gender: "female"}
];
//Number 1
 //age old enough
 function isOldEnough(){
   for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("Old enough");
    } else {
        console.log("Not old enough");
    }
  }
 }
 isOldEnough();
console.log("===========");

//Number 2
//name and age
function isOldEnoughName(){
for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Old Enough to watch Mad Max.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Not Old Enough to Watch Mad Max.");
    }
}
}
isOldEnoughName();
console.log("===========");

//Number 3
function nameAgeGender(){
for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max Fury Road.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road.");
    } 
    } else {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let Her in");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in");
        }
    }
}
}
nameAgeGender();
console.log("=======");

//#4 up to 100
var num = 0;
    for( i = 0; i < 101; i++){
      if( i % 2 !== 0){
        console.log(i + " it is even");
    } else {
        console.log(i + " it is odd");
    }
};







 /* for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad[i].length; i++ ) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is Old Enough, please let HER in ");
    }  else {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is Old Enough, please let HIM in "); 
    }
  }  else {
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "Is not old enough, do not let Her in");
      } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough, do not let HIM in");
      }
  }
} */