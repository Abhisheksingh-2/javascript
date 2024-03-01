function multiplies(num){
return  num*num;
}
multiplies.power=2;

console.log(multiplies(5));
console.log(multiplies.prototype);
console.log(multiplies.power);
//It show the function is a object 

function createUser(username,score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
     this.score++;
}
createUser.prototype.printMe=function(name){
    console.log(`chai Price is ${this.score}`);
}

const chai=new createUser('chai',23);
const tea= new createUser('tea',35);

chai.printMe();
tea.printMe();

/*

Here's what happens behind the scenes when the new kwyword is used:

---A new object is created:The new keyword initiates the creation of a new Javascript objects.
---A prototype is linked: The newly created object get linked to the prototype property of the constructor function.This means that it has access to properties
and method defined on the constructor's prototype.

---The constructor is called:The constructor function is called with the specified arguments and this is bound to the newly creted objects. If no expilcit return
value is specified from the constructor, Javascript assume this, the newly created object,to be the intend return value.

---The new object is returned:After the constructor function has been called, if it doesn't return a non-primitive value (object,array,function,etc.), the newly
created object is returned.

*/
