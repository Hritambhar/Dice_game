const firstRandomNum =
Math.floor(Math.random() * 6) + 1

const firstDiceImage = 'makess/dice' + firstRandomNum+ '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

const secondRandomNum =
Math.floor(Math.random() * 6) + 1

const secondDiceImage = 'makess/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if(firstRandomNum>secondRandomNum) {
    document.querySelector('h1').innerHTML = 'The Winner is User 1';

} else if(firstRandomNum<secondRandomNum) {
    document.querySelector('h1').innerHTML = 'the winner is user2';
} else {
    document.querySelector('h1').innerHTML = "its a draw";
}