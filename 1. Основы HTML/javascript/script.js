/*counter busket*/

/*const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    })
  })

}

counter();*/





/*count*/

var counter1 = 1;


function updateCounter() {
  document.querySelector('.body-counter').innerText = counter1;
  if (counter1 == 0)
{
    counter1++;
}
else
{
    counter1++;
};

}

function downCounter() {
    document.querySelector('.body-counter').innerText = counter1;

    if (counter1 > 0)
{
    counter1--;
}
else
{
    brake
};

}

let elements = document.querySelectorAll('.btn_js')
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', updateCounter);
  }

let elem = document.querySelectorAll('.btnn_js')
    for (let i = 0; i < elements.length; i++) {
        elem[i].addEventListener('click', downCounter);
  }





/*bascket*/

/*let cart = {
    'IPHONE XR 512GB' : 1,
    'IPHONE XR 256GB' : 1,
    'IPHONE XR 128GB' : 1,
    'IPHONE XR 64GB' : 1,
    'IPHONE XR 64GB DUAL SIM' : 1,
    'IPHONE XR 128GB DUAL SIM' : 1,
};



document.onclick = event => {
    if (event.target.classList.contains('btn_js')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('btnn_js')) {
        minusFunction(event.target.dataset.id);
    }
}

// plus trash
const plusFunction = id => {
    cart[id]++;
    renderCart();
}

//minus trash

const minusFunction = id => {
    if (cart[id]-1 == 0) {
        deleteFunction(id);
        return true;
    };
    cart[id]--
    renderCart();
}

//delete trash

const deleteFunction = id => {
    delete cart[id];
    renderCart();
}



const renderCart = () => {
    console.log(cart);
}

renderCart();*/






/*модальное окно*/

let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.btnjs');
let modalBg = document.querySelector('.modal_bg');

modalBtn.addEventListener('click', function(){
    modal.classList.add('show');
    modalBg.classList.add('show');
});

document.addEventListener('click', function(e){
    let click = e.target.classList.value;
    if (click === 'modal_bg show') {
        modal.classList.remove('show');
        modalBg.classList.remove('show');
    }
})


/*busket add*/


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


function ix1 (){
  document.getElementById('out').append('iphone xr 512gb 1300$');
};

function ix2 (){
  document.getElementById('out').append('iphone xr 256gb 1100$');
};


function ix3 (){
  document.getElementById('out').append('iphone xr 128gb 900$');
};

function ix4 (){
  document.getElementById('out').append('iphone xr 64gb 799$');
};

function ix5 (){
  document.getElementById('out').append('iphone xr 64gb dual sim 1000$');
};

function ix6 (){
  document.getElementById('out').append('iphone xr 128gb dual sim 1300$');
};








