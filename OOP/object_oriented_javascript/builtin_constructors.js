// strings
const name = 'sishub';
const name1 = new String('sishub');


console.log(name);
console.log(name1);

console.log(typeof name); // a string
console.log(typeof name1); // an object


if (name === 'sishub') { // it will work
    console.log('yes')
} else {
    console.log('no');
}

if (name1 === 'sishub') { // it will not work
    console.log('yes') // but if we use 2 '=='
} else { // it will work
    console.log('no'); // so it's better to avoid
}

// Number
const num = 5;
const num1 = new Number(5);

// boolean
const bool1 = true;
const bool2 = new Boolean(true);

// functions

const getSomething = function(a, b) {
    return a + b;
}
console.log(getSomething(2, 3));


const getSomething2Eat = new Function('x', 'y', 'return 1 + 1');


// Objects

const me = { name: 'me' };
console.log(me);

const me2 = new Object({ name: 'me' });

console.log(me2);

// Arrays

const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const ree = /\w+/;
const ree2 = new RegExp('\\w+');

console.log(ree);
console.log(ree2);