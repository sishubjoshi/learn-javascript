// alert('ready to go');

// hardcoded function
function Student() {
    this.name = 'sishub';
    this.age = 18;
    this.gender = 'male';
}

// const sishub = new Student();


// generic
function Student(name, age, gender, dob) {
    this.name = name;
    this.gender = gender;
    this.birthday = dob;
    this.calculateAge = function() {
        const year = this.birthday.split('-')[2];
        return Math.abs(year - (new Date()).getFullYear());
    }

}

const sishub = new Student('sishub', 18, 'male', '22-03-2000');

console.log(sishub);
console.log(sishub.calculateAge());

/**
 some useful date functions
new Date().getDate() // Get the day as a number (1-31)
new Date().getDay() // Get the weekday as a number (0-6)
new Date().getFullYear() // Get the four digit year (yyyy)
new Date().getHours() // Get the hour (0-23)
new Date().getMilliseconds() // Get the milliseconds (0-999)
new Date().getMinutes() // Get the minutes (0-59)
new Date().getMonth() // Get the month (0-11)
new Date().getSeconds() // Get the seconds (0-59)
new Date().getTime() // Get the time (milliseconds since January 1, 1970)
 */