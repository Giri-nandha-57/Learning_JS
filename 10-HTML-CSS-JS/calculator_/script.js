
function calculation() {
    let limit = 40;
    let inputValue = document.querySelector(".inp");
    let price = Number(inputValue.value);
    let resultElement = document.querySelector('.result')
    if (price < 0){
        resultElement.innerHTML = `<p id="red">The price can't be lower than  $0</p>`
        return
    }
    if (price <= limit) {
        price += 10;
    }
    
    resultElement.innerHTML = `${price}`;
}

function check(event) {
    console.log(event);
    if (event.key === "Enter") {
        calculation();
    }
}