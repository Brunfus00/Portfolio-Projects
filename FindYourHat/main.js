const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }


    print() {
        for(let i=0; i< this._field.length; i++) {
        console.log(this._field[i].join(''));
            }
          }
    startGame() {
        const prompt = require('prompt-sync')({sigint: true});
        //clears terminal screen to start game
        console.clear();
        let playerX = 0;
        let playerY = 0;
        //inside the hatLoc array the X and Y coordinates are opposite..hatLoc[playerY][playerX]
        let hatLoc = [1, 2];
        while (playerX !== hatLoc[0] || playerY !== hatLoc[1] || (this._field[playerY][playerX]) === hole) {
            myField.print();
            const direction = prompt('Pick a direction (u)p, (d)own, (l)eft, (r)igh: ');
            switch (direction) {
                case 'u':
                    playerY --;
                    if (this._field[playerY][playerX] === hole) {
                        console.log('You FELL in a hole!!!');
                        playerX = hatLoc[0];
                        playerY = hatLoc[1];
                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                    } else {
                        console.clear();
                    }

                    this._field[playerY][playerX] = '*'
                    break;
                case 'd':
                    playerY ++;
                    if (this._field[playerY][playerX] === hole) {
                        console.log('You FELL in a hole!!!');
                        playerX = hatLoc[0];
                        playerY = hatLoc[1];
                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                    } else {
                        console.clear();
                    }
                    this._field[playerY][playerX] = '*';
                    break;
                case 'r':
                    playerX ++;
                    if (this._field[playerY][playerX] === hole) {
                        console.log('You FELL in a hole!!!');
                        playerX = hatLoc[0];
                        playerY = hatLoc[1];
                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                    } else {
                        console.clear();
                    }
                    this._field[playerY][playerX] = '*'
                    break;
                case 'l':
                    playerX --;
                    if (this._field[playerY][playerX] === hole) {
                        console.log('You FELL in a hole!!!');
                        playerX = hatLoc[0];
                        playerY = hatLoc[1];
                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                    } else {
                        console.clear();
                    }
                    this._field[playerY][playerX] = '*'
                    break;
                default: 
                    break;
            }
        //    console.clear()  /*clears terminal to redraw board for next move*/
           // console.log(this._field[playerY][playerX] = hole);
        };

        }

    };











const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);


myField.startGame();



/* Rewrite the While loop to be based of a new variable that is true/false for hole  or hat...might have to use 2...each switch/case will check 
what you landed on and cnahge condition if needed and set flag of both variables
create variables outside of loop and use them after loop to give win or loss message */





//extra Code  --- delete later

//myField.print();
//myField._field [1][0] = 'P';
//const prompt = require('prompt-sync')();
 
/*const direction = prompt('Pick a direction u, d, l, r: ');
if (direction === 'u') {
    console.log('You go Up');
} else if (direction === 'd') {
}*/
//console.log(myField._field[1][1]);
//myField.print();