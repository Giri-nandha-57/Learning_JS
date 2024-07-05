let Wins = 0;
let Loses = 0;
let Draws = 0;

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
    if (you === 'rock') {
        if (comp === 'rock') {
            Draws++;
        }
        if (comp === 'paper') {
            Loses++;
        }
        if (comp === 'scissors') {
            Wins++;
        }
    }
    if (you === 'paper') {
        if (comp === 'rock') {
            Wins++;
        }
        if (comp === 'paper') {
            Draws++;
        }
        if (comp === 'scissors') {
            Loses++;
        }
    }
    if (you === 'scissors') {
        if (comp === 'rock') {
            Loses++;
        }
        if (comp === 'paper') {
            Wins++;
        }
        if (comp === 'scissors') {
            Draws++;
        }
    }
    document.getElementById("wins").innerText = Wins;
    document.getElementById("loses").innerText = Loses;
    document.getElementById("draws").innerText = Draws;
}

function reset() {
    let win = document.getElementById("wins");
    let lose = document.getElementById("loses");
    let draw = document.getElementById("draws");
    Wins = 0;
    Loses = 0;
    Draws = 0;
    win.innerText = Wins;
    lose.innerText = Loses;
    draw.innerText = Draws;
}