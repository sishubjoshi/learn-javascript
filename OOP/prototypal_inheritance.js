// constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}



//  hello

Person.prototype.sayHello = function() {
    return `Hi there Mr/Ms ${this.firstName} ${this.lastName}`;
}

const person = new Person('sishub joshi');

console.log(person.sayHello());


function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer

Customer.prototype.constructor = Customer;

// create a customer
const customer = new Customer('sishub', 'joshi', 99999, 'premium');


// customer greeting(overwriting)

Customer.prototype.sayHello = function() {
    return `Hi there Mr/Ms ${this.firstName} ${this.lastName}, welcome to the company`;
}

// console.log(customer);
// console.log(customer.sayHello());