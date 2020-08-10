
// fs 모듈 불러오기
let fs = require('fs');
//동기식 IO메소드는 Sync라는 단어를 붙인다.
// 파일을 동기식 IO 방식으로 읽어 들입니다.
let data = fs.readFileSync('./package.json','utf8');


// 읽어 들인 데이터를 출력합니다.
console.log(data);
