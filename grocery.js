var Item = /** @class */ (function () {
    function Item(name, price, dept) {
        this.name = name;
        this.price = price;
        this.dept = dept;
        this.item = name + " " + price + " " + dept;
    }
    return Item;
}());
function getItemValues(item) {
    return item.name + " " + item.price + " " + item.dept;
}
var cart = [new Item("Eggs", "2.99", "1"), new Item("Milk", "4.99", "1"), new Item("Bacon", "7.99", "1")];
//cart.push( new Item("Eggs","2.99","1"));
//cart.push( new Item("Milk","4.99","1"));
//cart.push( new Item("Bacon","7.99","1")); 
function printCart(cart) {
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var i = cart_1[_i];
        getItemValues(i);
    }
    return cart;
}
document.body.textContent = printCart(cart);
//I think it would help if you didn't use the console.log and wrote the script directly. 
//The way I would do it is after I declare my function name and parameters, 
//I would declare a variable that is my print string template 
//(this is what I want where), then have the loop cycle through it. 
//It would then return this string variable that has been looped. 
//Right now you're printing to the console which is fine 
//but is really a testing method to do. 
//You might want to just be more specific in what you want placed.
