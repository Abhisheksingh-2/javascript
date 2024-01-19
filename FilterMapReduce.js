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
const Skills=MySkills.forEach( (item)=>{
console.log(item);
return item;
})
console.log(Skills);// for each loop not return a value it is only execute the function and print them .
// It is disadvantage of (for each loop) so, we used many other loops which return the values.

//Filter():The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const number=[0,1,2,3,4,5,6,7,8,9];
// First method
let Mynums=number.filter( (num) =>(num>5))
console.log(Mynums);
//Second method
let array=[];
let NewNums=number.forEach( (num) =>{
    if(num>3){
array.push(num);

    }
});
console.log(array);