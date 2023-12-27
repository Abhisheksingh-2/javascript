// concation in string.
let name='abhishek singh'
let myPercentage='85'
console.log(`Hello my name is ${name} my percentage is ${myPercentage}`)

// using method for accessing string 
//length method 
let name1=`hello my name is ${name}`
console.log(name1.length);


// charAt :- It is a method which is used to get the position of the character in the string.
console.log(name1.charAt(4));

// indexOf:-It is a method which is used to get the character on which position of the string.
console.log(name1.indexOf('m'))
//toLowerCase: it is used to lower the string which passed by the user
console.log(name.toLowerCase());
console.log(name.toLocaleUpperCase());
//toUpperCase: it is used to upper the string which passed by the user
console.log(name.toUpperCase());
console.log(name.toLocaleLowerCase())
//match():- It is used to search a string against any regularExpression and return the match as an array.
let name2='abhishekabhi'
let name3=name2.match(/abhi/);
console.log(name3);
// trim():- It is used to remove the white spaces from both ends of the given string.
console.log("   abhi  ".trim());
console.log(myPercentage.valueOf(String))
