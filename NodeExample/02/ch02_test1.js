var result =0;

//time(id) 실행시간 측정 시작 시간
//timeEnd(id) 실행시간 측정 끝 시간
console.time('duration_sum');

for(let i = 1;i<=1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

console.log('현재 실행한 파일의 이름 : %s',__filename);
console.log('현재 실행한 파일의 패스 : %s',__dirname);

//__filename 실행한 파일의 이름을 출력. 파일의 전체 패스가 출력됨
//__dirname 실행한 파일이 들어 있는 폴더를 출력. 폴더의 전체 패스가 출력됨

let Person = {name:"소녀시대", age:20};
console.dir(Person);