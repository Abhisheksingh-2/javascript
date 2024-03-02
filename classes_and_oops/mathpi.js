

console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);

const pi=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(pi);

const coffee={
    name:'Black Coffee',
    price:'$50',
    isAvailable:true,

    orderCoffee:function(){
        console.log('coffee not ordered');
    }
};
console.log(coffee);

const coffeeDescriptor=Object.getOwnPropertyDescriptor(coffee,'name');
console.log(coffeeDescriptor);

Object.defineProperty(coffee,'name',{
writable:false,
enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(coffee,'name'));

for (let [key,value]  of Object.entries(coffee)) {
    if(typeof value!='function'){
  console.log(`${key}  ${value}`);
    }  
}