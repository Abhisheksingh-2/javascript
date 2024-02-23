//generate a random color

const randomColor=function(){ 
    const hex='0123456789ABCDEF';
    let color='#';
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;

};
let interval;
const startChangingColor=function(){
    if(!interval){
    interval=setInterval(changeBackground,1000);
    }
    function changeBackground(){
    document.body.style.backgroundColor=randomColor();
    }
};
stopChangingColor=function(){
    clearInterval(interval);
    interval=null;
}


document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);