// Import and export patterns in Node.js

// First Pattern of exporting:
//      * Write function
//      * End with module.exports = function
const add = (a, b) => {
    return a + b;
};
module.exports = add;

const mul = (a, b) => {
    return a * b;
}


// Second pattern of exporting
//      module.exports = function () {}


// Third pattern of exporting
module.exports = {
    add: add,
    mul: mul
}

// Fourth pattern of exporting
module.exports.div = (a, b) => {
    return a / b;
}

module.exports.exp = (a, b) => {
    return a ** b;
}
