var Grocery = /** @class */ (function () {
    function Grocery(item, price, quantity) {
        this.item = item;
        this.price = price;
        this.quantity = quantity;
        this.groceryItem = item + " " + price + " " + quantity;
    }
    return Grocery;
}());
function review(cart) {
    return "Item: " + cart.item + " " + "Price: $" + cart.price + " " + "Quantity: " + cart.quantity;
}
var basket = new Grocery("Eggs", 3.99, 1);
document.body.textContent = review(basket);
