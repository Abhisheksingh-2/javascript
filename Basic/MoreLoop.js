// for...of :statement executes a loop that operates on a sequence of values sourced from an iterable object.
let newArray=['a','e','i','o','u'];
for (const arr of newArray) {
   console.log("It is a Vowels:",arr);
}

let newString="ABHISHEK SINGH";
for (const name of newString) {
   if(name===" "){
   continue;
   }
   console.log("Character Value of String:",name);
}
//Map:The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map=new Map();
map.set('State','Capital');
map.set('Madhya Pradesh','Bhopal');
map.set('Uttar Pradesh','Lucknow');
map.set('Maharastra','Mumbai');
map.set('Gujrat','Surat');
console.log(map);
for (const [key,value] of map) {
   console.log("Values of Map",[value]);// It is provide array of the map.
}
// When we used object and run a (for of) statement it show error: Object are not iterable.
//for...in :The for...in statement iterates over all enumerable string properties of an object including inherited enumerable properties.
const NewObject={
    name:'Abhishek',
    Address:"Nagod",
    Age:23,
    Phone:9129366424
}
for (const value in NewObject) {
        console.log(NewObject[value]);
        
    }
    let FirstArray=['js','cpp','py','rb','c','java'];
    for (const key in FirstArray) {
       console.log(key); // when call the array using (for...in) statement it return the index or key value of the array.
    }
    // using (for...in)statement map are not iterable.
    
    //for each statement
    const programming=['JavaScript','CPP','C programming','JAVA','Python'];
    programming.forEach(function(key){
        console.log(key);
    });
    
    function greeting(){
        console.log("Hello! Everyone")
    }
programming.forEach(greeting);
programming.forEach( (key,index,arr)=>{  // for each statement define many variable index,array list of the data type.
console.log(key,index,arr);
})

//we create a array and define object within the array.
const MySkills=[{
    LanguageName:'Cpp',
    FileExtension:'cpp'
},
{
    LanguageName:'JavaScript',
    FileExtension:'js'
},{
    LanguageName:'Java',
    FileExtension:'java'
},{
    LanguageName:'python',
    FileExtension:'py'
},{
    LanguageName:'Ruby',
    FileExtension:'rb'
}];
MySkills.forEach((key)=>{
    console.log(key);
    console.log(key.LanguageName);
    console.log(key.FileExtension);
   
})
