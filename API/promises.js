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

