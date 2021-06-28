function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses   = cheeses;
    pizza.toppings  = toppings;
    return pizza;
}

p1 = pizzaOven ("deep dish", "traditional", ["mozarella"], ["pepperoni", "sausage"]);
console.log(p1);

p2 = pizzaOven ("hand tossed", "marinara", ["mozzarella, feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

p3 = pizzaOven ("thin", "bbq", ["shredded provolone"], ["chicken", "bacon", "green peppers", "onions"]);
console.log(p3);

p4 = pizzaOven ("thin", "tomato basil marinara", ["mozzarella", "parmesan"], ["pepperoni", "mushroom", "spinach", "black olives"]);
console.log(p4);