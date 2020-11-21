 /* jshint esversion: 6  */

//a.2
 function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num >= 5){
            return true;
        }
    }); 
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
//A.2
function evensOnly(arr){
    const result = arr.filter(function(num) {
        if(num % 2 === 0){
            return true;
        }
    });
    return result;
}
console.log(evensOnly([3, 6, 8, 2]));  


console.log("section B");
//B.1
function doubleNum(arr){
    const result = arr.map(function(num){
        return num * 2;
    });
    return result;
}
console.log(doubleNum([2, 5, 10]));

//B2
function stringItUP(arr){
    const result = arr.map(function(num){
        return num.toString();  
    })
    return result;
} 
console.log(stringItUP([2, 5, 100]));

//B.3
function capitalizeNames(arr){
    const result = arr.map(function(name){
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    });
    return result;
}
console.log(capitalizeNames(["john", "JACOB", "jingleHeimer", "schmidt"]));


console.log("section C");
//C.1
function total(arr){
    const result = arr.reduce(function(num, finalSum){
        finalSum = finalSum + num;
        return finalSum;
    });
    return result;
}
console.log("total of all number: " + total([1, 2, 3]));

function stringConcat(arr){
    const result = arr.reduce(function(final, num){
        return final.toString() + num.toString();
    });
    return result;
}
console.log(stringConcat([1, 2, 3]));

function totalVotes(arr){
    const result = arr.reduce(function(final, voter){
        if(voter.voted){
            final++;
        }
        return final;
    }, 0);
    return result;
}
var voters = [
    {name:"Bob", age: 30, voted: true },
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];
  console.log(totalVotes(voters));


console.log("section D");
//D.1
function leastToGreatest(arr){
    const result = arr.sort(function(a, b){
        return a -b;
    })
    return result;
};
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//D.2
function greatestToLeast(arr){
    const result = arr.sort(function(a, b){
        return b - a;
    })
    return result;
};
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//D.3
