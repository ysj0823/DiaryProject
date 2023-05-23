/******로그인 함수 *******/
function login() {
    if (id.value == "" || password.value == "") {
        alert("아이디 및 비밀번호를 입력해주세요.")
    }
    else{
        location.href='main.html';
    }
}