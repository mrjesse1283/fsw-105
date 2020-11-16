var readlineSync = require('readline-sync');//required to run module. 
//necessrry variables to be able to use calculator.
var firstNumber = readlineSync.questionInt("Please enter your first number.");
var secondNumber = readlineSync.questionInt("Please enter your second number.");
var enteredOperator = readlineSync.question("What operation yould you like to perform? add/sub/mul/div: ");

var resultAdd = AddTwoNumnber(firstNumber , secondNumber)
function AddTwoNumnber(num1 , num2){
    return (num1 + num2);
}

var resultSub = subTwoNums(firstNumber, secondNumber)
function subTwoNums(num1 , num2){
    return (num1 - num2);
}

var resultMul = multiplyTwoNumber(firstNumber,secondNumber)
function multiplyTwoNumber(num1 , num2){
    return (num1 * num2);
}
var resultDiv = divTwoNums(firstNumber, secondNumber)
function divTwoNums(num1 , num2){
    return (num1 / num2);
}
//var resultAdd = AddTwoNumnber(firstNumber , secondNumber)
    if(enteredOperator === "add"){
        AddTwoNumnber(firstNumber, secondNumber);
        console.log(firstNumber + " + " + secondNumber + " == " +resultAdd) 
}   else if(enteredOperator === "sub"){
        subTwoNums(firstNumber, secondNumber);
        console.log(firstNumber + " - " + secondNumber + " == " +resultSub) 
}   else if(enteredOperator === "mul"){
        multiplyTwoNumber(firstNumber, secondNumber);
        console.log(firstNumber + " * " + secondNumber + " == " +resultMul);
}   else if(enteredOperator === "div"){
        divTwoNums(firstNumber, secondNumber);
        console.log(firstNumber + " / " + secondNumber + " == " +resultDiv);
}   else{ 
    console.log("cannot recognize the operation provided, PLEASE TRY AGAIN!!");
}