function Goback() {
  const name = document.getElementById("username").value.trim();//이름
  const all = document.getElementById("user").value.trim();//주민번호
  const checkbox = document.querySelector(".private input");

  if (name !== "" && all !== "" && checkbox.checked) {//다 했으면
    localStorage.setItem("username", name);//이름저장
    localStorage.setItem("user", all);//주민번호 저장
    window.location.href = "../html/main.html";//이동
  } else {//아니면 경고창뛰우기
    alert("값을 모두 입력하고 개인정보 수집에 동의해주세요.");
  }
}
