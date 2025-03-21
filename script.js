document.addEventListener("DOMContentLoaded", function () {
    let themeToggleButton = document.getElementById("theme-toggle");
    let themeStyle = document.getElementById("theme-style");

    // Verificar si hay un tema guardado en localStorage
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeStyle.setAttribute("href", savedTheme);
        themeToggleButton.textContent = savedTheme === "dark.css" ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    }

    themeToggleButton.addEventListener("click", function () {
        if (themeStyle.getAttribute("href") === "light.css") {
            themeStyle.setAttribute("href", "dark.css");
            localStorage.setItem("theme", "dark.css");
            themeToggleButton.textContent = "☀️ Modo Claro";
        } else {
            themeStyle.setAttribute("href", "light.css");
            localStorage.setItem("theme", "light.css");
            themeToggleButton.textContent = "🌙 Modo Oscuro";
        }
    });
});
