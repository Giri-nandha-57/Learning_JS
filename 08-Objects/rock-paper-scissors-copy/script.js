let score = {
    Wins: 0,
    Losses: 0,
    Draws: 0
};

function choice(yourChoice) {
    var computerChoice = Math.random();
    let computerChoiceWord = '';

    if (computerChoice > 0 && computerChoice < 1 / 3) {
        computerChoiceWord = 'rock';
    }
    if (computerChoice >= 1 / 3 && computerChoice < 2 / 3) {
        computerChoiceWord = 'paper';
    }
    if (computerChoice >= 2 / 3 && computerChoice < 1) {
        computerChoiceWord = 'scissors';
    }
    decide(yourChoice, computerChoiceWord)
}

function decide(you, comp) {
    score = JSON.parse(localStorage.getItem("score")) || {
        Wins: 0,
        Losses: 0,
        Draws: 0
    };
    if (you === 'rock') {
        if (comp === 'rock') {
            score.Draws++;
        }
        if (comp === 'paper') {
            score.Losses++;
        }
        if (comp === 'scissors') {
            score.Wins++;
        }
    }
    if (you === 'paper') {
        if (comp === 'rock') {
            score.Wins++;
        }
        if (comp === 'paper') {
            score.Draws++;
        }
        if (comp === 'scissors') {
            score.Losses++;
        }
    }
    if (you === 'scissors') {
        if (comp === 'rock') {
            score.Losses++;
        }
        if (comp === 'paper') {
            score.Wins++;
        }
        if (comp === 'scissors') {
            score.Draws++;
        }
    }
    document.getElementById("wins").innerText = score.Wins;
    document.getElementById("loses").innerText = score.Losses;
    document.getElementById("draws").innerText = score.Draws;

    localStorage.setItem("score", JSON.stringify(score));
}

function reset() {
    let win = document.getElementById("wins");
    let lose = document.getElementById("loses");
    let draw = document.getElementById("draws");
    win.innerText = 0;
    lose.innerText = 0;
    draw.innerText = 0;

    localStorage.removeItem("score");
}