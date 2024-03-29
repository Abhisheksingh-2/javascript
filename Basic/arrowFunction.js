/*this method: It is refers to an object that is executing the current piece of code.
It is use to eliminate the confusion between class attributes and parameters with the same name.*/

const Student={
    Student_name:"ABHISHEK SINGH",
    Student_age:23,
    Student_course:"B.Tech",
    Student_fees:100000,
    Welcome_Message:function(){
     
        console.log(`HAPPY NEW YEAR ${this.Student_name}`)
    }
}

Student.Welcome_Message();
Student["Student_name"]="Abhishek";
Student.Welcome_Message();

//arrow function: It help to create function less storage and small statement.
message=()=>{
console.log("Hello World!")
}
message();

const EvenOROdd=(i)=>{
    if(i%2===0){
        console.log("EVEN NUMBER")
    }
    else{
        console.log("ODD NUMBER");
    }
}
EvenOROdd(5);

function food(){
    console.log(this);
}
food();

// this keyword not using in function as it as object.
function THIS(){
    let userName="Abhishek singh";
    console.log(this.userName);
}
THIS();// output show :Undefined it means we have not access like an object in the function


// When this keyword used in arrow function then output show empty object.
let Name=()=>{
    console.log(this);
} 
Name(); // output is :{}-> this is empty object

//Explicitly return
const subtract=(value1,value2)=>{
    return (value1-value2)
}
console.log(subtract(5,3))

//Implicit return: is a way of returning a value from a function without explicitly using the return keyword.
const sumValue=(value1,value2)=>value1+value2

console.log(sumValue(3,5));

//object value in arrow function.
const Student=()=>({student_name:"ABHISHEK",
    age:23
});
console.log(Student());
console.log(Student().student_name);