var colours = ['red', 'blue', 'green', 'aqua', 'black'];
var colorIndex = 0;
var counter = 0;

function changeColor() {
  document.querySelector('.box').style.background = colours[colorIndex];
  changeIndex();
}

document.querySelector('.button').addEventListener('click', changeColor);

document.querySelector('.hoverable-block').addEventListener('mouseenter', changeColor);
document.querySelector('.hoverable-block').addEventListener('mouseleave', changeColor);

document.querySelector('.hoverable-block2').addEventListener('mouseover', changeColor);
document.querySelector('.hoverable-block2').addEventListener('mouseout', changeColor);

document.body.addEventListener('click', updateCounter);


function updateCounter() {
  document.querySelector('.body-counter').innerText = counter;
  counter++;
}
