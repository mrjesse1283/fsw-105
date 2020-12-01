/* jshint esversion:6 */

var readlineSync = require('readline-sync');

const playerName = readlineSync.question("Sorry you fell into my yard, what is your Name? ");

const welcomeMessage = `${playerName}, to make it out of here alive you will need to choose wiseley. `;
console.log(welcomeMessage);

let isAlive = true;
let foundKey = false;

while (isAlive == true)
{
    const menuId = readlineSync.keyIn(` Press 1: \t to put hand in the hole \n Press 2:\t to find the key \n Press 3:\t to open the door `,{limit: `$<1-3>`});
    if (menuId ==1){
        console.log(`\tSo sorry ${playerName}, The game is OVER!!`);
        isAlive = false;
    }
    else if (menuId == 2 && foundKey == true) {
        console.log(` Wow ${playerName}, it seems you have found the key, move on to choice 3. `);
    }
    else if (menuId == 2 && foundKey == false) {
        console.log(` I am impressed ${playerName}, you found the key successfully! Access GRANTED to choice 3.`);
        foundKey = true;
    }
    else if (menuId == 3 && foundKey == false) {
        console.log(` Not surprised ${playerName}, you have not found the key! Please proceed to choice 2.`);
    }
    else if (menuId == 3 && foundKey == true) {
        console.log(` Your greatness was shown today ${playerName}, you have found the key and opened the door, You win now go home.`);
        isAlive = false;
    }
}