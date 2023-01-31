const createGame = (mode) => {
  // Create a 2D array to represent the Tic Tac Toe board
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  // Set the starting turn to 'X'
  let turn = "X";

  // Function to toggle the turn between 'X' and 'O'
  const toggleTurn = () => {
    turn = turn === "X" ? "O" : "X";
  };

  // Function to make a move on the board
  const makeMove = (row, col) => {
    // Check if the specified cell is null (i.e. unoccupied)
    if (board[row][col] === null) {
      board[row][col] = turn;
      toggleTurn();

      // If the game is in 'bot' mode and it's currently 'O's turn, have the bot make a random move
      if (mode === "bot" && turn === "O") {
        setTimeout(() => {
          // Get all available moves (i.e. cells that are null)
          const availableMoves = [];
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (board[i][j] === null) {
                availableMoves.push([i, j]);
              }
            }
          }
          // Choose a random available move
          const move =
            availableMoves[Math.floor(Math.random() * availableMoves.length)];
          makeMove(move[0], move[1]);
        }, 500); // Wait for 500ms before making the move
      }

      // Re-render the game board
      render();
    } else {
      // If the cell is not null, log an error message
      console.log("Invalid move, try again.");
    }
  };

  // Function to get the current state of the board
  const getBoard = () => board;

  // Function to get the current turn
  const getTurn = () => turn;

  // Return the functions that are part of the game object
  return {
    makeMove,
    getBoard,
    getTurn
  };
};

// Function to render the game board
const render = () => {
  // Get the game element
  const gameEl = document.getElementById("game");
  gameEl.innerHTML = "";

  // Get the current state of the board and turn
  const board = game.getBoard();
  const turn = game.getTurn();

  // Render each row of the board
  board.forEach((row, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.classList.add("row");
    gameEl.appendChild(rowEl);

    // Render each cell in the row
    row.forEach((cell, cellIndex) => {
      const squareEl = document.createElement("div");
      squareEl.classList.add("square");
      squareEl.innerText = cell || "";
      squareEl.addEventListener("click", () => {
        game.makeMove(rowIndex, cellIndex);
      });
