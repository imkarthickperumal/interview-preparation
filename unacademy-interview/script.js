// ROUND 1

// Question 1 : map vs forEach

const arr = [2, 4, 6, 8, 10];

const mapResult = arr.map((ar) => {
  return ar + 2;
});

const forEachResult = arr.forEach((ar) => {
  return ar + 3;
});

console.log(mapResult, forEachResult);

// Question 2 : null vs undefined
let a;
let b = null;
console.log(a); // variable declared but not assign value
console.log(b); // variable declared but value of null(obj)

console.log(typeof null);
console.log(typeof undefined);

console.log(null == undefined); // true => check both of the types anyone is true the result is true
console.log(null === undefined); // false => check both of the types

// Question 3 : Event Deligation
document.querySelector("#products").addEventListener("click", (event) => {
  console.log(event);
  if (event.target.tagName === "LI") {
    window.location.href += "#" + event.target.id;
  }
});

// Question 4 : Flatten the Array

let arra = [
  [1,2],
  [3,4],
  [5,6,7,8,9]
  [10,11,12],
];
let flattend= [].concat(...arra);
console.log(flattend);
