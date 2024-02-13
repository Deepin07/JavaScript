
const button = document.getElementById('button');
const myLabel = document.getElementById('myLabel');
let min = 1;
let max = 6;
let randomNum;

button.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}
