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
const median=arr_student[(arr-1)/2];
console.log(median);
console.log(arr_student);
const average=arr_student.map(()=>{
    sum=0;
    for(i=0;i<arr_student.length;i++){
sum=sum+arr_student[i];
    }
    return sum/(arr_student.length);
})
console.log(average);
const range=max_arr-min_arr;
console.log(range);

//3.
const contact_information=[{
    name:'ABHISHEK',
    age:22,
    email:'abhisheksinghthakur728@gmail.com',
    location:'satna'
}];
contact_information.map((e)=>{
    console.log(e.name);
});


const person= {
    name:'Abhishek',
    age:22
};
    person.introduce = function (){
console.log(`Hello,I'm ${this.name} and I'm ${this.age} years old.`);
    }



console.log(person.introduce);