/* Function:Functions are one of the fundamental building blocks in JavaScript.
JavaScript function is a set of statements that take inputs, do some specific computation, and produce output.
A JavaScript function is executed when “something” invokes it (calls it).*/

// create simpe function
function Engine(name){
console.log(`This ${name} is the Type of Engine `)
}
// call the function
Engine("Stream")

//Modulus of two number
function Modulus(num1,num2){
return (num1%num2); //NOTE: by default after return the value of the function nothing to read below the return. 
}
const result=Modulus(5,2)
console.log("Result:",result)

// using if else statement
function displayUser(Username,id){
    if(Username===undefined && id=== undefined){
        console.log("PLEASE ENTER THE USERNAME AND USERID")
    }
    else{
    return (`${Username} this is your userId ${id}`)
}
}
console.log(displayUser("Abhishek Singh","USER123"))
//When user not pass value we set the default value
function greeting(name="Everyone"){
    if(!name){
        console.log("PLEASE enter the name:")
    }
    return(`HAPPY NEW YEAR ${name}`)
}
console.log(greeting())

// {...}rest parameter : it allow the function to accept  indefinite number of input as it array.
function Calculatevalues(num1,num2,...num){
    console.log(num1)
    console.log(num2);
    return num
}
console.log(Calculatevalues(10,20,30,40))

// pass argument in the function through the OBJECT
const Student={
    Student_name:"ABHISHEK SINGH",
    Student_age:23,
    Student_course:"B.Tech"
}
function StudentIntro(anyobject){
    console.log(`My name is ${anyobject.Student_name} and I am  ${anyobject.Student_age} years old ,I have completed my ${anyobject.Student_course}`)
}
StudentIntro(Student);

// pass argument in the function through the ARRAY
function ArrayPass(getarray){
return getarray[3];
}
console.log(ArrayPass([100,200,300,400,500]))