const promises=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Abhishek",password:"8319!@"})
        }
        else{
            reject('ERROR:Something went Wrong ');
        }
    },1000);
});

promises.then( (user)=>{
    console.log(user);
    return user.username
}).then( (username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( ()=>console.log('The promise is either resolved or rejected'));


const promise_01=new Promise(function(resolve,reject){
    setTimeout(()=>{
    let error=true;
    if(!error){
        resolve({username:"PYTHON",password:"12345!@"})
    }
    else{
        reject('ERROR:Python went Wrong ');
    }
},1000);
});

async function consumePromise_01(){
try {
    const response=await promise_01;
console.log(response);
} catch (error) {
    console.log(error);
}
}

consumePromise_01();