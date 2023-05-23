// const express = require('express');
// const app = express();

// // POST 요청의 body를 파싱하기 위한 미들웨어
// app.use(express.json());
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile('../front/Sign-inup/Signin.html');
// });
  

// // 회원가입 API
// app.post('/signup', (req, res) => {
//     res.sendFile()
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

