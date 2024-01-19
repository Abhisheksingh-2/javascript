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

// We create a Student Database
const StudentDatabase=[{
    Student_ID:'STU001',
    Student_Name:'ABHISHEK SINGH',
    Student_Age:23,
    Student_Course:'B.tech(CSE)',
    Annual_Fees:45000   
},
{
    Student_ID:'STU002',
    Student_Name:'KANTI SINGH',
    Student_Age:23,
    Student_Course:'B.tech(IT)',
    Annual_Fees:40000   
},
{
    Student_ID:'STU003',
    Student_Name:'YAJRAJ LODHI',
    Student_Age:21,
    Student_Course:'B.tech(IT)',
    Annual_Fees:40000   
},
{
    Student_ID:'STU004',
    Student_Name:'PRASHANT TIWARI',
    Student_Age:24,
    Student_Course:'B.COM(HONS)',
    Annual_Fees:35000   
},
{
    Student_ID:'STU005',
    Student_Name:'ADARSH SINGH',
    Student_Age:22,
    Student_Course:'MBA',
    Annual_Fees:65000   
},
{
    Student_ID:'STU006',
    Student_Name:'SHARDA GUPTA',
    Student_Age:23,
    Student_Course:'B.COM',
    Annual_Fees:30000   
},
{
    Student_ID:'STU007',
    Student_Name:'ANIKET GUPTA',
    Student_Age:21,
    Student_Course:'BSC(CS)',
    Annual_Fees:40000   
}
];
let stud=StudentDatabase.filter( (stu)=> stu.Student_Name==='ABHISHEK SINGH');
console.log(stud);
stud=StudentDatabase.filter( (stu)=>{
    return stu.Annual_Fees>=40000;
})
console.log(stud);
stud=StudentDatabase.filter( (stu)=>{
    return stu.Annual_Fees>=40000 && stu.Student_Course==='B.tech(IT)';
})
console.log(stud);