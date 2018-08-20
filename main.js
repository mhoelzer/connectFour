// onclick = drop Red or balck
//     win condition
//         alert if one wins
//     if not return
// change classname of element 
let currentPlayer = "red";
let nextPlayer = "black";

let playerRedSelections = new Array();
let playerBlackSelections = new Array();

const handleClick = function(event) {
    // reference to object that dispatched the event
    let cell = event.target;
    cell.innerHTML = currentPlayer;
    let chip = document.createElement("div");
    if(currentPlayer === "red") {
        playerSelections = playerRedSelections;
        chip.classList.add(currentPlayer);
        cell.appendChild(chip)
        nextPlayer = "black";
    } else {
        playerSelections = playerBlackSelections;
        chip.classList.add(currentPlayer);
        cell.appendChild(chip)
        nextPlayer = "red";
    };
    // parses string and return integer of the specified radix; !!!ask what this means!!!
    playerSelections.push(parseInt(cell.id));
    // swap players
    currentPlayer = nextPlayer;
};
// get array of all cells using doc.querySelectorAll()
// if want to use tictactoe, do td instead of div.rows
const cells = document.querySelectorAll("div.rows");
// iterates through those cells to add event listener
for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", handleClick);
};






// let board = document.getElementById("grid")
// board = [
//     [0, 3, 4, 1, 0, 0, 0],
//     [0, 4, 3, 2, 1, 2, 0],
//     [4, 0, 2, 3, 1, 1, 1],
//     [0, 2, 2, 0, 3, 0, 1],
//     [2, 0, 2, 4, 4, 4, 4],
//     [0, 0, 2, 0, 2, 2, 2]
// ]

// // If we search past the edge we'll get a null pointer error
// const edgeX = board[0].length - 3;
// const edgeY = board.length - 3;
// console.log(edgeX, edgeY);
// // HORIZONTAL for vert search
// // iterate each row
// for (let y = 0; y < board.length; y++) {
//     // iterate each cell in the row
//     for (let x = 0; x < edgeX; x++) {
//         let cell = board[y][x];
//         // Only check if cell is filled
//         if (cell !== 0) {
//             // Check the next two cells for the same value
//             if (cell === board[y][x + 1] && cell === board[y][x + 3]) {
//                 console.log("3 in a row vertical found at " + (x + 1) + ":" + (y + 1))
//             }
//         }
//     }
// }
// // VERTICAL
// // iterate each row   
// for (let y = 0; y < edgeY; y++) {
//     // iterate each cell in the row
//     for (let x = 0; x < board[0].length; x++) {
//         cell = board[y][x];
//         // Only check if cell is filled
//         if (cell !== 0) {
//             // Check the next two cells for the same value
//             if (cell === board[y + 1][x] && cell === board[y + 3][x]) {
//                 console.log("3 in a row horizontal found at " + (x + 1) + ":" + (y + 1))
//             }
//         }
//     }
// }
// // DIAGONAL (DOWN RIGHT)
// // iterate each row   
// for (let y = 0; y < edgeY; y++) {
//     // iterate each cell in the row
//     for (let x = 0; x < edgeX; x++) {
//         cell = board[y][x];
//         // Only check if cell is filled
//         if (cell !== 0) {
//             // Check the next two cells for the same value
//             if (cell === board[y + 1][x + 1] && cell === board[y + 3][x + 3]) {
//                 console.log("3 in a row down-right found at " + (x + 1) + ":" + (y + 1))
//             }
//         }
//     }
// }
// // DIAGONAL (DOWN LEFT)
// // iterate each row   
// for (let y = 2; y < board.length; y++) {
//     // iterate each cell in the row
//     for (let x = 0; x < edgeX; x++) {
//         cell = board[y][x];
//         // Only check if cell is filled
//         if (cell !== 0) {
//             // Check the next two cells for the same value
//             if (cell === board[y - 1][x + 1] && cell === board[y - 3][x + 3]) {
//                 console.log("3 in a row down-left found at " + (x + 1) + ":" + (y + 1))
//             }
//         }
//     }
// }


// handleClick = function(event) {
//     // reference to object that dispatched the event
//     let cell = event.target;
//     cell.innerHTML = currentPlayer;
//     if(currentPlayer == "Red") {
//         playerSelections = playerRedSelections;
//         nextPlayer = "Black";
//     } else {
//         playerSelections = playerBlackSelections;
//         nextPlayer = "Red";
//     };
//     // parses string and return integer of the specified radix; !!!ask what this means!!!
//     playerSelections.push(parseInt(cell.id));
//     // swap players
//     currentPlayer = nextPlayer;
//     console.log(currentPlayer)
// };