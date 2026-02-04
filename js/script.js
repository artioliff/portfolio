// anos automáticos (se existir no tema)
function setYear(id) {
  const el = document.getElementById(id);
  if (el) el.textContent = new Date().getFullYear();
}
setYear("year");
setYear("year2");
setYear("year3");

function applyThemeVisibility(theme) {
  const dark = document.querySelector(".theme-dark");
  const clean = document.querySelector(".theme-clean");
  const creative = document.querySelector(".theme-creative");

  if (dark) dark.style.display = theme === "dark" ? "block" : "none";
  if (clean) clean.style.display = theme === "clean" ? "block" : "none";
  if (creative) creative.style.display = theme === "creative" ? "block" : "none";
}

function setActiveThemeButtons(theme) {
  const btns = document.querySelectorAll("[data-theme-switcher] .theme-btn");

  btns.forEach((btn) => {
    const active = btn.dataset.theme === theme;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active);
  });
}

function setTheme(theme) {
  const link = document.getElementById("themeStylesheet");
  if (!link) return;

  if (theme === "dark") link.href = "css/styles-dark.css";
  if (theme === "clean") link.href = "css/styles-clean.css";
  if (theme === "creative") link.href = "css/styles-creative.css";

  localStorage.setItem("theme", theme);
  applyThemeVisibility(theme);
  setActiveThemeButtons(theme);
}

// carrega tema salvo (fallback seguro)
const savedTheme = localStorage.getItem("theme");
const initial = ["dark", "clean", "creative"].includes(savedTheme) ? savedTheme : "dark";
setTheme(initial);
