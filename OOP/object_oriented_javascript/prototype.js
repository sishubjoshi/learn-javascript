// Object.prototype

function Student(firstName, lastName, gender, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthday = dob;
    // this.calculateAge = function() {
    //     const year = this.birthday.split('-')[2];
    //     return Math.abs(year - (new Date()).getFullYear());
    // }

}
// Calculates the age 
Student.prototype.calculateAge = function() {
    const year = this.birthday.split('-')[2];
    return Math.abs(year - (new Date()).getFullYear());
}

// Retuns the full name 
Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// first calls calculateAge() the returns the value
Student.prototype.isAdult = function() {
    return (joshi.calculateAge() >= 18 ? 'yes' : 'no');
}

const joshi = new Student('sishub', 'joshi', 'male', '22-03-2000');
const demo = new Student('demo', 'remo', 'unspecified', '1-1-2018');

console.log(demo);

console.log(joshi.calculateAge());
console.log(joshi.getFullName());
console.log(joshi.isAdult());

console.log(joshi.hasOwnProperty('getFullName')); // returns false
console.log(joshi.hasOwnProperty('firstName')); // returns true