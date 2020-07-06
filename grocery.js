var Grocery = /** @class */ (function () {
    function Grocery(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
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
document.body.textContent = displayCart(cart);
