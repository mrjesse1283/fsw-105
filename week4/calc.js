var readlineSync = require('readline-sync');

var firstNumber = readlineSync.questionInt("please enter your first numeber.");
var secondNumber = readlineSync.questionInt("Please enter your second number.");
var enteredOperator = readlineSync.question("What operation yould you like to perform? add/sub/mul/div: ");

function AddTwoNumnber(num1 , num2){
    return +num1 + +num2;
}

var resultAdd = AddTwoNumnber(firstNumber , secondNumber)
    if(enteredOperator === "add"){
        AddTwoNumnber(firstNumber, secondNumber);
        console.log(firstNumber + " + " + secondNumber + " == " +resultAdd) 
}   else if(enteredOperator === "sub"){

}   else if(enteredOperator === "mul"){

}   else if(enteredOperator === "div"){

}   else{
    console.log("cannot recognize the operation provided, PLEASE TRY AGAIN!!");
}