//Object:It is used to store various keyed collections and more complex entities.
//Objects can be created using the Object() constructor or the object  literal.


//Object Literals
const firstObject={
    name:"Abhishek",
    phone:8827200828,
    age:21,
    Address:"Hardua Mohalla NavigationPreloadManager"
}
console.log(firstObject.name)
console.log(firstObject.age);

// most time used '.' dot to call the object key values but many time we use [] square bracket to call value of object key. Because key are also a String type by default in JS.
const sym = Symbol("key");

const Mobile={
    "model":"Samsung S22 Fe",
    [sym]:"Key values",
     product_ID:1234356,
     price:87654
}
// There is no any chance to acquire the value using '.' dot and this type of case we use square bracket [] to acquire the key values of object.
console.log(Mobile["model"]);
console.log(Mobile.price);
console.log(typeof Mobile['model'])
console.log(Mobile[sym])
console.log(typeof Mobile[sym])
// If you want to change the value of object then,
Mobile.product_ID=6754890;
console.log(Mobile.product_ID);
// If you want to freeze the value of the object because no one can change the value then,
Object.freeze(Mobile);
console.log(Mobile);

const sim={
   user_name:"ABHISHEK SINGH",
   adhaarcard:765487650987,
   "photo":"jpeg/jpg"
}
// we have create a function and accessing the key values through function
sim.greeting=function()
{
    console.log(`THANK YOU ${this.user_name} YOU ARE THE VALUABLE CUSTOMER `);
    console.log(`Your ADHAARCARD NO. is ${this.adhaarcard}`)
}
console.log(sim.greeting())
console.log("hello");