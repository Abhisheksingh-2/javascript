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


