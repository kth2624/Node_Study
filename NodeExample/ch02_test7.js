let os = require('os');
//운영체제의 호스트 이름을 알려준다.
console.log('시스템의 hostname : %s', os.hostname());
//totalmem - 시스템 전체 메모리 알려준다. 
//freemem - 시스템에서 사용 가능한 메모리 용량을 알려준다.
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem());
console.log('시스템의 CPU 정보\n');
//cpu 정보를 알려준다.
console.log(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
//네트워크 인터페이스 정보를 담은 배열객체를 반환한다
console.log(os.networkInterfaces());
