// object literals

const user={
    username:"ABHISHEK SINGH",
    Password:'Abhi123!@',
    systemLogin:true,
    getUserDetails:function(){
        console.log(`username:${this.username} 
        Password:${this.Password}  systemLogin:${this.systemLogin}`);
    }
};
console.log(user);
console.log(user.getUserDetails());

//Construction Function;

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    
    return this
}

// const userOne=User('ABHSHEK',3,true);//When we write this type then it overwritr the data which is show poor coder.
// const userTwo=User('AnIKET',11,false);
// console.log(userOne);
//when not call the userTwo but it overwritr the data.
// for this problem we use construction which provide the instance of object .

const userOne= new User('ABHSHEK',3,true);
const userTwo= new User('AnIKET',11,false);
console.log(userOne);
console.log(userTwo);
//use construction keyword
console.log(userOne.constructor);
console.log(userTwo.constructor);
//instanceOf method uses  

console.log( userOne instanceof User);
console.log(userTwo instanceof Object);


