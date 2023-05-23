const Client = require('ssh2').Client;
const mysql = require('mysql');

const conn = new Client();

conn.on('ready', () => {
  console.log('SSH에 연결되었습니다!');
  // MySQL 연결 설정
  const connection = mysql.createConnection({
    host: 'classnet.mju.ac.kr',  // MySQL 호스트
    user: 's60201972',    // MySQL 사용자명
    password: '1234', // MySQL 비밀번호
    database: 'DBs60201972', // 사용할 데이터베이스
    port:'33060'
  });

  // MySQL 연결
  connection.connect((err) => {
    if (err) throw err;
    console.log('MySQL에 연결되었습니다!');
  });
}).connect({
  host: 'classnet.mju.ac.kr',
  port: 1004,
  username: 's60201972',
  password: '1234',
});


