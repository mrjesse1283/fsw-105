// preliminary
//#1
if (5 > 3){
    console.log("is greater than");
}
//#2
//if (cat = 3)
var length = "cat"; {
    console.log("is the length");
}
//#3
cat = 2;
dog = 5;
if (dog == cat) {
    console.log("equal to");
 } else {
    console.log("not the same");
 }
//Bronze
 var person = {
     name: "Bobby",
     age: 12
}
//#1 
 if (person.age < 18){
     console.log("unable to go to the movies");
 } else {
     console.log("able to go to the movies");
 }
 //#2 
 if ( person.name.charAt(0) === "B" ){
    console.log("allowed");
}   else
    console.log("not allowed");
/* if(person.name.startsWith("B"));{
    console.log("allowed with first letter");
} */
//#3
if ( person.name.charAt(0) === "b" && person.age === 18){
    console.log("allowed")
} else 
    console.log("not allowed");
/* if(person.name.startsWith("B") && person.age >= 18);{
    console.log("allowed if both");
} */
//Silver
if ( 1 === 1 )
    console.log("strict");
        else if (1 == 1)
            console.log("loose");
                else {
                    console.log("not equal at all")
                }
if (1 <= 2 && 2 == 4)
    console.log("yes");
//did not print because 2 does not equal to 4.