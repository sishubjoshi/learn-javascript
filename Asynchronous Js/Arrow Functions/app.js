// const sayHello = function() {
//     console.log('hello');

// }


// convert to arrow functions
// method 1
const sayHello = () => {
        console.log('hello');

    }
    // method 2 - It doesnot need code blocks
const sayHi = () => console.log('hi');

//  return hola { One line returns }
const sayhola = () => 'hola';


// to return an object
// wrap paranthesis around the object
const obj = () => ({ msg: 'hello' });

// what is we have parameters
// we dont even need () if there is only one parameter
const hello = name => console.log(`hello: ${name}`);
// but multiple params need paranthesis


// next one 
const users = ['joshi', 'sishub', 'himanshu', 'yitendra', 'dinesh']
    // short version
    // const nameLengths = users.map((name) => {
    //     return name.length;
    // });

// shortest version
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);




sayHello();
sayHi();
console.log(sayhola());
console.log(obj());
hello('joshi');