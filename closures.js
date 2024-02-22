function hello(){
    let h='hello everyone';
    console.log(h);
}

hello();
//console.log(h);

function outerfn(){
    let outerVar='I am from the Outer Funtion ';
    function innerfn(){
        console.log(outerVar);
    }
    return innerfn;
}
let fn=outerfn();
fn();
 
function customerCounter(){
    let count=0;
    return function(){
        count++;
        console.log('New customer count is ',count);
    }
}

let counter=customerCounter();
counter();
counter();
counter();
counter();

//..................................Asynchronus.............................
console.log('This is the First Line ');

setTimeout(() => {
    console.log("This is inside the function");
}, 3000);

console.log('This is the last line');

//...................................Synchronus..............................
console.log('This is a first line of he program');

function hello(){
    console.log('Inside a function to call back');
}
hello();
console.log('This is a last Line'); 

