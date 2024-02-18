const form=document.querySelector('form'),
emailfield=form.querySelector('.emailfield'),
emailinput=emailfield.querySelector('.email'),
passfield=form.querySelector('.passwordfield'),
passinput=passfield.querySelector('.newpass'),
confirmpass=form.querySelector('.confirmfield'),
confirminput=confirmpass.querySelector('.confirmpass');
 //email validation
function checkEmail(){
    const emailpattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailinput.value.match(emailpattern)){
return emailfield.classList.add("invalid");
    }
    emailfield.classList.remove("invalid ");
    
}
const eyecon=document.querySelectorAll(".show-hide");
eyecon.forEach((eye)=>{
    eye.addEventListener('click',()=>{
        const pinput=eye.parentElement.querySelector('input');
        if(pinput.type==='password'){
         eye.classList.replace("bx-hide","bx-show");
         return (pinput.type="text");
        }
        eye.classList.replace("bx-show","bx-hide");
         return (pinput.type="password");
    });
});

function createpass(){
 const passPattern=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
 if(!passinput.value.match(passPattern)){
    passfield.classList.add("invalid");
 }
}
//calling function
form.addEventListener('submit',(e)=>{
   e.preventDefault();  
   checkEmail();
   createpass();


   emailinput.addEventListener('keyup',checkEmail);
   passinput.addEventListener('keyup',createpass);
});