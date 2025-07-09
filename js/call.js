// 자주 묻는 질문 보기
function showFAQ() {
  document.getElementById("faq").style.display = "block";
  document.getElementById("inquiry").style.display = "none";
}

// 1:1 문의 폼 보기
function showInquiry() {
  document.getElementById("inquiry").style.display = "block";
  document.getElementById("faq").style.display = "none";
}

// 마이페이지 모달 열기
function M() {
  document.getElementById("mypageModal").style.display = "block";
  document.getElementById("modalOverlay").style.display = "block";
}

// 마이페이지 모달 닫기
function closeMypage() {
  document.getElementById("mypageModal").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
}

// 방문 예약 버튼
function makeReservation() {
  alert("방문 예약이 접수되었습니다!");
}

// 문의 폼 제출 처리
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inquiryForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 새로고침 방지
    document.getElementById("confirmModal").style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    form.reset();
  });
});

// 확인 모달 닫기
function closeConfirm() {
  document.getElementById("confirmModal").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
}

// 미구현 기능 알림
function none() {
  alert("이 페이지는 현재 준비 중입니다.");
}

// 홈으로 이동
function H() {
  location.href = "../html/main.html";
}

// 로그아웃
function GB() {
  localStorage.removeItem("username");
  localStorage.removeItem("user");
  localStorage.removeItem("call");
  alert("로그아웃되었습니다.");
  location.reload();
}
document.addEventListener("DOMContentLoaded", function () {
    const userN = localStorage.getItem("username");
    const Uname = document.querySelector(".name");

    if (Uname) {
      if (userN) {
        Uname.innerHTML = `${userN}님`;
        Uname.href = "#";
      } else {
        Uname.innerText = "로그인";
        Uname.href = "../html/login.html";
      }
    }
  });