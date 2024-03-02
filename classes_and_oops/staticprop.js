class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username:${this.username}`);
    }

   static createId(){
        return `123`
    }
}

const CALL=new User('ADARSH');
//console.log(CALL.createId());

class Teacher extends User{
    constructor(username,email){
super(username);
this.email=email;
    }
}
const teach=new Teacher('ABHISHEK','iphone123@gmail.com');
teach.logMe();
console.log(teach.createId());