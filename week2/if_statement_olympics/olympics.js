// preliminary
if (5 > 3){
    console.log("is greater than");
}
if (cat = 3) {
    console.log("is the length");
}
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
 if (person.age < 18){
     console.log("unable to go to the movies");
 } else {
     console.log("able to go to the movies");
 }
if(person.name.startsWith("B"));{
    console.log("allowed with first letter");
}
if(person.name.startsWith("B") && person.age >= 18);{
    console.log("allowed if both");
}
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