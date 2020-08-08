/**
 * 3장 Test 14
 *
 * 배열 일부를 잘라내어 새로운 객체로 만들기
 * slice() 메소드 사용
 */

let Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22},{name:'티아라',age:23},{name:'애프터스쿨',age:25}];

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users');
console.dir(Users);

let Users2 = Users.slice(1, 3);

console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2);

let Users3 = Users2.slice(1);

console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);

console.log("\n");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr1 = arr.slice(3, 5); // [4, 5]
let arr2 = arr.slice(undefined, 5); // [1, 2, 3, 4, 5]
let arr3 = arr.slice(-3); // [8, 9, 10]
let arr4 = arr.slice(-3, 9); // [8, 9]
let arr5 = arr.slice(10); // []
let arr6 = arr.slice(4); // [5, 6, 7, 8, 9, 10]
let arr7 = arr.slice(undefined); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr8 = arr.slice(5, -4); // [6]
let arr9 = arr.slice(2, 15); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr1); // [4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(arr3); // [8, 9, 10]
console.log(arr4); // [8, 9]
console.log(arr5); // []
console.log(arr6); // [5, 6, 7, 8, 9, 10]
console.log(arr7); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr8); // [6]
console.log(arr9); // [3, 4, 5, 6, 7, 8, 9, 10]


