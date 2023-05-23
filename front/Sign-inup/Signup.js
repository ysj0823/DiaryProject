var userName = document.querySelector("#username");
var id = document.querySelector("#id");
var password = document.querySelector("#pw");
var rePassword = document.querySelector("#re-pw");

const idFailureMessage = document.querySelector(".id-failure-message");
const idSuccessMessage = document.querySelector(".id-success-message");
const misMatchMessage = document.querySelector(".mismatch-message");
const matchMessage = document.querySelector(".match-message");
const pwCondition = document.querySelector(".pw-condition");

const userIDRegExp = /^[a-z]+[a-z0-9]{5,19}$/; // 아이디 정규식 영문자로 시작하는 영문자 또는 숫자 6-20
const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; // 비밀번호 정규식 8-16 문자, 숫자 조합
// const nicknameRegExp = /^[가-힣|a-z|A-Z|0-9|]{2,10}$/; // 닉네임 정규식 2-10 한글, 숫자 또는 영문


/*******아이디 조건*******/
//id 입력 시 메시지 함수
id.onkeyup = function () {
  if (userIDRegExp.test(id.value)) {
    //성공 메시지 보임/실패 메시지 가림
    idSuccessMessage.classList.remove("hide");
    idFailureMessage.classList.add("hide");
  } else {
    //성공 메시지 가림/실패 메시지 보임
    idSuccessMessage.classList.add("hide");
    idFailureMessage.classList.remove("hide");
  }
};


/******비밀번호 조건*******/
//password 조건
password.onkeyup = function () {
  if (isMatch(password.value, rePassword.value)) {
    console.log("일치");
    misMatchMessage.classList.add("hide");
    matchMessage.classList.remove("hide");
  } else {
    console.log("불일치");
    misMatchMessage.classList.remove("hide");
    matchMessage.classList.add("hide");
  }

  if (passwordRegExp.test(password.value)) {
    pwCondition.classList.add("hide");
  } else {
    pwCondition.classList.remove("hide");
  }
};

//repassword 조건
rePassword.onkeyup = function () {
  if (isMatch(password.value, rePassword.value)) {
    misMatchMessage.classList.add("hide");
    matchMessage.classList.remove("hide");
  } else {
    console.log("불일치");
    misMatchMessage.classList.remove("hide");
    matchMessage.classList.add("hide");
  }
};

// 비밀번호 일치여부 함수
function isMatch(password1, password2) {
  if (password1 == password2) {
    if (password1 != "" || password2 != "") 
      return true;
    } else {
      return false;
    }
}

//회원가입 버튼 함수
function createAccount() {
  const userData = {
    username: userName,
    id: id,
    password: password
  };
  
  if ( !id.value == "" && !password.value == "" && !rePassword.value == "" && !userName.value == "" && password.value == rePassword.value && userIDRegExp.test(id.value)) {

  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.text())
  .then(data => {
    alert(data); // 회원가입이 완료되었을 때의 처리
    location.href = "Login.html"; // 로그인 페이지로 이동
  })} else{
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.text())
    .catch(error => {
      console.error('Error:', error);
      alert('회원가입에 실패했습니다.'); // 회원가입 실패 시의 처리
    });
  }
}

//뒤로가기
function back() {
  history.back();
}

// else if (!nicknameRegExp.test(userName.value)) {
//   return alert("닉네임 형식 2-10 한글, 숫자 또는 영문");
// } 