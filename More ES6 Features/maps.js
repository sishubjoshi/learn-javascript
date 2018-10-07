// Maps = key-value pairs - can use any type as a key or value

const map1 = new Map();

// set keys

const key1 = 'something',
    key2 = {},
    key3 = function() {};


// set map values by key

map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');


// console.log(map1.get(key2));

// count values

// console.log(map1.size);

// Iterating maps

// using for...of get keys and values
for (let [key, value] of map1) {

    console.log(`${key} = ${value}`);

}


// iterate keys only
for (let key of map1.keys()) {

    console.log(key);

}


// iterate values only
for (let values of map1.values()) {

    console.log(values);

}


// loop with foreach

map1.forEach(function(value, key) {
    console.log(`${key} = ${value}`);
});



// convert to arrays

// create an array of the key value pairs

const keyvalarr = Array.from(map1);
console.log(keyvalarr);

// array of values
const valarr = Array.from(map1.values());
console.log(valarr);