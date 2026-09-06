let boxes = document.querySelectorAll(".box");
let resetButtom = document.querySelector(".button");
let turnO = true;

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let h1 = document.querySelector("h1");
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]

boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log("box was clicked");
        if (turnO == true) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;
        checkWinner()

    })

});

function disabledButtons() {
    for (const box of boxes) {
        box.disabled = true;    
    }
}

const showWinner = (winner) =>{
    msg.innerText = `congratulations, winner is ${winner}`
    msgContainer.classList.remove("hide");
    h1.classList.remove("display");
    h1.classList.add("hide1");
    disabledButtons()
}

function checkWinner() {
    for (let pattern of winPatterns) {
        const pos1Val = boxes[pattern[0]].innerText;
        const pos2Val = boxes[pattern[1]].innerText;
        const pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner:", pos2Val);
            showWinner(pos1Val)
            
        }
    }
}


const resetGame = ()=> {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
    h1.classList.remove("hide1");
    h1.classList.add("display");
    for (const box of boxes) {
        box.innerText = "";
        
    }
}

function enableboxes() {
    for (const box of boxes) {
        box.disabled = false;
    }
}

resetButtom.addEventListener('click',resetGame)
newGameBtn.addEventListener('click',resetGame)

