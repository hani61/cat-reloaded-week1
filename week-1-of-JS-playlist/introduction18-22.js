// تكليف 1
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0
/////////////////////////////////////////////////////////////////////
// تكليف 2
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * num - num); // 6

// Soultion Three
function isNum(condition) {
  return condition ? num + num : num  * num;
}
console.log(`${isNum(true)}`); // 6

// Soultion Four

console.log(num < 5 ? num + num : num / num); // 6

// Solution Five
console.log((`${num}${num}` - num) / 5); // 6

// Solution Six

let result = 0;
for (let i = 0; i < num; i++) {
    result += 2;
}
console.log(result); // 6

////////////////////////////////////////////////////////////
// تكليف 3
let num2 = "10";

// Solution One
console.log(Number(num2) + Number(num2)); // 20

// Solution Two
let result1 = 0
for (let i = 0; i < Number(num2); i++) {
  result1 += 2;
}
console.log(result1); // 20

// Solution Three
function isNum1(condition) {
  return condition ? Number(num2) : Number(Number(num2) + Number(num2));
}
console.log(`${Number(isNum1(false))}`); // 20

// Solution Four
console.log(Math.floor(Number(num2) * (true + true))); // 20
///////////////////////////////////
// تكليف 4

let points = 10;

// Write Your Code Here
points++
points++
points++
console.log(points); // 13

// Write Your Code Here
points--
points--
points--
points--
points--

console.log(points); // 8;