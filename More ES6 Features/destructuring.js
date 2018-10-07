// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b, ...rest } = { a: 100, b: 200, c: 300 });
console.log(a, b, rest);

// array destructuring


// const people = ['John', 'Beth', 'Mike'];

// const [p1, p2, p3] = people;

// console.log(p1, p2, p3);


// function get() {
//     return ['a', 'b', 'c']
// }

// let p1, p2, p3;
// [p1, p2, p3] = get();

// console.log(p1, p2, p3)


// Object destructuring

const person = {
    name: 'John',
    age: 22,
    city: 'alabasta'
}



// old syntax

// const name = person.name,
//     age = person.age;

// new method (destructuring)

const { name, age, city } = person;

console.log(name, age, city);