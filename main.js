let currentPlayer = "red";
let nextPlayer = "black";

// // every piece associated with number %10
// let playerRedSelections = new Array();
// let playerBlackSelections = new Array();

let board = [
    // sorted by rows; hold rep of where on screen
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
// board[row][column] --> start with outer loop is row; inner is column

function createChip(player) {
    let chip = document.createElement("div");
    // if player is string red form 1, then red is css class
    chip.classList.add(player, "chip");
    return chip;
}
// createchip("black")
// columnelmeent is dropchip(payer, event.currentTarget)
// create elment and put to column and change rep of board
function dropChip(player, columnElement) {
    let chip = createChip(player);
    // dom manip
    columnElement.appendChild(chip);
    // needs to be used to see coulmn index wise
    // colel dataset by colindex for index; stroed as string in html
    const columnIndex = Number(columnElement.dataset.columnIndex);
    // have chip added, so subtract 1 to get the index
    const rowIndex = columnElement.childElementCount - 1;
    // changes/applies to array; puts w/e chip where it is
    board[rowIndex][columnIndex] = player;
}

// check win conditions w/ one player; keep track of player

// eventlandher uses event 
function handleClick(event) {
    // col is curT
    const columnElement = event.currentTarget;
    if(columnElement.childElementCount >= 6) return;
    // here is cur pla and what clicked on 
    dropChip(currentPlayer, columnElement);
    // checkWinner();
    switchPlayer();
}

// // to check the winner, you need to check horiz, vert, diag to R and diga to L; THEN  
// function checkWinner() {
//     checkWinnerHorizontally();
//     checkWinnerVertically();
//     checkWinnerDiagonalToRight();
//     checkWinnerDiagonalToLeft();
// }
// function checkWinnerHorizontally() {
//     for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
//         let row = board[rowIndex];
//         for (let columnIndex = 0; columnIndex < columnIndex.childElementCount; columnIndex++) {
//             let chipIsHere = row[columnIndex];
//             if (chipIsHere !== 0) {
//                 if (chipIsHere === board[rowIndex][columnIndex + 1] && chipIsHere === board[rowIndex][columnIndex + 2] && chipIsHere === board[rowIndex][columnIndex + 3]) {
//                     winningMessage();
//                 }
//             }
//         }
//     }
// }
// function checkWinnerVertically() {

// }
// function checkWinnerDiagonalToRight() {

// }
// function checkWinnerDiagonalToLeft() {

// }
// function winningMessage() {
//     let messageForWinner = document.createElement("h1");
//     messageForWinner.textContent = currentPlayer + " is the champion";
//     if(currentPlayer == "red") {
//         document.body.appendChild(messageForWinner).style.color = "red";
//     } else {
//         document.body.appendChild(messageForWinner).style.color = "black";
//     }
// }

function switchPlayer() {
    if(currentPlayer === "red") {
        currentPlayer = "black";
    } else {
        currentPlayer = "red";
    };
};

for(let column of document.getElementsByClassName("columns")) {
    column.onclick = handleClick;
}