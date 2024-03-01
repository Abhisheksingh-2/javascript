

console.log("Hello from the First line");
function fn (){
    console.log("Hello from inside of the Function");
}
fn();
console.log("Hello from the Last Line");


//asynchronus method

console.log("This is a my First line");

setTimeout(function(){
 console.log("Hello! I am Call inside the function");   
},1000);

console.log("This is a Last line");