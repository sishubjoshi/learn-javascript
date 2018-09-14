class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipFee() {
        return 500;
    }
}

const john = new Customer('john', 'doe', 99999, 'gym');


console.log(john.greeting());

console.log(Customer.getMembershipFee());