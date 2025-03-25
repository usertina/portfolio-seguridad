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

    // Cambio de idioma
    const langEsButton = document.getElementById("lang-es");
    const langEnButton = document.getElementById("lang-en");
    const langEuButton = document.getElementById("lang-eu");
  

    const translateToSpanish = () => {
        document.getElementById("portfolio-title").textContent = "Mi Portfolio de Seguridad Informática";
        document.getElementById("portfolio-description").textContent = "Proyectos, análisis de vulnerabilidades y auditorías";
        document.getElementById("about-title").textContent = "Sobre mí";
        document.getElementById("about-description").textContent = "Desarrolladora web con especialización en seguridad informática. Me apasiona la ciberseguridad y el análisis de vulnerabilidades.";
        document.getElementById("projects-title").textContent = "Proyectos";
        document.getElementById("network-security-analysis-title").textContent = "Análisis de Seguridad en Red";
        document.getElementById("network-security-description").textContent = "Escaneo de red, detección de puertos abiertos y evaluación de vulnerabilidades utilizando herramientas como Nmap, Wireshark y Nessus.";
        document.getElementById("view-report-link").textContent = "Ver Informe";
        document.getElementById("contact-title").textContent = "Contacto";
        document.getElementById("contact-description").textContent = "Puedes encontrarme en las siguientes plataformas:";
        document.getElementById("linkedin-link").textContent = "LinkedIn";
        document.getElementById("github-link").textContent = "GitHub";
        document.getElementById("gmail-link").textContent = "Gmail";
        document.getElementById("footer-contact").innerHTML = 'Contacto: <a href="mailto:agustinacalleja@gmail.com">agustinacalleja@gmail.com</a> |';
    };
    const translateToBasque = () => {
        document.getElementById("portfolio-title").textContent = "Nire Zibersegurtasun Portfolioa";
        document.getElementById("portfolio-description").textContent = "Proiektuak, ahultasun-analisiak eta auditoretzak";
        document.getElementById("about-title").textContent = "Niri buruz";
        document.getElementById("about-description").textContent = "Web garatzailea, zibersegurtasunean espezializatua. Zibersegurtasuna eta ahultasunen analisia dira nire pasioak.";
        document.getElementById("projects-title").textContent = "Proiektuak";
        document.getElementById("network-security-analysis-title").textContent = "Sareko Segurtasun Analisia";
        document.getElementById("network-security-description").textContent = "Sarearen eskaneatzea, irekitako portuen detekzioa eta ahultasunen ebaluazioa, Nmap, Wireshark eta Nessus bezalako tresnak erabiliz.";
        document.getElementById("view-report-link").textContent = "Ikusi Txostena";
        document.getElementById("contact-title").textContent = "Kontaktua";
        document.getElementById("contact-description").textContent = "Hona hemen nire plataformak:";
        document.getElementById("linkedin-link").textContent = "LinkedIn";
        document.getElementById("github-link").textContent = "GitHub";
        document.getElementById("gmail-link").textContent = "Gmail";
        document.getElementById("footer-contact").innerHTML = 'Kontaktua: <a href="mailto:agustinacalleja@gmail.com">agustinacalleja@gmail.com</a> |';
    };
    

    const translateToEnglish = () => {
        document.getElementById("portfolio-title").textContent = "My Cybersecurity Portfolio";
        document.getElementById("portfolio-description").textContent = "Projects, vulnerability analysis, and audits";
        document.getElementById("about-title").textContent = "About Me";
        document.getElementById("about-description").textContent = "Web developer with a specialization in cybersecurity. I am passionate about cybersecurity and vulnerability analysis.";
        document.getElementById("projects-title").textContent = "Projects";
        document.getElementById("network-security-analysis-title").textContent = "Network Security Analysis";
        document.getElementById("network-security-description").textContent = "Network scanning, open port detection, and vulnerability assessment using tools like Nmap, Wireshark, and Nessus.";
        document.getElementById("view-report-link").textContent = "View Report";
        document.getElementById("contact-title").textContent = "Contact";
        document.getElementById("contact-description").textContent = "You can find me on the following platforms:";
        document.getElementById("linkedin-link").textContent = "LinkedIn";
        document.getElementById("github-link").textContent = "GitHub";
        document.getElementById("gmail-link").textContent = "Gmail";
        document.getElementById("footer-contact").innerHTML = 'Contact: <a href="mailto:agustinacalleja@gmail.com">agustinacalleja@gmail.com</a> |';
    };

    langEsButton.addEventListener("click", translateToSpanish);
    langEnButton.addEventListener("click", translateToEnglish);
    langEuButton.addEventListener("click", translateToBasque);
});
