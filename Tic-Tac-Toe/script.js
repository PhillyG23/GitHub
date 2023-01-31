const createGame = (mode) => {
    let board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
  
    let turn = "X";
  
    const toggleTurn = () => {
      turn = turn === "X" ? "O" : "X";
    };
  
    const makeMove = (row, col) => {
      if (board[row][col] === null) {
        board[row][col] = turn;
        toggleTurn();

        
  
        if (mode === "bot" && turn === "O") {
          setTimeout(() => {
            const availableMoves = [];
            for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                if (board[i][j] === null) {
                  availableMoves.push([i, j]);
                }
              }
            }
            const move =
              availableMoves[Math.floor(Math.random() * availableMoves.length)];
            makeMove(move[0], move[1]);
          }, 500);
        }
  
        render();
      } else {
        console.log("Invalid move, try again.");
      }
    };
  
    const getBoard = () => board;
  
    const getTurn = () => turn;
  
    return {
      makeMove,
      getBoard,
      getTurn
    };
  };
  
  const render = () => {
    const gameEl = document.getElementById("game");
    gameEl.innerHTML = "";
  
    const board = game.getBoard();
    const turn = game.getTurn();
  
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
  