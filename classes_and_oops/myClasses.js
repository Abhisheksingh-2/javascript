//After ES6 introduced classes in javascript

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptedPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toLowerCase()}`;
    }
}

const usercall=new user('ABHISHEK SINGH','AS123@gmail.com','12345');
console.log(usercall.encryptedPassword());
console.log(usercall.changeUsername());
console.log(usercall);


//...............BEhind the scene......................

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptedPassword=function(){
    return `${this.password}abc`;
}

User.prototype.changePassword=function(){
    return `${this.username.toLowerCase()}`;
}

const Usercall=new User('ABHISHEK SINGH','AS123@gmail.com','12345');
console.log(Usercall.encryptedPassword());
console.log(Usercall.changePassword());
