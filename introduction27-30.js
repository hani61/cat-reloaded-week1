// تكليف 1

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName[10%10].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
let e = userName[0].toLowerCase()
console.log(e.repeat(3)); // eee

//تكليف 2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True