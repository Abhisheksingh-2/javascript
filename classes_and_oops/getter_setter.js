class User{
    constructor(email,password){
        this.email=email;
        this.password=password; 
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
this._email=value.toUpperCase();
    }
    get password(){
        return this._password.toLowerCase();
    }
    set password(value){
 this._password=value.toLowerCase();
    }
}

const ABHISHEK=new User('asingh123@gmail.com','AS221!@');
console.log(ABHISHEK.password);
console.log(ABHISHEK.email);


//..........Function based code .........through properties excess getter and setter...................................

function User1(email,password){
this._email=email;
this._password=password;

Object.defineProperty(this,'email',{
    get:function(){
return this._email.toUpperCase();
    },
    set:function(value){
        this._email=value;
    }
});
Object.defineProperty(this,'password',{
    get:function(){
return this._password.toUpperCase();
    },
    set:function(value){
        this._password=value;
    }
})
}
const user=new User1('savita123@gmail.com','32132');
console.log(user.email);
console.log(user.password);

