function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    if (playerPressed === 'Escape') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase;

    if (playerPressed === expectedAlphabet) {
        console.log('WOW! you got a point');

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseFloat(currentScoreText);

        const newScore = currentScore + 1;

        currentScoreElement.innerText = newScore;

        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('Opps you lost a life');

        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseFloat(currentLifeText);

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;

        if (newLife < 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function play() {
    hideElementsById('home');
    showElementsById('playground');
    hideElementsById('score');

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame();
}

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    addBgColorById(alphabet);
}

function gameOver() {
    hideElementsById('playground');
    showElementsById('score');

    const finaleScore = getElementValueById('current-score');
    setTextElementValueById('finale-score', finaleScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBgColorById(currentAlphabet);
}