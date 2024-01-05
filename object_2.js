console.log("Welcome to JavaScript!");
// OBJECT created by using constructor
const computer=new Object();
console.log(computer)
// In this method using only object name and pass the values
computer.model="LENEVO";
computer.serial_no="NL231T2";
computer.RAM="8GB"
computer.ROM="500GB"
computer.price=53000;
console.log(computer)
// we have pass the nested object.
const student={
    Student_Name:{
        full_name:{
            First_name:"ABHISHEK",
            Last_name:"SINGH"
        }
    },
    Student_ID:"STU123",
    Student_course:"B.Tech",
    Student_branch:"CSE"
}
console.log(student.Student_Name.full_name)
// Combining two or more object in third object.
const obj_1={1:"a",2:"b",3:"c",4:"d",5:"e"}
const obj_2={6:"ABHISHEK",7:"KANTI",8:"ANIKET",9:"YAGRAJ",10:"ADARASH"}
const obj_3={obj_1,obj_2}
console.log(obj_3)// This type not represent the correct way of the output. WE don't use this method.

//The Object.assign() : It is a static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const obj_4=Object.assign(obj_1,obj_2)
console.log(obj_4);
//we mostly using a {...} SPREAD syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
const obj_5={...obj_1,...obj_2};
console.log(obj_5)


console.log(Object.keys(computer))
console.log(Object.values(computer))
console.log(Object.keys(student))
console.log(Object.values(student))
//entries: It is method to used show the key and values in one array. first one is key and second the values 
console.log(Object.entries(student))
// hasOwnProperty() : method is used to find the the property is present or not and indicating in boolean .
console.log(student.hasOwnProperty("Student_ID"))
console.log(student.hasOwnProperty("Student_phone"))
