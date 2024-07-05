function choice(txt) {
    console.log(txt);
    let resultElement = document.querySelector('.result')
    resultElement.innerText = `you chose: ${txt}`;
}
