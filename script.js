let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [0, 4, 8], [0, 3, 6], [2, 4, 6]];
let turn0 = true;
let msg = document.querySelector("h2");
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = 'O';
            turn0 = false;
        }
        else {

            box.innerText = 'X';
            box.classList.add("colour");

            turn0 = true;
        }
        box.disabled = true;
        checkWinner();

    })


})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                showWinner(pos1Val);


            }
        }
    }
    return;
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
    return;
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congralutions,Winner is ${winner}`;
    msg.classList.add("winner");
    disableBoxes();
    return;


}

resetGame = () => {
    turn0 = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("colour");
    })
    msg.innerText = "";
    msg.classList.remove("winner");
    enableBoxes();

}
reset.addEventListener("click", resetGame);