const container = document.querySelector(".container");
const row = document.querySelectorAll(".row");
container.addEventListener("click", function () {
  row.forEach(function (element) {
    element.classList.add("row-animate-click");
  });

  setTimeout(() => {
    row.forEach(function (element) {
      element.classList.remove("row-animate-click");
    });
  }, 3000);
});

function widthCalculator() {
  var vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vw", vw + "px");
}

widthCalculator();
window.addEventListener("resize", widthCalculator);
window.addEventListener("orientationchange", widthCalculator);
