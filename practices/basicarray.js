let arr=[1,4,6,8,0,3,5,];
console.log(arr);

//Find the element in the given index.
console.log(arr[3]);
console.log(arr[1]);
console.log(arr[6]);

//length of the array
console.log(arr.length);

//other way of defining array
array=Array(5);
console.log(array);
array=Array(5,4,3,2,1);
console.log(array);

// 3 way of creating arrays Constructor way

heroes= new Array("Superman","Batman","Devil");
console.log(heroes);

//delete the array from any index

console.log(arr);
delete arr[3];
console.log(arr);
//print the array

for(i=0;i<array.length;i++){
console.log(array[i]);
}

let arr_ele=[7,4,1,3,5,8,0,6];
const fun=(arr)=>{
    sum=0;
    for(i=0;i<arr_ele.length;i++){
        sum+=arr_ele[i];
    }
    return ("Result of ArraySum=",sum)
}
console.log(fun(arr_ele));
//.......................................Array Method..................................

//pop(): it is used to remove the last element from the array list.
arr1=[2,3,4,5,6,7,8,9];
console.log(arr1.pop());
console.log(arr1);
//Push(): it is used to add element at last position of the array list.
arr1.push(1);
console.log(arr1);

//remove from first position.
arr2=[1,2,3,4,5];
arr2.shift();
console.log(arr2);
//add the first position.
arr2.unshift(10);
console.log(arr2);

//concatition method
arr3=arr1.concat(arr2);
console.log(typeof arr3);// this show the object type.
console.log(arr3);
console.log(arr3.length);

arr4=arr1+arr2;
console.log(typeof arr4);// this show the string type.
console.log(arr4);

// join method
let indian_heroes=['shaktiman','hero','hanuman','flyingMan'];
result=indian_heroes.join();
console.log(result);
console.log(typeof result);

// splice() and slice().

arr5=[1,2,3,4,5,6,7];
arr5.splice(2,4);
console.log(arr5);
