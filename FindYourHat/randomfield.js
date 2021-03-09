  const hat = '^';
  const hole = 'O';
  const fieldCharacter = '░';
  let myField =[] ;



const generateField = (/*height, width*/) => {
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

  for( i = 0; i < numRow; i++)

    for(j = 0; j < numCol; j++){
            let randNum = Math.floor(Math.random() * 100); //randomly select where 'holes' go
           if (randNum <= 15) {

                myField[i][j] = hole; 
            }
    }
    //print field
    for(let i=0; i< myField.length; i++) {
        console.log(myField[i].join(''));
        };
        return myField;
};

generateField();



      

