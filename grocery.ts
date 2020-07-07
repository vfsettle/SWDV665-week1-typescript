class Item {
    item: string;
    constructor(public name: string, public price: string, public dept: string) {
        this.item = name + " " + price + " " + dept;
    }    
    
}

interface Item {
    name: string;
    price: string;
    dept: string;
}

function getItemValues (item:Item) {
    return item.name + " " + item.price + " " + item.dept; 
}


let cart = [new Item("Eggs","2.99","1"),new Item("Milk","4.99","1"), new Item("Bacon","7.99","1") ];
//cart.push( new Item("Eggs","2.99","1"));
//cart.push( new Item("Milk","4.99","1"));
//cart.push( new Item("Bacon","7.99","1")); 

function printCart(cart) {
    for (let i of cart) {
        getItemValues(i)
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