const pizzaShop = require("./pizza_shop");
const PizzaShop = new pizzaShop;

PizzaShop.on("order", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping} toppings!`)
})

PizzaShop.order("large", "mushroom");
PizzaShop.displayOrderNumber();
