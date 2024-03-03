class User{
    constructor(username){
this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }


addCourse(){
 console.log(`A new course was added by ${this.username}`);
    }

}

const school=new Teacher('Abhishek','as123@gmail.com','123!@');
school.addCourse();

const userName=new User('ANIKET GUPTA');
userName.logMe();
console.log(school instanceof User);
school.logMe();