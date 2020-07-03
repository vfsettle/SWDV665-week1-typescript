class Grocery {
    itemInfo: string;
    constructor(public itemName: string, public price: string, public quantity: string) {
        this.itemInfo = itemName + " " +  price + " " +  quantity;
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
//let shopper = ["item1", "item2", "item3"];

document.body.textContent = displayCart(cart);
