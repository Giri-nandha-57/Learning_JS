let score = {
    Wins: 0,
    Losses: 0
};

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
    const compFlip = flip();
    let span_win = document.getElementById("wins");
    let span_lose = document.getElementById("loses");
    score = JSON.parse(localStorage.getItem("score")) || {
        Wins: 0,
        Losses: 0
    };
    if (Head_Tail === compFlip) {
        score.Wins++;
    }
    else {
        score.Losses++;
    }

    span_win.innerText = score.Wins;
    span_lose.innerText = score.Losses;

    localStorage.setItem("score", JSON.stringify(score));
}

function reset() {
    let span_win = document.getElementById("wins");
    let span_lose = document.getElementById("loses");

    localStorage.removeItem("score");

    span_win.innerText = 0;
    span_lose.innerText = 0;
}