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
