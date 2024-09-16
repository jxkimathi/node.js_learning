// Allows us to work with events in node.js
// An event is an occurrence that has happened in the application that we can respond to
// eventEmitter.on().emit()

const eventEmitter = require("node:events");
const emitter = new eventEmitter;

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping} toppings!`);
});

emitter.on("order-pizza", (size) => {
    if (size === "large") {
        console.log("Serving complimentary drink!");
    }
});

// Event driven programming
console.log("Do work before the event");
emitter.emit("order-pizza", "large", "mushroom");
