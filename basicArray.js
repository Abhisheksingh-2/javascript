// Array: Array in JS it accept the different DataTypes of Element. Index starting from the Zero. It is Resizable .

// DECLARE THE ARRAY
const array=[3,4,6,7,8,1,9];
console.log(array.length)


const arr=new Array(2,4,6,8,0,1);
 console.log(arr[3])

//Some Method In Array

//PUSH: It is used to Add the Element in the Last position of the Array.
arr.push(33);
 console.log(arr);

// //POP: It is used to delete the Element in the Last position of the Array.
array.pop();
 console.log(array)

// IndexOf:It is used to Find the value are present on which index of the Array.
console.log(array.indexOf(7));

//Join: It is a method to changing the TypeOf the variable Array to String.
const newArr=array.join();
console.log(array);
console.log(newArr);

//Slice: It is a Method to return the Shallow Copy of an exit array into the new array seleted from start to end index.
//NOTE: END index not included.
const arr2=arr.slice(0,3);
console.log(arr);
console.log(arr2); 

//Splice:method of Array instances changes the contents of an array by removing or replacing existing elements or adding new elements.
const arr3=arr.splice(0,3);
console.log(arr);
console.log(arr3); 

//concat:It is method to combine two or more array and reurn in new array without any modify in the array.
const bollywood=new Array('AKSHAY','AJAY','SALMAN','SHARUK KHAN','AMIR','BOBBY');
const tollywood=new Array('POOJA HEDGE','ANUSHKA SHETTY','KAJAL AGRAWAL','SHRUTI HASSAN','TAMMANA BHATIA');
const actors=bollywood.concat(tollywood);
console.log(actors);
//flat:  method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 let newArray=[1,2,3,[4,5,6,[1,2,3,4]],7,8,[1,2,6,[5,6,7,[0,3,2]],9],0,5];
 let newArray2=newArray.flat(3);
 console.log(newArray2);

 //isArray:It is used to check passed value is array or not array.It is a Static method.
 console.log(Array.isArray("Abhi"));

 //from: It is used to create a Array passed any value of the Element.It is a Static method.
 console.log(Array.from("ABHISHEK"));
 console.log(Array.from({name:"ABHI"}));// interesting case useful when you go to the interview.


 //of: It is a Static method to craete new Array using the passed argument.
 const movie=Array.of("ANIMAL",500,"JAWAN",1200,"SALAAR",560);
 console.log(movie);