const contents = document.querySelectorAll(".content");

// ตั้งค่า Observer
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-reveal");
    }
  });
}, observerOptions);

contents.forEach((section) => {
  observer.observe(section);
});
