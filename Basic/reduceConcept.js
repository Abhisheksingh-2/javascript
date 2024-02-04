/*Array.prototype.reduce(): The reduce() method executes a reducer function on each element of the array and returns a single output value.
accumulator - It accumulates the callback's return values.
currentValue - The current element being passed from the array.*/
let mynum=[1,2,4,6,8,0,10,14];
const number=mynum.reduce( function(accumulator,currentValue){
    console.log(`accumulator:${accumulator} and currentValue:${currentValue}`);
    return accumulator+currentValue;
});
console.log(number);

//arrow Function
let num=[3,2,1,4,5,6,7,9];
const nums=num.reduce( (acc,curr) =>{
    console.log(`accumulator:${acc} and currentValue:${curr}`);
    return(acc+curr);
},0)  // 0 is denoted as initial value of accumulator.     
console.log("Total answer=",nums);

/*********************************************************  SHOPPING DATABASE  **************************************************** */
const ShoppingCart=[
    {
           ProductName:'HM Shirt',
          ProductPrice: 2100,
       Productmaterial:'pure cotton'
},
{
        ProductName:'Jack & John jacket',
       ProductPrice: 4500,
    Productmaterial:'Denim'
},
{
        ProductName:'HM T-Shirt',
       ProductPrice: 2800,
    Productmaterial:'Rioun and cotton'
},
{
        ProductName:'HM Jeans',
       ProductPrice: 3000,
    Productmaterial:'Denim'
},
{
        ProductName:'OverLays Goat Jacket',
       ProductPrice: 3800,
    Productmaterial:'Hard Pattern'
},
{
    ProductName:' Speaker JBL',
    ProductPrice:5350,
    Productmaterial:'Alluminum Material'
}
];
let Shopping=ShoppingCart.reduce( (acc,Product) =>{
if(Product.ProductPrice>0){
    console.log(` Accumulator Value: ${acc}    ShoppingCart Value: ${Product.ProductPrice}`);
    return ( acc + Product.ProductPrice);
}
},49);
console.log("Total Bill= ",Shopping);