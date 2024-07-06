
function toggle() {
    var togglebutton = document.querySelector('.btn');
    if (togglebutton.classList.contains('toggle-on')) {
        togglebutton.classList.remove('toggle-on')
    }
    else {
        togglebutton.classList.add('toggle-on')
    }
}

function toggle3(event) {
    var btn1 = document.querySelector('.btn1')
    var btn3 = document.querySelector('.btn3')
    var btn2 = document.querySelector('.btn2')
    if (event === "btn1"){
        if (btn1.classList.contains('toggle-on')) {
            btn1.classList.remove('toggle-on')
        }
        else {
            btn1.classList.add('toggle-on')
        }
    }
    if (event === "btn2"){
        if (btn2.classList.contains('toggle-on')) {
            btn2.classList.remove('toggle-on')
        }
        else {
            btn2.classList.add('toggle-on')
        }
    }
    if (event === "btn3"){
        if (btn3.classList.contains('toggle-on')) {
            btn3.classList.remove('toggle-on')
        }
        else {
            btn3.classList.add('toggle-on')
        }
    }  
}


function toggleone(event) {
    var btn1 = document.querySelector('.btnone1')
    var btn2 = document.querySelector('.btnone2')
    var btn3 = document.querySelector('.btnone3')
    if (event === "b1"){
        if (btn1.classList.contains('toggle-on')) {
            btn1.classList.remove('toggle-on')
        }
        else {
            btn1.classList.add('toggle-on')
            btn3.classList.remove('toggle-on')
            btn2.classList.remove('toggle-on')
        }
    }
    if(event === "b2"){
        if (btn2.classList.contains('toggle-on')) {
            btn2.classList.remove('toggle-on')
        }
        else {
            btn2.classList.add('toggle-on')
            btn1.classList.remove('toggle-on')
            btn3.classList.remove('toggle-on')
        }
    }
    if (event === "b3"){
        if (btn3.classList.contains('toggle-on')) {
            btn3.classList.remove('toggle-on')
        }
        else {
            btn3.classList.add('toggle-on')
            btn1.classList.remove('toggle-on')
            btn2.classList.remove('toggle-on')
        }
    }
}