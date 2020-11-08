//#1
function sum(num1,num2){
return (num1 + num2);
}
sum();
var sumResults= sum(1 , 4);
console.log(sumResults);

//#2
function bigNum(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}
bigNum();
console.log(bigNum(3, 7, 4));

//#3
function oddEven(num1, num2) {
    if(num1 % 2 === 0) {
        return "even";
    } else if (num2 % 2 === 1) {
        return "odd";
    }
}
oddEven();
console.log(oddEven(2 , 5));

//#4
// var string = "happy birthday";
 function paraString(string) {
    if (string.length <= 20) {
        return string + " " + string ;
    } else if (string.length > 20 ){
        return string.slice(0, string.length / 2);
    }
}
console.log(paraString("please do what you are told")); 

//console.log(string.slice(0, string.length / 2));