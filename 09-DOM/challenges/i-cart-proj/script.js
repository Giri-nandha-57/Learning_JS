let cartQuantity = 0;
let cartlimit = 10;

function add(num) {
    cartQuantity + num <= cartlimit ? cartQuantity += num : alert(`Limit is only ${cartlimit}`);
    show();
}

function remove(num) {
    cartQuantity - num >= 0 ? cartQuantity -= num : alert(`Not Enough Items`);
    show();
}

function reset() {
    cartQuantity = 0;
    show();
}

function show() {
    let no_of_items = document.getElementById("para");
    no_of_items.innerText = `Cart quantity : ${cartQuantity}`;
}