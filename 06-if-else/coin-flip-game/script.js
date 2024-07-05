let no_of_wins = 0;
let no_of_loses = 0;

function flip() {
    let coinFlip = Math.random();

    if (coinFlip >= 0 && coinFlip < 1 / 2) {
        coinFlip = 'head';
    }

    if (coinFlip >= 1 / 2 && coinFlip < 1) {
        coinFlip = 'tail';
    }

    return coinFlip;
}

function guess(Head_Tail) {
    let compFlip = flip();
    let output = document.getElementById("output");
    if (Head_Tail === compFlip) {
        output.innerText = 'Your Guess is Right';
        no_of_wins++;
    }
    else {
        output.innerText = 'Your Guess is Wrong';
        no_of_loses++;
    }
    let span_win = document.getElementById("wins");
    let span_lose = document.getElementById("loses");

    span_win.innerText = no_of_wins;
    span_lose.innerText = no_of_loses;
}

function reset() {
    let output = document.getElementById("output");
    output.innerText = null;
    no_of_loses = 0;
    no_of_wins = 0;
    let span_win = document.getElementById("wins");
    let span_lose = document.getElementById("loses");

    span_win.innerText = no_of_wins;
    span_lose.innerText = no_of_loses;
}