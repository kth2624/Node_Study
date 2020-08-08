/**
 * 3장 Test 8
 *
 * 배열 만들고 요소 추가하기
 */

let Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

Users.push({name:'티아라',age:23});
Users.push({name:'나인뮤지스',age:25});

console.log('사용자 수 : %d', Users.length);
console.log('첫번째 사용자 이름 : %s', Users[0].name);
console.log('두번째 사용자 이름 : %s', Users[1].name);
console.log('세번째 사용자 이름 : %s', Users[2].name);