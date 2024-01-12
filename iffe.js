// IFFE: An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman.
//named iffe function
function student(){
    console.log("hello world")
}
student(); // semi colon is used to break a line which is necessary to call the other in iffe.
(function student(){
    console.log("Hello World")
})();// First () define the function and Second () bracket is define the call the function it immediatly invoked function.
// if you not put semicolon in the end the error show in your terinal.therefore it is compulsary to put the semicolon run the other program without any error.

//simple iffe function
(()=>{
    console.log("DataBase")
})();

((name,age)=>{
    console.log(`Student probile: 
    Student name: ${name}
    Student age:${age} `)
})("ABHISHEK",23);