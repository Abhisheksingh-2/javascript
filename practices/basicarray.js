let arr=[1,4,6,8,0,3,5,];
console.log(arr);

//Find the element in the given index.
console.log(arr[3]);
console.log(arr[1]);
console.log(arr[6]);

//length of the array
console.log(arr.length);

//other way of defining array
array=Array(5);
console.log(array);
array=Array(5,4,3,2,1);
console.log(array);

// 3 way of creating arrays Constructor way

heroes= new Array("Superman","Batman","Devil");
console.log(heroes);

//delete the array from any index

console.log(arr);
delete arr[3];
console.log(arr);
//print the array

for(i=0;i<array.length;i++){
console.log(array[i]);
}

let arr_ele=[7,4,1,3,5,8,0,6];
const fun=(arr)=>{
    sum=0;
    for(i=0;i<arr_ele.length;i++){
        sum+=arr_ele[i];
    }
    return ("Result of ArraySum=",sum)
}
console.log(fun(arr_ele));
//.......................................Array Method..................................

//pop(): it is used to remove the last element from the array list.
arr1=[2,3,4,5,6,7,8,9];
console.log(arr1.pop());
console.log(arr1);
//Push(): it is used to add element at last position of the array list.
arr1.push(1);
console.log(arr1);

//remove from first position.
arr2=[1,2,3,4,5];
arr2.shift();
console.log(arr2);
//add the first position.
arr2.unshift(10);
console.log(arr2);

//concatition method
arr3=arr1.concat(arr2);
console.log(typeof arr3);// this show the object type.
console.log(arr3);
console.log(arr3.length);

arr4=arr1+arr2;
console.log(typeof arr4);// this show the string type.
console.log(arr4);

// join method
let indian_heroes=['shaktiman','hero','hanuman','flyingMan'];
result=indian_heroes.join();
console.log(result);
console.log(typeof result);

// splice() and slice().

arr5=[1,2,3,4,5,6,7];
//arr5.splice(2,4);
console.log(arr5);
//using splice method we add the element in the array list

arr5.splice(2,2,8,9);
console.log(arr5);
console.log(typeof arr5);

//reverse() method

let dc_hero=['superman','batman','catwomen','devil','thounderman','deadpool'];
dc_hero.reverse();
console.log(dc_hero);

//sorting
arr6=[8,9,4,2,5,7,1,0];
//arr6.sort();

arr6.sort(function(){
    for(i=0;i<arr6.length;i++){
    
        if(arr6[i]<arr6[i+1]){
            temp=arr6[i];
            arr6[i]=arr6[i+1];
            arr6[i+1]=temp;
            console.log(arr6);
        }
        //temp++;
      
    }
})
console.log(arr6);
arr6.sort((a,b)=>a-b);
console.log(arr6);
//convert array to string
arr7=new Array(3,5,2,6,1,8);
str=arr7.toString();
console.log(str);
console.log(typeof str);
//isArray() it is used to determine it is array or not
arrr8=[1,2,3,4,5,6,7,8,9,0];
console.log(Array.isArray(arr));

str='I am ABHISHEK SINGH';
console.log(Array.isArray(str));

//......................................OBJECTS.........................................

 
function emp(id,name,salary){
   this.id=id;
    this.name=name;
    this.salary=salary;
}
const emp_obj=new emp(001,'ABHISHEK SINGH',80000);
console.log(emp_obj);
// insert the new field
const person={};
person.name='ABHISHEk';
person.hobby='football';
person.age=21;
console.log(person);
person.name='ANIKET'
console.log(person);
// delete the field

delete person['age'];
console.log(person);

// key and values
const database={
    name:'ABHISHEK',
    class: {
        section:'4-A',
        course:'B.Tech',
        branch:'CSE'
    },
    roll:'STU_01',
    age:21
    };
    console.log(Object.keys(database));
    console.log(Object.values(database));
    console.log(Object.entries(database));
    console.log(database);

    //assign method: it is used to add new field exiting object.
  
    data_new=Object.assign({},database,{tution_fees:62500});
    console.log(data_new);

    //adding new field using [.] dot method.

    database.jobType='remote';
    console.log(database);

    console.log(Object.getOwnPropertyDescriptors(database));

    Object.defineProperties(database,{
        name:{
                value:'ABHISHEk',
                enumerable:false
            }
        
    })


    for(k in database){
    console.log(k);
}
console.log(Object.getOwnPropertyDescriptors(database));


