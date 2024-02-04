// document.getElementById('water').onclick=function(){      this is old method which have not provide more features.
//     alert("This is Water Image You Clickd")
// }

document.getElementById('water').addEventListener('click',function(e){
console.log(e);
});
document.getElementById('img').addEventListener('click',function(e){
    console.log("You are Inside the UL");
    },false);
    document.getElementById('women').addEventListener('click',function(e){
        console.log("You Clicked on Women Image");
       // e.stopPropagation();
        },false);

        document.getElementById('google').addEventListener('click',function(e){
            //e.preventDefault();
            //e.stopPropagation();
            console.log("You Google Clicked");
            });
    document.querySelector('#img').addEventListener('click',(e)=>{
        console.log(e.target.parentNode);
        const removeIt=e.target.parentNode;
        removeIt.remove();
    
    })
