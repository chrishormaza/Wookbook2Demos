"use strict"

window.onload = init; 

function init(){
    console.log("start init")

    const greetTheUserBtn = document.getElementById("greetTheUserBtn");
    greetTheUserBtn.onclick = greetTheUserBtnClicked;
    console.log("end init")
}

function greetTheUserBtnClicked(){
    console.log("button clicked")
    const nameTextbox = document.getElementById("nameTextbox");
    let nameValue = nameTextbox.value;
    let message = "Hello " + nameValue;
    alert(message);
}