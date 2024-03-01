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

 // Modern Syntax

 Object.setPrototypeOf(TeachingSupport,teacher);

 let anotheruserName='HelloEveryone      ';

 String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
 }
 anotheruserName.trueLength();
 'ABHISHEK'.trueLength();
 'icetea'.trueLength();

 //..........................................CALL.......................................
 
 function setUser(username){
   this.username=username;
   console.log('Called');
 }

 function createUser(username,email,password){
      setUser.call(this,username);

      this.email=email;
      this.password=password;
 }

 const usercall= new createUser('ABHISHEK','Abhisheksinghthakur728@bbdu.ac.in','abhi2345!@');
 console.log(usercall);