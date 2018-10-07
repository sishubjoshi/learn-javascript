// create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');


// console.log(typeof sym2);

// console.log(Symbol('1') === Symbol('1'));


// Unique Object Keys

const key1 = Symbol();
const key2 = Symbol('sym2');

const obj = {};

obj[key1] = 'prop1';
obj[key2] = 'prop1';
obj.key3 = 'prop3';
// console.log(obj[key1]);

// symbols are not numerable in for...in

for (let i in obj) {
    console.log(`${i}: ${obj[i]}`);

}

// Symbol are ignored by json.stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({
    [Symbol('sym1')]: 'prop' }));