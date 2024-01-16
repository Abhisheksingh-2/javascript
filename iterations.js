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

 let myArray=['Abhishek','Kanti','Aniket','Ravivijay','Yagraj'];
 for (let index = 0; index < myArray.length; index++) {
   const element = myArray[index];
   console.log(element);
   
 }

// while loop
let index=0;
let number=50;
while (index<=50) {
   if(index%2==0){
      console.log("Even Number")
   }
   else{
   console.log("Hello Everyone");
   }
   index++;
}
//Array
let MyArray=['Nobita','Doraemon','Sisuzka','Giyan','Suniyo'];
let arr=0;
while (arr<MyArray.length) {
   console.log(MyArray[arr]);
   arr++;
}
// do while loop
let Arr=0;
let MYARRAY=['superman','Batman','Splash','Catwomen','WounderWomen']
do {
   console.log(MYARRAY[Arr]);
   Arr++;
} while (Arr<MYARRAY.length);