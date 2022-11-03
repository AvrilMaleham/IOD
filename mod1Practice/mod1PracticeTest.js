var Sentiment = require ('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result);    // Score: -2, Comparative: -0.666

function add (a,b) {
    return a + b
};
console.log(add(1,2));

function sub (a,b) {
    return a - b
};
console.log(sub(1,2));

function mul (a,b) {
    return a * b
};
console.log(mul(1,2));

function div (a,b) {
    return a / b
};
console.log(div(1,2));

console.log("hello")