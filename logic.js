let players = ['x', 'o'];
let activePlayer = 0;
let board = [];
let boardStrings = 3; 

function startGame() {
  for (let i = 0; i < boardStrings; i++) {
    board[i] = [];
    for (let j = 0; j < boardStrings; j++) {
      board[i][j] = '';
    }
  }  
  renderBoard(board);
  console.log(board)
  console.log(board.length)
}

function click(row, column) {
  board [row][column] = players[activePlayer];
  let stepRow = 0;
  let stepColumn = 0;
  let stepDiagOne = 0;
  let stepDiagTwo = 0;
  
  for (let i = 0; i < board.length; i++) {
  if (board[row][i] === players[activePlayer]) {
      stepRow += 1;
    }
    if (board[i][column] === players[activePlayer]) {
      stepColumn += 1;
    }
    if (board[i][i] === players[activePlayer]) {
      stepDiagOne += 1;
    }
    if (board[i][board.length - i - 1] === players[activePlayer]) {
      stepDiagTwo += 1;
    }
  } 

  if (stepRow === board[row].length || stepColumn === board[column].length || stepDiagOne === board[row].length || stepDiagTwo === board[column].length) {
    showWinner(activePlayer)
  }   
  
    if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  
  renderBoard(board);
}