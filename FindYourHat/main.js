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

    static generateField() {
        const prompt = require('prompt-sync')({sigint: true});
        const height = prompt('Enter a number for the height of the board: ');
        const width = prompt('Enter a number for the width of the board: ');


        const myField = new Array(10);
        for (let i = 0; i < myField.length; i++) {
            myField[i] = new Array(8).fill(fieldCharacter); // Creating an array of size 10 and filled of 8
        }       


        const fill = (height, width) => {
        for( let i = 0; i < height; i++)

            for(j = 0; j < width; j++){
                    let randNum = Math.floor(Math.random() * 100);
                if (randNum <= 20) {

                        myField[i][j] = hole;

                    }
                }   

            };
            fill();
    };

    startGame() {
        const prompt = require('prompt-sync')({sigint: true});
        //clears terminal screen to start game
        console.clear();
        let playerX = 0;
        let playerY = 0;
        let hatLoc = [1, 2];
        let endGame = false; //used to flah when While g game loop should end

        //While loop logs field to screen and refreshed it between moves. Uses try, catch to determine if a move is out of bounds. Ends the loop when
        // player lands on hat, hole, or out of bounds.
        while (endGame === false)  {
            myField.print();
            const direction = prompt('Pick a direction (u)p, (d)own, (l)eft, (r)ight: ');
            switch (direction) {
                case 'u':
                    try {
                        playerY --;
                        if(playerY < 0 || playerY > this._field.length - 1) {
                            throw Error;
                        }

                      } catch(e) {
                        console.log('You are out of bounds');
                        endGame = true;
                        break;
                      }
                    if (this._field[playerY][playerX] === hole) {
                        console.log('You FELL in a hole!!!');
                        endGame = true;
                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                        endGame = true;
                    } else {
                        console.clear();
                    }

                    this._field[playerY][playerX] = '*'
                    break;
                    
                case 'd':
                    try {
                        playerY ++;
                        if(playerY < 0 || playerY > this._field.length - 1) {
                            throw Error;
                        }


                      } catch(e) {
                        console.log('You are out of bounds');
                        endGame = true;
                        break;
                      }
                    if (this._field[playerY][playerX] === hole) {
                        console.log('You FELL in a hole!!!');
                        endGame = true;

                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                        endGame = true;

                    } else {
                        console.clear();
                    }
                    this._field[playerY][playerX] = '*';
                    break;

                case 'r':
                   try {
                        playerX ++;
                        if(playerX < 0 || playerX > this._field.length - 1) {
                            throw Error;
                        }

                      } catch(e) {
                        console.log('You are out of bounds');
                        endGame = true;
                        break;
                      }
                    if (this._field[playerY][playerX] === hole) {
                        console.log('You FELL in a hole!!!');
                        endGame = true;
                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                        endGame = true;
                    } else {
                        console.clear();
                    }
                    this._field[playerY][playerX] = '*'
                    break;

                case 'l':
                    try {
                        playerX --;
                        if(playerX < 0 || playerX > this._field.length - 1) {
                            throw Error;
                        }

                      } catch(e) {
                        console.log('You are out of bounds');
                        endGame = true;
                        break;
                      }
                    if (this._field[playerY][playerX] === hole) {
                        console.log('You FELL in a hole!!!');
                        endGame = true;

                    }  else if (this._field[playerY][playerX] === hat) {
                        console.log('YOU FOUND YOUR HAT!!');
                        endGame = true;
                    } else {
                        console.clear();
                    }
                    this._field[playerY][playerX] = '*'
                    break;
                default: 
                    break;
            }
        };

        }

    };











/*const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

 /* const myField = new Field([
    ['*', '░', '░'],
    ['░', '░', '░'],
    ['░', '░', '░'],
  ]);*/


//myField.startGame();
//Field.generateField();
const myField = Field.generateField();
//console.log(myField)
//myField.startGame();


