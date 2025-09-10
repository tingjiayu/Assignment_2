const listenBtn = document.getElementById("listenButton");
const overlay = document.getElementById("overlay");
const yearSelect = document.getElementById("yearSelect");

listenBtn.addEventListener("click", () => {
  overlay.classList.add("fade-out");

  const selectedYear = yearSelect.value;
  console.log("Selected year:", selectedYear);

  // 示例：可在这里根据年份切换背景/音效等
  // if (selectedYear === "2012") {
  //   document.querySelector('.background img').src = "carousel2012.gif";
  // }
});
