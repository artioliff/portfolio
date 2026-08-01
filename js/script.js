// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".sidebar nav a");

function onScroll() {
  let current = "";
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
}
window.addEventListener("scroll", onScroll);
onScroll();
