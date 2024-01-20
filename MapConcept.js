//******************************************************  MAP METHOD   ***************************************************************** */
//map():The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const HeroesName=['Superman','Batman','Spiderman','Ironman','Manpower'];
let Name=HeroesName.map( (ky)=> ky==='Superman'); // it is provide output in Bollean.
console.log(Name);
const mynums=[0,1,2,3,4,5,6,7,8,9];
let newnumber=[];
let mynumber=mynums.map( (nums)=> {
    if(nums%2===0){
        newnumber.push(nums)
    }
});
console.log(newnumber);

// Let we take a previous array newnumber and do some more basics
let ExtraNumber=mynums.map( (nums)=>nums +2).map( (nums)=> nums *10).filter((nums) => nums>45);
console.log(ExtraNumber);

const Data=[{
    Name:'Tonny Stark',
    Email:'tonny11@gmail.com',
    Phone:7654321890
},
{
    Name:'Captain America',
    Email:'captain22@gmail.com',
    Phone:6543232189
},
{
    Name:'Hulk',
    Email:'hulk33@gmail.com',
    Phone:9876543211
},
{
    Name:'Thore',
    Email:'tonny11@gmail.com',
    Phone:6754328902
}
];
let database=Data.map( (dt) =>dt).filter( (dt) => dt.Name)
console.log(database);