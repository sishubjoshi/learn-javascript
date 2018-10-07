// iterator example

// function nameIterator(names) {
//     let next = 0;

//     return {
//         next: function() {
//             return next < names.length ?
//             {value: names[next++], done: false} :
//             { done: true }
//         }
//     }
// }


// create an array of names
// const namesArr = ['jack','john','jane']
// init iterator
// const names = nameIterator(namesArr);


// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// console.log('end of iterators');


// // generators
// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());



// Id creator


function* createIds() {
    let index = 1;

    while(true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);

