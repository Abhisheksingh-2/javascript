/*factorial find of a number
5!=5*4*3*2*1
it means it start from n and goes to  n-1 when >=1;*/

function factorialFind(num){
    if(num===0 || num===1){
    return 1;
    }
    let fact=1;
    for(let i=num;i>0;i--){
    fact=fact*i;
    }
    return fact;
}
console.log(factorialFind(5));

//when we store function in variable there is no need to give the name of the function;

const hello_fun=function(){
    console.log(`Hello Everyone It's me JS`);
}
//call the function through variable;

hello_fun();

// when a function passed as argument inside to another function..
function fun1(a,b,fun){
    console.log(fun(a,b));
} 
function fun2(a,b){
    return a+b;
}
fun1(4,3,fun2);

// return function from a function

function greeting(){
    return function(){
        console.log(`Hello, Brother`);
    }
}
greeting()();

//NOTE: when we pass extra argument in the function which is greater than parameter but js not show any error program execute normal
//This is known as Silent behaviour of js 
// some other language like c++/java has loud behavior .

/* Any number of argument pass without any Parameter js have magical power it take it.
 This is a function which can add number of argument.                 */

 function sum(){
    console.log(arguments);
 }
 sum(2,4);
 sum(5,6,8,2,4,9);
 /*        OUTPUT: [Arguments] { '0': 2, '1': 4 }
           [Arguments] { '0': 5, '1': 6, '2': 8, '3': 2, '4': 4, '5': 9 }     */

           function sum1(){
            console.log(arguments);
            let sum=0; 
            for(i=0;i<arguments.length;i++){
                sum=sum+arguments[i];
            }
            return sum;
         }
         console.log(sum1(2,4));
         console.log(sum1(5,6,8,2,4,9));   
         /*  [Arguments] { '0': 2, '1': 4 }
             6
             [Arguments] { '0': 5, '1': 6, '2': 8, '3': 2, '4': 4, '5': 9 }
             34        */
             