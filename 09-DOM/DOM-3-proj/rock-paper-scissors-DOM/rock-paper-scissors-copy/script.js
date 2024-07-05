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
    let result = '';
    if (you === 'rock') {
        if (comp === 'rock') {
            score.Draws++;
            result = 'Tie'
        }
        if (comp === 'paper') {
            score.Losses++;
            result = 'Lose'
        }
        if (comp === 'scissors') {
            score.Wins++;
            result = 'Win'
        }
    }
    if (you === 'paper') {
        if (comp === 'rock') {
            score.Wins++;
            result = 'Win'
        }
        if (comp === 'paper') {
            score.Draws++;
            result = 'Tie'
        }
        if (comp === 'scissors') {
            score.Losses++;
            result = 'Lose'
        }
    }
    if (you === 'scissors') {
        if (comp === 'rock') {
            score.Losses++;
            result = 'Lose'
        }
        if (comp === 'paper') {
            score.Wins++;
            result = 'Win'
        }
        if (comp === 'scissors') {
            score.Draws++;
            result = 'Tie'
        }
    }
    document.querySelector('.match-result').innerText = `${result}`
    document.querySelector('.choices').innerHTML = `You  <img class= "emoji" src="images/${you}-emoji.png"> <img class = "emoji" src = "images/${comp}-emoji.png">  Computer `
    document.querySelector('#wins').innerText = score.Wins;
    document.querySelector("#loses").innerText = score.Losses;
    document.querySelector("#draws").innerText = score.Draws;

    localStorage.setItem("score", JSON.stringify(score));
}

function reset() {
    let win = document.querySelector('#wins');
    let lose = document.querySelector("#loses");
    let draw = document.querySelector("#draws");
    win.innerText = 0;
    lose.innerText = 0;
    draw.innerText = 0;

    localStorage.removeItem("score");
}