function hideElementsById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementsById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const ElementValue = element.innerText;
    const value = parseFloat(ElementValue);
    return value; 
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets =  alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}