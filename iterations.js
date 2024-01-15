// Loop: to do same activity n-numbers of time is known as loop
/* Types of Loop 
1. for loop
2. while loop
3. do while loop*/

 //FOR Loop Syntax:

 /*for (let index = 0; index < array.length; index++) {
   const element = array[index]; 
 }*/
 for(let i=0;i<=10;i++){
    const index=i;
    console.log(index);
 }

 // Nested loop: loop within the loop is known as nested loop.
 for (let index = 0; index <=10; index++) {
    const element = [index];
    console.log("table");
    console.log("Outer loop",element);
    for (let indx = 0; indx<=10; indx++) {
        const ele = [indx];
        console.log(index+'*'+indx+'=' +index*indx)
    }
 }


