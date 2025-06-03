document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("toggle-theme");
  const icon = document.getElementById("theme-icon");

  toggleBtn.addEventListener("click", function () {
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);

    // Cambiar el ícono del botón
    if (newTheme === "dark") {
      icon.classList.remove("bi-sun-fill");
      icon.classList.add("bi-moon-fill");
    } else {
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
    }
  });
});
