/*count*/

var counter = 0;

function updateCounter() {
    counter++;
    document.querySelector('.body-counter').innerText = counter;
}

function downCounter() {
    if (counter > 0){
    counter--;
}
document.querySelector('.body-counter').innerText = counter;
}

let elements = document.querySelectorAll('.btn-plus')
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', updateCounter);
  }

let elem = document.querySelectorAll('.btn-minus')
    for (let i = 0; i < elements.length; i++) {
        elem[i].addEventListener('click', downCounter);
  }



/*модальное окно*/

let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.btnjs');
let closeCart = document.querySelector('.close-cart');

modalBtn.addEventListener('click', function(){
    modal.classList.add('show');
    /*modalBg.classList.add('show');*/
});

/*document.addEventListener('click', function(e){
    let click = e.target.classList.value;
    if (click === 'modal_bg show') {
        modal.classList.remove('show');
        modalBg.classList.remove('show');
    }
})*/

function closeCarts () {
    modal.classList.remove('show');
}

/*busket add*/


/*
let cart = [
    {'name':'IPHONE XR 512GB','price':1300},
    {'name':'IPHONE XR 256GB','price':1100},
    {'name':'IPHONE XR 128GB','price':900},
    {'name':'IPHONE XR 64GB','price':799},
    {'name':'IPHONE XR 64GB DUAL SIM','price':1000},
    {'name':'IPHONE XR 128GB DUAL SIM','price':1300}];

cart.forEach( (carts) => {
    console.log(carts)
});
*/



function addToCarts (item){
    let newElem = document.createElement("li");
    newElem.append(item);
    document.getElementById('modalId').appendChild(newElem);
};








