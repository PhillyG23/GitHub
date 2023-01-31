// need to create a function which has 3 by 3 rows
//remember you can get manipulate the dom of the structure of the HTML if you can 
//

// that makes the rows and columns of the board gameEl

const createGame = (mode) => {
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  let turn = "X";
// Function to toggle the turn between 'x' and 'o'
  const toggleTurn = () => {
    turn = turn === "X" ? "O" : "X";
  };
// make a function to make a move on the board aka putting and spot such as an X or an O
  const makeMove = (row, col) => {
      //check if the specified cell is null (i.e. unoccupoed)
    if (board[row][col] === null) {
      board[row][col] = turn;
      toggleTurn();

      // if the game is in 'bot mode and it's currently o turn, have the bot make a random move. 
      if (mode === "bot" && turn === "O") {
        setTimeout(() => {
           // Get all availableMoves = [unoccupied]
          const availableMoves = [];
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (board[i][j] === null) {
                availableMoves.push([i, j]);
                 // this code aboves pushes the null values it pushes the [i.j] remember the null meaning available look at the const array in for the tic tac board it is all nulls.
                  // so it is null it is added to the available moves to be played. 
              }
            }
          }
          //Chose a random available move
          const move =
            availableMoves[Math.floor(Math.random() * availableMoves.length)];
          makeMove(move[0], move[1]);
        }, 500);
      }
       //re-render the game board

      render();
    } else {
      console.log("Invalid move, try again.");
    }
  };

// Function to get he current state of the board 
// get board function is as shorthand arrow function that returns the current statge of the board
// and contains the cure positions of the x and o as well as empty cells represented by o (remember)
// the "getboard" function provides a way for the other parts of the code to access the current state of the game board.


  const getBoard = () => board;

  const getTurn = () => turn;
// return the functions above that are part of the game object. 
  return {
    makeMove,
    getBoard,
    getTurn
  };
};

const render = () => {
  // Get the game element that is related the id in the html document
  const gameEl = document.getElementById("game");
  gameEl.innerHTML = "";

  const board = game.getBoard();
  const turn = game.getTurn();
//The first line creates a constant "rowEl" which is a div element created using the document.createElement() method.

  board.forEach((row, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.classList.add("row");
    gameEl.appendChild(rowEl);

    row.forEach((cell, cellIndex) => {
      const squareEl = document.createElement("div");
      squareEl.classList.add("square");
      squareEl.innerText = cell || "";
      squareEl.addEventListener("click", () => {
        game.makeMove(rowIndex, cellIndex);
      });
      rowEl.appendChild(squareEl);
    });
  });

  document.querySelector("#turn").innerText = `Turn: ${turn}`;
};

let game;
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
  const mode = document.querySelector('input[name="mode"]:checked').value;
  game = createGame(mode);
  render();
});
