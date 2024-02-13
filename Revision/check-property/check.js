
const checkBox = document.getElementById('checkBox');
const visa = document.getElementById('visa');
const Mastercard = document.getElementById('Mastercard');
const Paypal = document.getElementById('Paypal');
const mySubmit = document.getElementById('mySubmit');
const subscribe = document.getElementById('subscribe')
const payment = document.getElementById('payment')


mySubmit.onclick = function () {

    if (checkBox.checked) {
        subscribe.textContent = `you are Subscribed`;
    }
    else {
        subscribe.textContent = `you are not Subscribed`;
    }

    if (visa.checked) {
        payment.textContent = `you are paying with Visa`;
    }
    else if (Mastercard.checked) {
        payment.textContent = `you are paying with Mastercard`;
    }
    else if (Paypal.checked) {
        payment.textContent = `you are paying with Paypal`;
    }
    else {
        payment.textContent = `please select a payment method`;
    }

}

