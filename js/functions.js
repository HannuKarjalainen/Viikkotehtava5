document.getElementById('dice').addEventListener('click', rollDice);

function rollDice() {

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var imagePath = 'img/' + randomNumber + '.png';
    document.getElementById('dice').innerHTML = '<img src="' + imagePath + '">';
}