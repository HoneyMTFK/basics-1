const firstNumInput = document.getElementById('firstNum');
const secondNumInput = document.getElementById('secondNum');
const itemBoxSelect = document.getElementById('itemBox');
const resultButton = document.getElementById('resultBtn');
const spanResult = document.getElementById('respn');

function calc () {
    switch (itemBoxSelect.value) {
        case ("add"):
            return spanResult.textContent = Number(firstNumInput.value) + Number(secondNumInput.value);
        case ("multi"):
            return spanResult.textContent = Number(firstNumInput.value) * Number(secondNumInput.value);
        case ("sub"):
            return spanResult.textContent = Number(firstNumInput.value) - Number(secondNumInput.value);
        case ("div"):
            return spanResult.textContent = Number(firstNumInput.value) / Number(secondNumInput.value);
        default:
            alert ("Error!!!");
    }
}

resultButton.addEventListener ('click', calc);