// const dbConfig = require('./config/dbConfig');
// const sshConfig = dbConfig.ssh;
// const mysqlConfig = dbConfig.mysql;
// const express = require('express');
// const app = express();
// const port = 3000;
// const path = require('path');

// // 서버 실행
// app.listen(port, () => {
//     console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
// });

// app.use(express.json());
// app.use(express.static('../front/Sign-inup'));

// app.get('/', (req, res) => {
//     const filePath = path.join(__dirname, '../front/Sign-inup', 'Login.html');
//     res.sendFile(filePath);
// });
  

// // 회원가입 API
// app.post('/signup', (req, res) => {
//     const filePath = path.join(__dirname, '../front/Sign-inup', 'Signup.html');
//     res.sendFile(filePath);
//   const { username, id, password } = req.body;
//   const user = {
//     user_id: id,
//     user_nickname: username,
//     user_password: password
//   };

//   // 회원 정보를 User 테이블에 삽입
//   const query = 'INSERT INTO User SET ?';
//   connection.query(query, user, (err, result) => {
    
//     if (err) {
//       console.error(err);
//       res.status(500).send('회원가입에 실패했습니다.');
//     } else {
//       console.log('회원가입이 완료되었습니다.');
//       res.send('회원가입이 완료되었습니다.');
//     }
//   });
//   res.send('회원가입이 완료되었습니다.');
// });

