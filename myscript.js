let gameboard = [];
turn = true;
let drawCounter = 0

const createCell = (cellID) => {
    const x = document.querySelector('#cell' + cellID);
    x.addEventListener('click', function () {
        if ((gameboard[cellID].drawing == 10) && (turn == true)) {
            gameboard[cellID].drawing = 1;
            drawCell(cellID)
            turn = false
            drawCounter += 1;
            checkWin()
        }
        else if ((gameboard[cellID].drawing == 10) && (turn == false)) {
            gameboard[cellID].drawing = 2;
            drawCell(cellID)
            turn = true
            drawCounter += 1;
            checkWin()
            

            }
        else {
            console.log('Already played here')
        }
        console.log(gameboard[cellID].drawing)
        console.log(gameboard[1].drawing + gameboard[2].drawing + gameboard[3].drawing)
    });
}

const createGameboard = function() { 
    let gridSpot = {}
    for (let i = 0; i <= 9; i++) {
        gameboard.push(gridSpot[i] = {drawing : 10})
        createCell(i+1);
    }
 }

const drawCell = function(cellID) { 
    const x = document.querySelector('#cell' + cellID);
    if (turn == true) {
        x.classList.add("cross");
    }
    else {
        x.classList.add("circle");
    }
    
}

const checkWin = function() {
    if ((gameboard[1].drawing + (gameboard[2].drawing) + (gameboard[3].drawing) == 3) ||
        (gameboard[4].drawing + (gameboard[5].drawing) + (gameboard[6].drawing) == 3) ||
        (gameboard[7].drawing + (gameboard[8].drawing) + (gameboard[9].drawing) == 3) ||
        (gameboard[1].drawing + (gameboard[4].drawing) + (gameboard[7].drawing) == 3) ||
        (gameboard[2].drawing + (gameboard[5].drawing) + (gameboard[8].drawing) == 3) ||
        (gameboard[3].drawing + (gameboard[6].drawing) + (gameboard[9].drawing) == 3) ||
        (gameboard[1].drawing + (gameboard[5].drawing) + (gameboard[9].drawing) == 3) ||
        (gameboard[7].drawing + (gameboard[5].drawing) + (gameboard[3].drawing) == 3))
     {
        document.getElementById('winner').innerHTML = (`X's Win!`)
        document.getElementById('show').classList.add("show")
    }
        else if (
        (gameboard[1].drawing + (gameboard[2].drawing) + (gameboard[3].drawing) == 6) ||
        (gameboard[4].drawing + (gameboard[5].drawing) + (gameboard[6].drawing) == 6) ||
        (gameboard[7].drawing + (gameboard[8].drawing) + (gameboard[9].drawing) == 6) ||
        (gameboard[1].drawing + (gameboard[4].drawing) + (gameboard[7].drawing) == 6) ||
        (gameboard[3].drawing + (gameboard[6].drawing) + (gameboard[9].drawing) == 6) ||
        (gameboard[2].drawing + (gameboard[5].drawing) + (gameboard[8].drawing) == 6) ||
        (gameboard[1].drawing + (gameboard[5].drawing) + (gameboard[9].drawing) == 6) ||
        (gameboard[7].drawing + (gameboard[5].drawing) + (gameboard[3].drawing) == 6))
     {
        document.getElementById('winner').innerHTML = (`O's Win!`)
        document.getElementById('show').classList.add("show")
    }
        else if (drawCounter == 9) {
        document.getElementById('winner').innerHTML = (`There was a draw!`)
        document.getElementById('show').classList.add("show")
    }
}


createGameboard()