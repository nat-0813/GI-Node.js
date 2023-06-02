// Create a node application that will read all of the planets in the solar system from a text file and print them to the console.
// Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto) 

const fs = require('fs');
const textIn =  fs.readFileSync('./data.txt', 'utf-8');
console.log(textIn);