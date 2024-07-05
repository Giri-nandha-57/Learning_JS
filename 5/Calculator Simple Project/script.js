var calculation = '';

function num(num1) {
    calculation += num1;
    document.getElementById("output").innerText = calculation;
}

function calculate() {
    calculation = eval(calculation);
    document.getElementById("output").innerText = calculation;
}

function reset() {
    calculation = '';
    document.getElementById("output").innerText = '___________';

}