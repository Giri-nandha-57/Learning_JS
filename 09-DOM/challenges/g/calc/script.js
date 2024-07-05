
function calculation() {
    let limit = 40;
    let inputValue = document.querySelector(".inp");
    let price = Number(inputValue.value);
    if (price <= limit) {
        price += 10;
    }
    price = (Math.round(price * 100)) / 100;
    let resultElement = document.querySelector('.result')
    resultElement.innerHTML = `${price}`;
}

function check(event) {
    console.log(event);
    if (event.key === "Enter") {
        calculation();
    }
}