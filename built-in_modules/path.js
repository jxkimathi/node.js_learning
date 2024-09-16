// Path module provides utilities for working with file and directory paths

const path = require("node:path");

// Return path to the file
console.log(__filename);

// Return path to directory
console.log(__dirname);

// Return the last portion of the path
//      path.basename()
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// Return the extension of the path
//      path.extname()
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// Returns the object whose properties are significant
//      path.parse()
console.log(path.parse(__filename));

// Returns whether the path is absolute or not
//      path.isAbsolute()
console.log(path.isAbsolute(__filename));

// Performs concatenation of strings
// Normalizes the resulting path
//      path.join()
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "../local_modules/data.json"));

// Results a sequence of paths into an absolute path
//      path.resolve()
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "../local_modules/data.json"));
