let currentPlayer = "red";
let nextPlayer = "black";
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
let columnIndexBoundary = board.length - 3;
let rowIndexBoundary = board[0].length - 3;


function createChip(player) {
    let chip = document.createElement("div");
    chip.classList.add(player, "chip");
    return chip;
}
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

// eventlandher uses event 
function handleClick(event) {
    const columnElement = event.currentTarget;
    if (columnElement.childElementCount >= 6) return;
    // here is cur pla and what clicked on 
    dropChip(currentPlayer, columnElement);
    checkWinner();
    switchPlayer();
}
for (let column of document.getElementsByClassName("columns")) {
    column.addEventListener("click", handleClick);
}

function checkWinner() {
    checkWinnerHorizontally();
    checkWinnerVertically();
    checkWinnerDiagonalToRight();
    checkWinnerDiagonalToLeft();
}
function checkWinnerHorizontally() {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        let row = board[rowIndex];
        for (let columnIndex = 0; columnIndex < rowIndexBoundary; columnIndex++) {
            let chipIsHere = row[columnIndex];
            if (chipIsHere != 0) {
                if (chipIsHere === board[rowIndex][columnIndex + 1] && chipIsHere === board[rowIndex][columnIndex + 2] && chipIsHere === board[rowIndex][columnIndex + 3]) {
                    winningMessage();
                }
            }
        }
    }
}
function checkWinnerVertically() {
    for (let rowIndex = 0; rowIndex < columnIndexBoundary; rowIndex++) {
        let row = board[rowIndex];
        for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
            let chipIsHere = row[columnIndex];
            if (chipIsHere != 0) {
                if (chipIsHere === board[rowIndex + 1][columnIndex] && chipIsHere === board[rowIndex + 2][columnIndex] && chipIsHere === board[rowIndex + 3][columnIndex]) {
                    winningMessage();
                }
            }
        }
    }
}
function checkWinnerDiagonalToRight() {
    for (let rowIndex = 0; rowIndex < columnIndexBoundary; rowIndex++) {
        let row = board[rowIndex];
        for (let columnIndex = 0; columnIndex < rowIndexBoundary; columnIndex++) {
            let chipIsHere = row[columnIndex];
            if (chipIsHere != 0) {
                if (chipIsHere === board[rowIndex + 1][columnIndex + 1] && chipIsHere === board[rowIndex + 2][columnIndex + 2] && chipIsHere === board[rowIndex + 3][columnIndex + 3]) {
                    winningMessage();
                }
            }
        }
    }
}
function checkWinnerDiagonalToLeft() {
    for (let rowIndex = 3; rowIndex < board.length; rowIndex++) {
        let row = board[rowIndex];
        for (let columnIndex = 0; columnIndex < rowIndexBoundary; columnIndex++) {
            let chipIsHere = row[columnIndex];
            if (chipIsHere != 0) {
                if (chipIsHere === board[rowIndex - 1][columnIndex + 1] && chipIsHere === board[rowIndex - 2][columnIndex + 2] && chipIsHere === board[rowIndex - 3][columnIndex + 3]) {
                    winningMessage();
                }
            }
        }
    }
}
const winningMessageHere = document.getElementById("wrapper");
function winningMessage() {
    let messageForWinner = document.createElement("h1");
    messageForWinner.textContent = currentPlayer.toUpperCase() + " IS THE VICTOR!";
    messageForWinner.classList.add("messageStyleForBothRedAndBlack");
    const winningMessageStyling = winningMessageHere.appendChild(messageForWinner).style
    const redMusic = new Audio('./pics/redMerged20DecibelsLouder.mp3');
    const blackMusic = new Audio('./pics/blackMerged20DecibelsLouder.mp3');
    if (currentPlayer == "red") {
        winningMessageStyling.color = "red";
        winningMessageStyling.webkitTextStroke = "1px white";
        redMusic.play();
    } else {
        winningMessageStyling.color = "black";
        winningMessageStyling.webkitTextStroke = "1px white";
        blackMusic.play();
    }
    removeHandleClickFunction()
}
function removeHandleClickFunction() {
    for (let column of document.getElementsByClassName("columns")) {
        column.removeEventListener("click", handleClick);
    }
}

function switchPlayer() {
    if (currentPlayer === "red") {
        currentPlayer = "black";
    } else {
        currentPlayer = "red";
    };
};


function resetBoardToEmpty() {
    location.reload();
}