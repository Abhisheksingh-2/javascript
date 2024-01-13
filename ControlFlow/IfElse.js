// if statement: when condition is true then if statement work and enter the inside the if statement and run the statements.
// else statement : It is always used with if statement and if statement is wrong then run else statement.

let val=10;
if(val<=10){  // if and else statement work in scope method.
    console.log("TRUE Statement");
}
else{
    console.log("FALSE Statement");
}
// var: It is used to store the variable value and it is not a block scope .
// let and const  is used block scope is more efficient compare to var keyword to store the variable value.
let InLogged=true;
if(InLogged==true){
    var name="ABHISHEK"
    console.log(`User InLogged,${name}`);
}
console.log(`User LoggedOut,${name}`);  // var is not block scope then it access outside the scope that is wrong.
// therefore, In present time mostly used let and const keyword against var keyword.

//Nested if and else statement
let Student_mark=85;
if(Student_mark>=91 && Student_mark<=100){
    console.log("A Grade")
}
else if(Student_mark>=81 && Student_mark<=90 ){
    console.log("B+ Grade")
}
else if(Student_mark>=71 && Student_mark<=80 ){
    console.log("B Grade")
}
else if(Student_mark>=61 && Student_mark<=70 ){
    console.log("C+ Grade")
}
else if(Student_mark>=51 && Student_mark<=60 ){
    console.log("C Grade")
}
else if(Student_mark>=41 && Student_mark<=50 ){
    console.log("D+ Grade")
}
else if(Student_mark>=34 && Student_mark<=40 ){
    console.log("D Grade")
}
else{
    console.log("FAIL");
}