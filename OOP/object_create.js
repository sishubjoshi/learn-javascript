const Student = {
    greeting: function() {
        return `hello there ${this.firstName} ${this.lastName}`
    }
}

const joshi = Object.create(Student);

joshi.firstName = 'sishub';
joshi.lastName = 'joshi';
joshi.age = 18;

console.log(joshi);


const demo = Object.create(Student, {
    firstName: { value: 'demo' },
    lastName: { value: 'remo' },
    age: { value: 1 }
});

console.log(demo);

console.log(demo.greeting());