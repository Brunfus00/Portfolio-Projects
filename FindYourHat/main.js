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
<<<<<<< Updated upstream
=======

    static generateField() {
            const prompt = require('prompt-sync')({sigint: true});
            let numRow = prompt('Enter a number for the height of the board: ');
            let numCol = prompt('Enter a number for the width of the board: ');
            //convert user iniput from type string to number
            numCol = numCol * 1;
            numRow = numRow * 1;
          const myField = new Array(numRow);
          for (let i=0; i<myField.length; i++) {
            myField[i] = new Array(numCol).fill(fieldCharacter); // Creating an array of size 10 and filled of 8
          }
        
          for( let i = 0; i < numRow; i++)
        
            for(let j = 0; j < numCol; j++){
                    let randNum = Math.floor(Math.random() * 100); //randomly select where 'holes' go
                   if (randNum <= 10) {
        
                        myField[i][j] = hole; 
                    }
            }
            //print field -- might be able to remove it in the actual game
            for(let i=0; i< myField.length; i++) {
                console.log(myField[i].join(''));
                };

                //random placement of hat on the game board
                const randomNum = (max) => {
                    return Math.floor(Math.random() * Math.floor(max));
                  };
                let hatRandomRow = randomNum(numRow);
                let hatRandomCol = randomNum(numCol);
                myField[hatRandomRow][hatRandomCol] = hat;  // hat starting point


                myField[0][0] = pathCharacter; //Player starting point
                return myField;
        };

>>>>>>> Stashed changes
    startGame() {
        const prompt = require('prompt-sync')({sigint: true});
        //clears terminal screen to start game
        console.clear();
        let playerX = 0;
        let playerY = 0;
        //inside the hatLoc array the X and Y coordinates are opposite..hatLoc[playerY][playerX]
        let hatLoc = [1, 2];
        while (playerX !== hatLoc[0] || playerY !== hatLoc[1] /*|| (this._field[playerY][playerX]) === hole*/) {
            myField.print();
            const direction = prompt('Pick a direction (u)p, (d)own, (l)eft, (r)igh: ');
            switch (direction) {
                case 'u':
                    playerY --;
                    this._field[playerY][playerX] = '*'
                    break;
                case 'd':
                    playerY ++;
                    this._field[playerY][playerX] = '*';
                    break;
                case 'r':
                    playerX ++;
                    this._field[playerY][playerX] = '*'
                    if (this._field[2][1] === hole) {
                        console.log('You FELL in a hole!!!');
                        playerX = hatLoc[0];
                        playerY = hatLoc[1];
                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                    }   
                    break;
                case 'l':
                    playerX --;
                    this._field[playerY][playerX] = '*'
                    break;
                default: 
                    break;
            }
            console.clear()  /*clears terminal to redraw board for next move*/
        };

        }

    };

<<<<<<< Updated upstream










const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);


=======
const myField = new Field (Field.generateField());
>>>>>>> Stashed changes
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