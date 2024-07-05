function sub() {
    let subElement = document.querySelector('.btn');
    if (subElement.innerHTML === "Subscribe") {
        subElement.innerHTML = 'Subscribed';
    } else {
        subElement.innerHTML = 'Subscribe';
    }
}