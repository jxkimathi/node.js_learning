// Functions are first class objects
// A function can be passed as an argument to a function
// A function can also be returned as values from other functions.

// Synchronous Function = Executed immediately
function greet (name) {
    console.log(`Hello ${name}!`);
}

// Higher Order Function -> greetJude (function)
// Callback function -> greetFn()
function greetJude (greetFn) {
    const name = 'Jude';
    greetFn(name);
}

greetJude(greet);
