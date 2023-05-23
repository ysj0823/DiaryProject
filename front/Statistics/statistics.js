// 사용자 이름 받아오기
function getUserName() {
  //   return $.ajax({
  //     url: "/get-username",
  //     type: "GET",
  //     dataType: "json",
  //   });
  return "홍길동";
}

window.onload = function () {
  var nameId = document.getElementById("username");
  var username = getUserName();
  nameId.innerHTML = username + "님의 월별 감정 통계";
};

const data = {
  joy: 30,
  sadness: 10,
  anticipation: 20,
  surprise: 15,
  anger: 5,
  fear: 8,
  disgust: 7,
  shame: 5,
};

const bars = document.querySelectorAll(".bar");

bars.forEach((bar) => {
  const id = bar.id.replace("-bar", "");
  const percentage = data[id];
  const barPercentage = bar.querySelector(".bar-percentage");
  barPercentage.style.height = percentage + "%";
  barPercentage.setAttribute("data-percentage", percentage);
});
