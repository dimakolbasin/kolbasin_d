document.onclick = event => {
    if (event.target.classList.contains('btn-plus')) {
        const dataId = event.target.dataset.id;
        addToCart(dataId);
    } else if (event.target.classList.contains('open-carts')){
        openPopup()
    } else if (event.target.classList.contains('burger-nav')) {
        modalPhone()
    } else if (event.target.classList.contains('modal-phone__text')) {
        closeModalPhone()
    }
}

/*модальное window*/

let modal = document.getElementById('modal');
let modalWrapper = document.getElementById('modal-wrapper');
let cartCounter = document.getElementById('body-counter');


class Popup {

    constructor() {

        const content = document.importNode(modal.content, true);


        content.querySelector('.modal__btn-close').onclick = (event) => {
            this.closePopup();
        };

        content.querySelector('.modal__btn-drop').onclick = (event) => {
            this.removeAllProducts();
        };

        this.wrapper = content.querySelector('.list__product');
        /*const productLine = new ProductLine(wrapper);*/
        this.renderList();
        modalWrapper.appendChild(content);
    }

    /*constructor  =================*/
    closePopup() {
        modalWrapper.innerHTML = '';
    }


    renderList() {
        listProductsInCart.forEach((product, index) => {
            const productLine = new ProductLine(this.wrapper, product, index);
            productLine.updateValues = (updatedProduct) => {
                listProductsInCart.set(index, updatedProduct);
            }

            productLine.deleteLine = () => {
                listProductsInCart.delete(index);
            }
        });
    }

    removeAllProducts() {
        cartCounter.innerHTML = '';
        listProductsInCart.clear();
        this.wrapper.innerHTML = '';

    }
}

let productLine = document.getElementById('product-line');

class ProductLine {
    constructor(wrapper, product, index) {

        const productContent = document.importNode(productLine.content, true);

        this.lineElement = productContent.getElementById('items');
        this.productName = productContent.getElementById('name');
        this.productCount = productContent.getElementById('count');
        this.productPrice = productContent.getElementById('price');


        productContent.getElementById('drop-product').onclick = (event) => {
            this.deleteLine();
            this.lineElement.remove();
        };

        this.productName.innerText = product.name;
        this.productPrice.innerText = product.price;


        this.index = index;
        const counter = new Counter(this.productCount);
        counter.value = product.count;
        counter.updateCounter = (value) => {
            this.updateValues({
                name: product.name,
                count: value,
                price: product.price,
                totalPrice: value * product.price
            });
            this.productPrice.innerText = value * product.price;
        };


        wrapper.appendChild(productContent);
    }


}

class Counter {
    set value(val) {
        this.valueInput.value = isNaN(val) ? 0 : val;
    }

    get value() {
        return +this.valueInput.value;
    }

    constructor(wrapper) {
        const template = document.getElementById("counterTemplate");
        const content = document.importNode(template.content, true);

        this.valueInput = content.querySelector(".jsValue");
        this.decreaseButton = content.querySelector(".jsDecrease");
        this.increaseButton = content.querySelector(".jsIncrease");

        this.valueInput.onblur = (event) => (this.value = event.target.value);
        this.increaseButton.onclick = () => this.increase();
        this.decreaseButton.onclick = () => this.decrease();

        wrapper.appendChild(content);
    }

    increase() {
        this.value++;
        this.updateCounter(this.value);
    }

    decrease() {
        this.value--;
        this.updateCounter(this.value);
    }
}


function openPopup() {
    preloader();
    // renderCart();
    setTimeout(function () {
        /*modal.classList.add('show');
        modalContainer.classList.add('show');*/
        let loader = document.querySelector('.loader__container');
        loader.classList.remove('show');
        const popup = new Popup();

    }, 1000);
}

/*preloader*/

const preloader = () => {
    let loader = document.querySelector('.loader__container');
    loader.classList.add('show');
}

/*modal phone*/

const modalPhone = () => {
    let modalPh = document.querySelector('.modal-phone');
    modalPh.classList.add('show');
}

const closeModalPhone = () => {
    let modalPhCls = document.querySelector('.modal-phone');
    modalPhCls.classList.remove('show');
}


/*busket add*/


// const totalPriceCart = new Map();
const listProductsInCart = new Map();


let generalCatalog = [
    {name: 'IPHONE XR 512GB', price: 1300, count: 0, totalPrice: 0},
    {name: 'IPHONE XR 256GB', price: 1100, count: 0, totalPrice: 0},
    {name: 'IPHONE XR 128GB', price: 900, count: 0, totalPrice: 0},
    {name: 'IPHONE XR 64GB', price: 799, count: 0, totalPrice: 0},
    {name: 'IPHONE XR 64GB DUAL SIM', price: 1000, count: 0, totalPrice: 0},
    {name: 'IPHONE XR 128GB DUAL SIM', price: 1300, count: 0, totalPrice: 0}
];

const productsWithDiscount = ['IPHONE XR 512GB', 'IPHONE XR 256GB', 'IPHONE XR 128GB'];

const newDiscount = (discount) => {
    return (price) => {
        return price - price * discount;
    };
};


const transformPriceByDiscount = (product) => {
    return {
        ...product,
        price: (newDiscount(0.5)(product.price)) // add discount 50%
    };
}


function getCatalogWithDiscount(generalCatalog, productsWithDiscount) {

    return generalCatalog.map((product) => {
        if(productsWithDiscount.includes(product.name)){
            return transformPriceByDiscount(product);
        } else {
            return product;
        }

    })
}


/**/




const addToCart = (index) => {

    const catalog = getCatalogWithDiscount(generalCatalog, productsWithDiscount);
    /*const product = catalog[index];*/

    if (listProductsInCart.has(index) === true) {
        let productFromCart = listProductsInCart.get(index)
        ++productFromCart.count;
        productFromCart.totalPrice = productFromCart.count * productFromCart.price;
        listProductsInCart.set(index, productFromCart);


    } else {
        const product = catalog[index];
        /*listProductsInCart.price = priceItem;*/
        ++product.count;
        product.totalPrice = product.count * product.price;
        listProductsInCart.set(index, product);


    }

    document.querySelector('.body-counter').innerText = (counterCart());
}


const counterCart = () => {
    let counter = 0;
    listProductsInCart.forEach(value => counter += value.count);

    return counter
}



