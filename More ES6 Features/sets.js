// SETS- STORE UNIQUE VALUES OF ANY TYPE

const set1 = new Set();


// add values
set1.add(100);
set1.add('hello');
set1.add({ name: 'john' });
set1.add(100); //It's a set...


// const set2 = new Set([1, true, 'yoyo']);

// console.log(set2);

// console.log(set1);


// // Get count

// console.log(set1.size);

// // check for value
// console.log(set1.has(100));

// console.log({ name: 'John' } === { name: 'John' });


// DELETE
set1.delete(100);

// console.log(set1);


// iterate 

// for..of
for (let i of set1) {
    console.log(i);

}

// for each

set1.forEach(function(value) {
    console.log(value);

});



// convert to arrays

const setarr = Array.from(set1);

console.log(setarr);