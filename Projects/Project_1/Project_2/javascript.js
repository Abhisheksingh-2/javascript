const forms=document.querySelector('form');
forms.addEventListener('submit', function(e){
    e.preventDefault();
    const Height=parseInt(document.querySelector('#Height').value);
    const Weight=parseInt(document.querySelector('#Weight').value);
    const result=document.querySelector('#result');
    const Age=parseInt(document.querySelector('#Age').value);
    if(Height==='' || Height < 0 || isNaN(Height)){
        result.innerHTML=`Please give a Valid Height ${Height}`
    }
    else if (Weight==='' || Weight < 0 || isNaN(Weight)){
        result.innerHTML=`Please give a Valid Weight ${Weight}`

    }
    else if(Age < 1 || isNaN(Age)){
        result.innerHTML=`Please give a Valid Age ${Age}`;
    }
    else{
        const bmi=(Weight/((Height*Height)/10000)).toFixed(2);
        result.innerHTML=`${bmi}`;
if(bmi>=18.5 && bmi<=25){
    result.innerHTML=` (${bmi})   It is NORMAL`
}
else if(bmi>25 && bmi<=30){
    result.innerHTML=` (${bmi})   It is OVERWEIGHT`
}
else if(bmi>30 && bmi<=35){
    result.innerHTML=` (${bmi})   It is Obese Class I`
}
else if(bmi>35 && bmi<=40){
    result.innerHTML=` (${bmi})   It is Obese Class II`
}
else if(bmi>40){
    result.innerHTML=` (${bmi})   It is Obese Class III`
}
    }

});