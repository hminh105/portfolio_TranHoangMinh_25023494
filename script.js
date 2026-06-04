const portfolioData = {
  name: "Trần Hoàng Minh",
  major: "Mạng máy tính và truyền thông dữ liệu",
  studentId: "25023494",
  studentClass: "K70I-CN1",
  avatar: "assets/avatar.jpg"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#student-name, #profile-name").forEach((element) => {
    element.textContent = portfolioData.name;
  });

  document.getElementById("major").textContent = portfolioData.major;
  document.getElementById("student-id").textContent = portfolioData.studentId;
  document.getElementById("student-class").textContent = portfolioData.studentClass;
  document.getElementById("avatar").src = portfolioData.avatar;
});
