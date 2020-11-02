var counter = 0;
/*var counterr = -1;*/

function updateCounter() {
  document.querySelector('.body-counter').innerText = counter;
  counter++;
}

function downCounter() {
    document.querySelector('.body-counter').innerText = counter;
    if (counter > 0)
{
    counter--;
}
else
{
    brake
};

}

document.querySelector('.btn_js').addEventListener('click', updateCounter);
document.querySelector('.btnn_js').addEventListener('click', downCounter);


