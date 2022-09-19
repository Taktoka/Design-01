let lists = document.querySelectorAll(".list li");
links = document.querySelectorAll(".navbar-nav a");

function active(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      elements.forEach((ele) => {
        ele.classList.remove("active");
        ele.classList.remove("rounded-pill");
      });
      e.target.classList.add("active");
      e.target.classList.add("rounded-pill");
    });
  });
}
active(lists);
active(links);
