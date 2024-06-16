//javascript
// 버튼 엘리먼트를 가져옵니다.
const changeColorBtn = document.getElementById('changeColorBtn')

// 랜덤 색상 생성을 위한 색상 배열
const colors = [
  '#ef5777',
  '#575fcf',
  // (생략)
  '#ff3f34',
]

// 이벤트 리스너를 사용하여 버튼 클릭 시 배경색을 변경하는 함수를 정의합니다.
const changeBackgroundColor = () => {
  // 랜덤한 색상 선택
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  // body 요소의 배경색을 변경합니다.
  document.body.style.backgroundColor = randomColor
}

// 버튼 클릭 시 배경색을 변경하는 이벤트 리스너를 추가합니다.
changeColorBtn.addEventListener('click', changeBackgroundColor)
