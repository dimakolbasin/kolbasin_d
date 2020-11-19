/*counter*/

/*var counter = 0;

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
  }*/



/*модальное окно*/

let modal = document.querySelector('.modal');
let modalContainer = document.querySelector('.modal_container')
let modalBtn = document.querySelector('.open-cart');
let closeCart = document.querySelector('.close-cart');



modalBtn.addEventListener('click', function(){
    setTimeout(function() {
    modal.classList.add('show');
    modalContainer.classList.add('show');
    let loader = document.querySelector('.loader');
    loader.classList.remove('show');
    /*modalBg.classList.add('show');*/
    }, 2000);
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
    modalContainer.classList.remove('show');
}

/*busket add*/


const cart = new Map();

const catalog =[
    {name:'IPHONE XR 512GB', price:1300, count:0},
    {name:'IPHONE XR 256GB', price:1100, count:0},
    {name:'IPHONE XR 128GB', price:900, count:0},
    {name:'IPHONE XR 64GB', price:799, count:0},
    {name:'IPHONE XR 64GB DUAL SIM', price:1000, count:0},
    {name:'IPHONE XR 128GB DUAL SIM', price:1300, count:0}
];

/* )*/

const addToCart = (index) => {
    const product = catalog[index];
    counter = 0
    if(!!product) {
        product.count = ++product.count;
        product.price = product.count * product.price;
        cart.set(index, product)
    }

const totalPrice = () => {
    let count = 0;

    cart.forEach(value => count += value.price)

    return count
}

cart.set('total', totalPrice());

console.log(cart);

}











/*remove buscket*/

/*function removeToCarts () {
    document.getElementById('modalId').innerText = "";
    counter = 0
    document.querySelector('.body-counter').innerText = "";
}*/


/*preloader*/

function preloader () {
      let loader = document.querySelector('.loader');
      loader.classList.add('show');
}

/*modal phone*/

function modalPhone() {
    let modalPh = document.querySelector('.modal-phone');
    modalPh.classList.add('show');
}

function closeModalPhone () {
    let modalPhCls = document.querySelector('.modal-phone');
    modalPhCls.classList.remove('show');
}


