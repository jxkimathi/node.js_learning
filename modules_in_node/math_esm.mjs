// Exporting a function through the ES method
const add = (a, b) => {
    return a + b;
};

// Method 1
//export default add;

// Method 2 of exporting
// export default {function}
const sub = (a, b) => {
    return a - b;
};

// Method 3 of exporting
const mul = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    return a / b;
};

export default {
    add,
    sub,
    mul,
    div
};