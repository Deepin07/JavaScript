
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const resultElement = document.getElementById('resultElement');
let age;

submit.onclick = function () {

    age = input.value;
    age = Number(age)

    if (age >= 100) {
        resultElement.textContent = `You are too old for this site`
    }
    else if (age == 0) {
        resultElement.textContent = `You are not even born yet`
    }
    else if (age >= 18) {
        resultElement.textContent = `You can enter the site`
    }
    else if (age < 0) {
        resultElement.textContent = `You cannot enter then site`
    }
    else {
        resultElement.textContent = `You must be 18+ to enter the site`
    }

}


