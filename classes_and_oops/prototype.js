 let name=['ABHISHEK','ANIKET',"KANTI","ADARSH"];
 

 let nameCourse={
    ABHISHEK:'B.TECH',
    ANIKET:'BSC',
    KANTI:'IT',
    ADARSH:'B.COM',

    getPower:function(){
        console.log(`ABHISHEK power is ${this.ABHISHEK}`);
    }
 }

 Object.prototype.ABHISHEK=function(){
    console.log('ABHISHEK IS HEAD MEMBER');
 }

 Array.prototype.MyName=function(){
    console.log('ABHISHEK says hello');
 }

 name.ABHISHEK();
 name.MyName();
 //nameCourse.MyName();
 //nameCourse.ABHISHEK();


 //.....................................INHERITANCE...........................................
const user={
    UserName:"ABHISHEK",
    email:"ABHISHEKSINGHTHAKUR729@gmail.com"
}
 const teacher={
    makevideo:true 
 }

 const TeachingSupport={
    isAvailable:false
 }

 const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
 }

 teacher.__proto__=user;

