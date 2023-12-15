//1.1STRING convertion
let string="33abc";
let numberIn=Number(string)
console.log(numberIn)
console.log(typeof(numberIn));
// In this convertion  we get the output is NaN which mean:- Not A Number
//this string is not a number but type of NUMBER. 
let str=null
let booleanNumber=Boolean(str)
console.log(booleanNumber)  //When we pass string as a NULL the output show FALSE  and type of  Boolean
console.log(typeof(booleanNumber));
//when put  anything in except 0 or null we get  TRUE value of a String.
let str1='false'
let boolean=Boolean(str1)
console.log(boolean)
console.log(typeof(boolean))

//if we pass number as a string  then we get number and type of number also.
let number='56' 
let numberOutput=Number(number)
console.log(numberOutput)
console.log(typeof(numberOutput));

let number1=true 
let numberOutput1=Boolean(number)
console.log(numberOutput1)
console.log(typeof(numberOutput1));
