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