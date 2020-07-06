class Grocery {
    item: string;
    constructor(public name: string, public price: string, public qty: string) {
    }
    
}

let cart = [];
cart.push(new Grocery("Eggs","2.99","1"));
cart.push(new Grocery("Milk","4.99","1"));
cart.push(new Grocery("Bacon","7.99","1"));

function displayCart(cart: string[]) {
    for (let i of cart) {
        console.log(i)
    }
    return "Hello, here is what is in your cart: " + cart;
}

document.body.textContent = displayCart(cart);
