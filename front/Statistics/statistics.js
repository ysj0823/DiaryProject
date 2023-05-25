
// 로그아웃 로직
function logout() {}

// 홈 이동
function home() {
  var destination = "./index.html";
  window.location.href = destination;
}

// 사용자 이름 받아오기
// db에서............
function getUserName() {
  return "홍길동";
}

// OOO님의 월별 감정 통계
window.onload = function () {
  var nameId = document.getElementById("username");
  var username = getUserName();
  nameId.innerHTML = username + "님의 월별 감정 통계";
};


// 감정 데이터
const emotion = {
  Very_Happy: 30,
  Loudly_Crying: 10,
  Sad: 20,
  Heart_Eyes: 15,
  Fearful: 5,
  smile: 8,
  Neutral: 7,
  Angry: 5,
};

document.addEventListener("DOMContentLoaded", function () {
  const date = document.getElementById("date");
  date.addEventListener("change", handlerDateClick);
});

function handlerDateClick(event) {
  var presentDate = document.getElementById("date").value;

  const month_info = document.getElementById("month_info");
  month_info.innerHTML = presentDate + " 감정분석";

  // 날짜에 맞는 데이터 세팅
  setEmotionValue(month_info);

  // 전체 감정 개수
  const totalEmotions = Object.values(emotion).reduce(
    (acc, val) => acc + val,
    0
  );


//   감정 퍼센트 담는 배열
    const emotionPercentages = {};


  // 8가지 감정 데이터에서 개수를 가져와 백분율로 바꿔서
  // 위에 emotionPercentages에 담는 로직
  for (const e in emotion) {
    const count = emotion[e];
    const percentage = (count / totalEmotions) * 100;
    emotion[e] = Math.floor(percentage); // 소수점 버리기
  }

  EmotionGraph(emotion);
  MostAndLeastEmotions(emotion);
  Advice(emotion);
}



// 통계 그래프 그리는 함수
function EmotionGraph(emotionPercentages) {
  // 각 감정들의 퍼센트 수치 출력
  const bars = document.querySelectorAll(".bar");

  bars.forEach((bar) => {
    const id = bar.id.replace("-bar", "");
    const percentage = emotionPercentages[id];
    const barPercentage = bar.querySelector(".bar-percentage");
    barPercentage.style.height = percentage + "%";
    barPercentage.setAttribute("data-percentage", percentage);
  });
}

// 가장 많은/적은 감정
function MostAndLeastEmotions(emotion) {

  // 값 가져와서
  const mostEmotion = document.getElementById("most-percentage");
  const leastEmotion = document.getElementById("least-percentage");

  const mostImage = document.getElementById("most-image");
  const leastImage = document.getElementById("least-image");

  // 데이터 오름차순 정렬
  const sortedEmotions = Object.keys(emotion).sort(
    (a, b) => emotion[b] - emotion[a]
  );

  // 정렬된 배열의 가장 첫 번째 값으로 적용
  mostEmotion.innerHTML = emotion[sortedEmotions[0]] + "%";
  mostImage.setAttribute("src", "./image/" + sortedEmotions[0] + ".png");

  // 정렬된 배열의 가장 마지막 값으로 적용
  leastEmotion.innerHTML =
    emotion[sortedEmotions[sortedEmotions.length - 1]] + "%";
  leastImage.setAttribute(
    "src",
    "./image/" + sortedEmotions[sortedEmotions.length - 1] + ".png"
  );
}



// 조언
function Advice(emotion) {
  const adviceElement = document.getElementById("advice");

  // 데이터 오름차순 정렬
  const sortedEmotions = Object.keys(emotion).sort(
    (a, b) => emotion[b] - emotion[a]
  );
  const mostEmotion = emotion[sortedEmotions[0]];

  // const adviceData = {} // db에서 mostEmotion에 대한 조언 리스트를 받아오는 로직 짜서 넣기


  // 가장 많이 나온 감정에 대한 조언 리스트에서 랜덤하게 뽑아내기
  const randomIndex = Math.floor(Math.random() * adviceData.length);

  // 랜덤하게 선택된 조언
  const selectedAdvice = adviceData[randomIndex];

  // html에 적용
  adviceElement.textContent = selectedAdvice;
}

// 선택 날짜에 해당하는 8가지 감정 데이터 세팅
function setEmotionValue(month_info) {

}

function getDiary(month_info){
    // db에서 where diary.date = month_info AND diary.emotion = "슬픔???????" 
    // 이렇게 8가지 각각  select count(*) 로 가져와서 emotion에
    // 각 감정에 대한 갯수 구하기 
}
