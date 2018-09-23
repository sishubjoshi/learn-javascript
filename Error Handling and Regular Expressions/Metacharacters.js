let re;
// literal Characters
re = /hello/;
re = /hello/i;

// meta characters symbols
re = /^h/i; // Starts with h
re = /d$/i; // Ends with h
re = / world$/i;

re = /^hello$/i; // Must begin and end with

re = /h.llo/i; // Matches any one character
re = /h*llo/i; // Matches any one character


re = /gre?a?y/i; // optional character

re = /gre?a?y\?/i; // Escape character

// Brackets [] - character sets
re = /gr[ae]y/i; //must be an a or e
re = /[^gf]ray/i; // !starts with g or f
re = /[A-Z]ray/; //matches uppercase or lowercase if [a-z]
re = /[A-Za-z]ray/; // match both the cases
re = /[0-9]ray/; // match any digit
re = /[0-9][0-9]ray/;

// braces {} - quantifiers

re = /Hel{2}o/i; // Must occur exactly {n} amount of time

re = /Hel{2,4}o/i;

re = /Hel{2,}o/i; // Must occur atleast 2 times

// parenthesis () - grouping

re = /^([0-9]x){3}$/;



//  Shorthand character classes

re = /\w/; // Word character - alphanumeric or _
re = /\w+/; //  one or more characters
re = /\W/; //  Not word characters
re = /\d+/; //  Match any Digit 0 or more times
re = /\D/; // Match any non digit
re = /\s/; // Match whitespace character
re = /\S/; // Match non whitespace character
re = /Hell\b/i; // word boundary


// Assertions

re = /x(?=y)/; // Matches x only if its followed by 'y'
re = /x(?=!y)/; // Matches x only if its not followed by 'y'


// string to match 
const str = '3x3x3x';


// log results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);