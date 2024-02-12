//1.
const square=(num)=>{
return num*num;
}
console.log(square(3));
console.log(square(125));
console.log(square(10));
console.log(square(5));
//2.

const arr_student=[19,22,19,24,20,25,26,24,25,24];
arr_student.sort();
console.log(arr_student);
min_arr=arr_student[0];
console.log(min_arr);
arr=arr_student.length-1;
max_arr=arr_student[arr];
console.log(max_arr);