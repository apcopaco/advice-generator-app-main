"use strict"
const advice = document.getElementById('advice');
const text = document.getElementById("text");
const button = document.getElementById("button");
function get_advice(){
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.slip.advice);
            text.textContent = data.slip.advice;
            //advice.textContent = "ADVICE #" + data.slip.id;
            advice.textContent = `ADVICE #${data.slip.id}`; 
        })
        .catch(error => {
            text.textContent = "Error, please try again"
        });
}
button.addEventListener("click", get_advice);