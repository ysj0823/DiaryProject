//모듈
const express = require("express");
const app = express();


//라우팅
const SignInup = require("./src/routes/indexRoute");

//express 정적파일 제공(html,css,js 등)
app.use(express.static('../front'));

// 앱 세팅
app.set("views", "../front");
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");

app.use('/', SignInup); // use -> 미들웨어를 등록해주는 메서드.

module.exports = app;
