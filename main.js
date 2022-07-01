
let decisionNumber;
let randomNumber = Math.floor((Math.random() * 3) + 1);

function rock(){

    decisionNumber = 1;

    if (randomNumber === 1) {
        alert("Draw");
    } else if (randomNumber === 2) {
        alert("Lost");
    } else if (randomNumber === 3) {
        alert("Win")
    }
    randomNumber = Math.floor((Math.random() * 3) + 1);
}


function paper(){

    decisionNumber = 2;
    if (randomNumber === 1) {
        alert("Win");
    } else if (randomNumber === 2) {
        alert("Draw");
    } else if (randomNumber === 3) {
        alert("Lost")
    }
    randomNumber = Math.floor((Math.random() * 3) + 1);
}

function scissors(){

    decisionNumber = 3;
    if (randomNumber === 1) {
        alert("Lost");
    } else if (randomNumber === 2) {
        alert("Win");
    } else if (randomNumber === 3) {
        alert("Draw")
    }
    randomNumber = Math.floor((Math.random() * 3) + 1);
}