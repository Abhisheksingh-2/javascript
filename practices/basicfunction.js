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
             
             function func(){
                func=21;
                console.log(func);
             }
             func();

             //Smarter/New version of function
             //Arrow function is used to less code and get more.

              const hello=()=>{
                console.log(`Hello, Everyone`);
              }
hello();

//function with multiple Arguments and return

 addingNumber=(a,b,c)=>{
    console.log("inside sum numbers");
    return a+b+c;
}
console.log(addingNumber(7,4,2));

//function with no return

greeting=(name)=>{
console.log(`Hello, ${name}`);
}
greeting('Abhishek');

sum=(a,b)=>a*b;  // multiple return is not allow it is used only one statement.
console.log(sum(3,4));

/*1.Argument are not allow in arrow function.
2.there is no arrow type property.
3.can't used with new keyword.
4. binding of 'this' is different.

determine it is even or odd.*/
determine=(num)=>{
    if(num%2===0){
        console.log(`It is Even Number ${num}`);
    }
    else{
        console.log(`It is Odd Number ${num}`)
    }
}
determine(29);

ternary=(num)=>(num%2==0)?"EVEN":"ODD";
console.log(ternary(20));

//.................................<ASSIGNMENT>........................................
//1.
const grade=(num)=>{

            if(num>90){
                return ('A Grade');
            }
        
           else if(num>70 && num<=90){
                return ('B Grade');
            }
        
        else if(num>=50 && num<=70){
                return ('C Grade');
            }
        
         else {

                return ('F Grade');
         }
}
console.log(grade(70));
//2.

const generate_number=(num1,num2)=>{
for(i=num1;i<num2;i++){
  console.log(i+1);
}
}
console.log(generate_number(10,25));

//3.

const ternary_operator=(num)=>{
    return num>0? "positive":num<0? "negative":"zero";
}
console.log(ternary_operator(-3));

//4.

const logicFunction=(name,pass)=>{
    if(name==='admin'&& pass==='12345'){
console.log('Login successful');
    }
    else{
        console.log('Invalid credential');
    }
}
logicFunction('abhi','12345');
logicFunction('admin','12345');

//5.
const e_commerce=(payment_method)=>{
 switch(payment_method){
    case 'credit':
        console.log(`2% fess processing ${payment_method}` );
        break;
        case 'debit':
            console.log(`1.5% fess processing ${payment_method}` );
            break;
            case  'paypal':
                console.log(`3% fess processing ${payment_method}` );
                break;
                default:
                    console.log('Invalid method Please use Valid method');
 }
}
e_commerce('debit');
e_commerce('paypal');
e_commerce('credit');
e_commerce('gpay');
//6.

const weather_application=(curr_temp)=> {
    let celcius=((curr_temp-32)*5/9);
   const result=celcius>30? "Hot":"Moderate";
   return result;
}
console.log(weather_application(100));
console.log(weather_application(89));
console.log(weather_application(70));
//7.

function sum_numbers(num){
i=1;
let result=0;
do{
result=result+i;
i++;
}
while(i<=num)
return result;

}
console.log(sum_numbers(20));
console.log(sum_numbers(30));
console.log(sum_numbers(25));