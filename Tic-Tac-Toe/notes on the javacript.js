need to create a function which has 3 by 3 rows.a
remember you can get manipulate the dom of the structure of the HTMLAllCollection if you can 

firstly make the base of the game

const createGame = (mode) => {
    let board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
        // that makes the rows and columns of the board game
    ];

    let turn = "x";

// Function to toggle the turn between 'x' and 'o'
    const toggleTurn = () => {
        turn = turn === "x" ? "O" : "x";
    };

    // make a function to make a move on the board aka putting and spot such as an X or an O

    const makeMove = (row,col) => {
        //check if the specified cell is null (i.e. unoccupoed)
        if (board[row][col] === null) {
            // above tis the argument
            board [row][col] = turn;
            //above is the argument
            toggleTurn();

        }
        // if the game is in 'bot mode and it's currently o turn, have the bot make a random move. 
        if(mode === "bot" && turn === "o") {
            setTimeout(() => {
                // Get all availableMoves = []
                
            }
        }