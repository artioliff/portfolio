/* =============================================
    SCRIPT GLOBAL DO PORTFÓLIO
    - Atualiza ano do rodapé
    - Troca de tema (Dark / Light / Creative)
    - Mantém o tema salvo no localStorage
============================================= */

// Atualiza automaticamente o ano no footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Carrega o tema salvo
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
});

/* =============================
   Função principal de troca de tema
============================= */
function setTheme(theme) {
  applyTheme(theme);
  localStorage.setItem("theme", theme);
}

function applyTheme(theme) {
  const link = document.getElementById("themeStylesheet");

  const themes = {
    dark: "css/styles-dark.css",
    light: "css/styles-light.css",
    creative: "css/styles-creative.css"
  };

  link.href = themes[theme] || themes.dark;
}