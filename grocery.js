var Grocery = /** @class */ (function () {
    function Grocery(itemName, price, quantity) {
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
        this.itemInfo = itemName + " " + price + " " + quantity;
    }
    return Grocery;
}());
var cart = [];
cart.push(new Grocery("Eggs", "2.99", "1"));
cart.push(new Grocery("Milk", "4.99", "1"));
cart.push(new Grocery("Bacon", "7.99", "1"));
function displayCart(cart) {
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var i = cart_1[_i];
        console.log(i);
    }
    return "Hello, here is what is in your cart: " + cart;
}
//let shopper = ["item1", "item2", "item3"];
document.body.textContent = displayCart(cart);
