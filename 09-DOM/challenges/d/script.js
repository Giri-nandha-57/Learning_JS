function display(){
    let inputContent = document.querySelector('.inp');
    let outputContent = document.querySelector('.result');
    outputContent.innerText = `Your name is: ${inputContent.value}`;
}

function check(event){
    if(event.key === "Enter"){
        display();
    }
}