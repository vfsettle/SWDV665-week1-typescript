class Grocery {
    groceryItem: string;
    constructor(public item: string, public price: number, public quantity: number) {
        this.groceryItem = item + " " + price + " " + quantity;
    }
}

interface Cart {
    item: string;
    price: number;
    quantity: number;
}

function review(cart: Cart) {
    return "Item: " + cart.item + " " + "Price: $" + cart.price + " " + "Quantity: "+ cart.quantity;
}

let basket = new Grocery("Eggs", 3.99, 1);

document.body.textContent = review(basket);