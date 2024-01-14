//switch:It is used to check multiples value against the key.
// Break: it is used to break the statement and get out from the program directly.

//Syntax:
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/
let vowel='k'
switch(vowel){
    case 'a':
        console.log("This is vowel")
        break;
        case 'e':
            console.log("This is vowel")
            break;
            case 'i':
                console.log("This is vowel")
                break;
                case 'o':
                    console.log("This is vowel")
                    break;
                    case 'u':
                        console.log("This is vowel")
                        break;
                        default:
                            console.log("This is not vowel")
                            break;
}


// FALSE value
/*Values those denoted as a false value in program
1.False
2.0,-0 are false value
3.BigInt 0n are false value
4."" empty string are also false value
5.null 
6.undefined
7.NaN not a number are also false value
*/
// TRUTHLY value
/* Values those denoted as a Truthly value
1."0"
2.'FALSE'
3." " if place space in empty string then it turn to the true value
4.[] empty array are ture value
5.{} empty object also are true value
6.function(){} empty function are also True value.*/
//how to call empty object
const objectempty={};
if(Object.keys(objectempty).length==0){
    console.log("It is Empty Object");
}

// how to call empty array

let arrayempty=[]
if(arrayempty.length==0){
    console.log("It is empty Array");
}
// Nullish coalescing operator (??)

//The nullish coalescing (??) operator:  is a logical operator that returns its right-hand side operand when its left-hand side 
//operand is null or undefined, and otherwise returns its left-hand side operand. */
let val;
val= 8 ?? 3;
console.log(val);
val=null ?? 3;
console.log(val);
val=undefined ?? 2;
console.log(val);
val=null ??  undefined ?? 4;
console.log(val);

/* Terniary operator
syntax:
condition ? true : false;*/
let student_mark=45;
student_mark>=34?console.log("Pass"):console.log("Fail");
