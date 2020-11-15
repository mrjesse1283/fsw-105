function capitalizeAndLowercase(str){
    var upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;
}
console.log(capitalizeAndLowercase("Hello"));
console.log("----------");

function findMiddleIndex(str){
    var middleOfString = Math.floor(str.length / 2);
    return middleOfString;
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));
console.log("----------");

function returnFirstHalf(str){
    var firstHalf = str.slice(0, str.length / 2);
    return firstHalf;
}
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));
console.log("----------");

function capitalizeAndLower(str){
    var halfCap = str.slice(0, str.length / 2);
    var lowerCap =str.slice(str.length / 2);
    var cap = halfCap.toUpperCase() + lowerCap.toLowerCase();
    return cap;
}
console.log(capitalizeAndLower("Hello"));
console.log(capitalizeAndLower("Hello World"));
console.log("----------");

//optional code challenge
  function capitalze(str){
    var capitalizeFirst = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizeFirst;
}
console.log(capitalze("hey friends! pratice, practice, practice!")); 
  
/*  function capitalze(str){
    var splitStr = str.toLowerCase().split(" ");

    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase()
      }
      str = splitStr.join(" ");
    }
    return str;
}
console.log(capitalze("hey friends! pratice, practice, practice!"));  */ 