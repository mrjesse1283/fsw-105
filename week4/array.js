var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayExercises(){
    vegetables.pop();
    //console.log("veggie array: " + vegetables);

    fruit.shift();
    //console.log("fruit array: " + fruit);
  
    var indexOfOrange = fruit.indexOf("orange");
    //console.log(indexOfOrange);

    var addToEnd = fruit.push(indexOfOrange);
    //console.log(fruit);

    var vegetablesLength = vegetables.length;
    //console.log(vegetablesLength);

    var addToEnd = vegetables.push(vegetablesLength);
    //console.log(vegetables);

    var food = fruit.concat(vegetables);
    //console.log(food);

    var foodArray = food.splice(4, 2);
    //console.log(food);

    var reversedArr = food.reverse();
    //console.log(reversedArr);

    var arrayToString = reversedArr.join();
    return arrayToString;

}
console.log(arrayExercises());

    
/* Remove the last item from the vegetable array.
Remove the first item from the fruit array.
Find the index of "orange."
Add that number to the end of the fruit array.
Use the length property to find the length of the vegetable array.
Add that number to the end of the vegetable array.
Put the two arrays together into one array. Fruit first. Call the new Array "food".
Remove 2 elements from your new array starting at index 4 with one method.
Reverse your array.
Turn the array into a string and return it. */