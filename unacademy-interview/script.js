// Question 1 : map vs forEach

const arr = [2,4,6,8,10];

const mapResult = arr.map((ar)=>{
    return ar+2;
});

const forEachResult = arr.forEach((ar)=>{
    return ar+3;
});

console.log(mapResult, forEachResult);


// Qestion 2 : null vs undefined
let a ;
let b = null;
console.log(a); // variable declared n but not assign value
console.log(b); // variable declared but value of null(obj)

console.log(typeof(null));
console.log(typeof(undefined));

console.log(null==undefined); // true => check both of the types anyone is true the result is true
console.log(null===undefined); // false => check both of the types


