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

const totalPriceCart = new Map();
const cart = new Map();

const getCatalog = () => [
    {name:'IPHONE XR 512GB', price:0, count:0},
    {name:'IPHONE XR 256GB', price:0, count:0},
    {name:'IPHONE XR 128GB', price:0, count:0},
    {name:'IPHONE XR 64GB', price:0, count:0},
    {name:'IPHONE XR 64GB DUAL SIM', price:0, count:0},
    {name:'IPHONE XR 128GB DUAL SIM', price:0, count:0}
];

/* )*/

const addToCart = (index, priceItem) => {

    const catalog = getCatalog();
    const product = catalog[index];

    if(!!product && cart.has(index) === false) {

        ++product.count;
        product.price += priceItem;
        cart.set(index, product);

    } else if(cart.has(index) === true) {
        let productFromCart = cart.get(index)
        ++productFromCart.count;
        productFromCart.price += priceItem;
        cart.set(index, productFromCart);

    /*cart.forEach((value, key) => {
        (`${index}: ${++value.count}`);
        (`${index}: ${value.price+=(priceItem)}`);
    });*/


 }
    console.log(cart);
    document.querySelector('.body-counter').innerText=(counterCart());
    totalPriceCart.set('Total Price', totalPrice());
 }


const counterCart = () => {
    let counter = 0;
    cart.forEach(value => counter += value.count);

    return counter
}

const totalPrice = () => {
    let count = 0;
    cart.forEach(value => count += value.price)
    return count
}



/*
const renderCart = () => {
    let newElem = document.createElement("div");
    newElem.append(123);

    document.getElementById('modalId').appendChild(newElem);
}
*/






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


