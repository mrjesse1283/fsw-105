/* jshint esversion:6 */

var readlineSync = require('readline-sync');

const name = readlineSync.question("HAHA you fell into my yard, what is your Name? ");

readlineSync.question(`${name}, to make it out of here alive you will need to choose wiseley. Please Press Enter.  `);
/* console.log(welcomeMessage); */
const badGuys = ["Monster", "Nightmare", "BlankMan", "Smasher"];

const prizes = ["shield", "food", "shelter", "water"];
var prizeList = [];

let userHealth = 40;

const choices = ["Walk", "Exit", "Print"];

let grab = prizes[Math.floor(Math.random() * prizes.length)];


function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(choices, " What will be your destiny? ");

    if(choices[index] == "Exit") {
        return userHealth == 0;
    }else if (choices[index] == "Print") {
        console.log(name + ":\n" + userHealth + ":Prize" + grab);
    }else if (choices[index] == "Walk"){
        let key = Math.random();
        if(key <= '.3') {
            console.log("walking....");
        }else if(key >= '.3') {
            console.log(badGuy + "Is in your presence!");

            while(badGuysHealth > 0 && userHealth > 0) {

                const user = readlineSync.question("What do you want to do? Enter 'r' to run or 'a' to attack: ");

                switch (user){
                    case 'r':
                        const run = Math.random();
                        if(run < '.5') {
                            console.log("Before you flee, " + badGuy + " attacks you with, " + badGuysPower );
                        }else {
                            console.log("You Ran Away");
                            //break;
                        }break;

                    case 'a':
                        badGuysHealth -= attackPower;
                        console.log("You attacked " + badGuy + "with " + attackPower + " Power. ");
                        
                        userHealth -= badGuysPower;
                        console.log("The villian just attacked you with " + badGuysPower + " power.");

                        if(badGuysHealth <= 0) {
                            console.log("You destroyed " + badGuy + ".\n" + "\t" + badGuy + " dropped " + grab );
                            let loot = Math.random();
                            if(loot <= '.3'){
                                prizeList.push(grab);
                            }
                            }else if(userHealth <= 0) {
                                console.log(badGuy + "has devastated you, You are dead!");
                            }
                }
            }
        }
    }
}

while(userHealth > 0) {
    userRestore = function() {
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}