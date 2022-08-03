// Question 1 : map vs forEach

const arr = [2,4,6,8,10];

const mapResult = arr.map((ar)=>{
    return ar+2;
});

const forEachResult = arr.forEach((ar)=>{
    return ar+3;
});

console.log(mapResult, forEachResult);