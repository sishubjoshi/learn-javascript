class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = dob;
    }

    greeting() {
        return `hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge() {
        const year = this.birthday.split('-')[2];
        return Math.abs(year - (new Date()).getFullYear());
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y
    }

}


const mary = new Person('Mary', 'smith', '12-03-1989');
mary.getsMarried('thompson');
console.log(mary);

console.log(Person.addNumbers(1, 2));