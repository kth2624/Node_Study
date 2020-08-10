// url 모듈을 사용하기 위한 require() 메소드 호출
let url = require('url');
//parse() - 주소 문자열을 파싱하여 URL객체를 만들어준다.
// 주소 문자열을 URL 객체로 만들기
let curURL = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=steve+jobs');

// URL 객체를 주소 문자열로 만들기
//format() - URL 객체를 주소 문자열로 변환한다.

let curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.log(curURL);


//요청 파라미터 구분하기

//querystring 모듈 사용하기 위한 require()메소드 호출
let querystring = require('querystring');
let param = querystring.parse(curURL.query);
//parse() - 요청 파라미터 문자열을 파싱하여 요청 파라미터 객체로 만들어준다.

console.log('param : %s', param);
console.log('요청 파라미터 중 query의 값 : %s', param.query);
//stringify() - 요청 파라미터 객체를 문자열로 변환한다.

console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
