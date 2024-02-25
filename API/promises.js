 const promiseOne= new Promise(function(resolve,reject){
    //Do as asyn
    //DB Calla,crypography,network
setTimeout(function(){
    console.log('Asyn task is complete');
    resolve()
},1000);
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000);
    
    }).then(function(){
        console.log('Async 2 Resolved');
    })
    
    
    const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'ABHISHEK',Email:'Abhisheksinghthakur728@gmail.com'});
    
    },1000)
    })
    
    promiseThree.then(function(user){
        console.log(user);
    })