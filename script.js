document.addEventListener("DOMContentLoaded", function () {
    // ========== CONFIGURACIÓN INICIAL ========== //
    const themeToggleButton = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    let currentLanguage = localStorage.getItem("language") || "es";

    // ========== GESTIÓN DEL TEMA ========== //
    const savedTheme = localStorage.getItem("theme") || "light.css";
    themeStyle.setAttribute("href", savedTheme);
    document.body.classList.add(savedTheme === "dark.css" ? "dark-theme" : "light-theme");
    themeToggleButton.textContent = savedTheme === "dark.css" ? "☀️" : "🌙";

    themeToggleButton.addEventListener("click", function () {
        const isDark = themeStyle.getAttribute("href").includes("dark.css");
        themeStyle.setAttribute("href", isDark ? "light.css" : "dark.css");
        localStorage.setItem("theme", isDark ? "light.css" : "dark.css");
        document.body.classList.replace(isDark ? "dark-theme" : "light-theme", isDark ? "light-theme" : "dark-theme");
        themeToggleButton.textContent = isDark ? "🌙" : "☀️";
    });

    // ========== GESTIÓN DE IDIOMAS ========== //
    const langButtons = {
        es: document.getElementById("lang-es"),
        en: document.getElementById("lang-en"),
        eu: document.getElementById("lang-eu")
    };

    function updateActiveLanguageButton() {
        Object.values(langButtons).forEach(btn => btn.classList.remove("active"));
        langButtons[currentLanguage].classList.add("active");
    }

    // ========== TEXTO TRADUCIBLE ========== //
    const translations = {
        es: {
            // Encabezado
            'portfolio-title': "Mi Portfolio de Seguridad Informática",
            'portfolio-description': "Proyectos, análisis de vulnerabilidades y auditorías",

            // Sobre mí
            'about-title': "Sobre mí",
            'about-description': "Desarrolladora web con especialización en seguridad informática. Me apasiona la ciberseguridad y el análisis de vulnerabilidades.",

            // Proyectos
            'projects-title': "Proyectos",
            'network-security-analysis-title': "Análisis de Seguridad en Red",
            'network-security-description': "Escaneo de red, detección de puertos abiertos y evaluación de vulnerabilidades utilizando herramientas como Nmap, Wireshark y Nessus.",
            'security-audit-title': "Auditoría de Seguridad",
            'security-audit-description': "Evaluación detallada de la seguridad en sistemas informáticos, identificando vulnerabilidades y proponiendo soluciones efectivas.",
            'view-report-link': "Descargar Informe",
            'security-audit-link': "Descargar Informe",
  'game-link': "Juego",
            'ransomwarePlaybookTitle': "Playbook de Respuesta ante Incidentes",
            'ransomwarePlaybookDescription': "Selecciona un playbook de respuesta ante incidentes de seguridad para descargarlo.",
            'playbook-label': "Elige un playbook:",
            'option-ransomware': "Ransomware",
            'option-phishing': "Phishing",
            'option-fuga': "Fuga de Datos",
            'option-ddos': "Denegación de Servicios (DDoS)",
            'download-playbook': "Descargar",
           'incidentReportsTitle': "Informes de Incidentes",
'incidentReportsDescription': "Selecciona un informe técnico relacionado con un incidente de seguridad para descargarlo.",
'incidentSelectLabel': "Elige un informe:",
'option-dns': "Caída del Servicio DNS",
'option-dos': "Ataque DoS a Viajes Sol y Mar",
'download-incident': "Descargar",
            'lan-budget-title': "Presupuesto de Red LAN",
            'lan-budget-description': "Diseño e instalación de una red LAN escalable para una empresa de tres plantas, con presupuesto detallado, equipamiento y mantenimiento.",
            'lan-budget-link': "Descargar Informe",

            // Contacto
            'contact-title': "Contacto",
            'contact-description': "Puedes encontrarme en las siguientes plataformas:",
            'linkedin-link': "LinkedIn",
            'cv-link': "Currículum Vitae",
            'github-link': "GitHub",
            'gmail-link': "Gmail",

            // Footer
            'portfolio-text': "Portfolio de Seguridad Informática",
            'footer-text': "Contacto",
            'privacy-link': "Política de Privacidad",
            'terms-link': "Términos de Uso",
            'footer-email': "agustinacalleja@gmail.com"
        },
        en: {
            // Header
            'portfolio-title': "My Cybersecurity Portfolio",
            'portfolio-description': "Projects, vulnerability analysis, and audits",

            // About
            'about-title': "About Me",
            'about-description': "Web developer with a specialization in cybersecurity. I am passionate about cybersecurity and vulnerability analysis.",

            // Projects
            'projects-title': "Projects",
            'network-security-analysis-title': "Network Security Analysis",
            'network-security-description': "Network scanning, open port detection, and vulnerability assessment using tools like Nmap, Wireshark, and Nessus.",
            'security-audit-title': "Security Audit",
            'security-audit-description': "Detailed evaluation of computer system security, identifying vulnerabilities and proposing effective solutions.",
            'view-report-link': "Download Report",
            'security-audit-link': "Download Report",
 'game-link': "Game",
            'ransomwarePlaybookTitle': "Incident Response Playbook",
            'ransomwarePlaybookDescription': "Select a security incident response playbook to download.",
            'playbook-label': "Choose a playbook:",
            'option-ransomware': "Ransomware",
            'option-phishing': "Phishing",
            'option-fuga': "Data Breach",
            'option-ddos': "Denial of Service (DDoS)",
            'download-playbook': "Download",
           'incidentReportsTitle': "Incident Reports",
'incidentReportsDescription': "Select a technical report related to a security incident to download.",
'incidentSelectLabel': "Choose a report:",
'option-dns': "DNS Service Outage",
'option-dos': "DoS Attack on Viajes Sol y Mar",
'download-incident': "Download",
            'lan-budget-title': "LAN Network Budget",
            'lan-budget-description': "Design and installation of a scalable LAN network for a three-story company, including detailed budget, equipment, and maintenance.",
            'lan-budget-link': "Download Report",

            // Contact
            'contact-title': "Contact",
            'contact-description': "You can find me on the following platforms:",
            'linkedin-link': "LinkedIn",
            'cv-link': "Curriculum Vitae",
            'github-link': "GitHub",
            'gmail-link': "Gmail",

            // Footer
            'portfolio-text': "Cybersecurity Portfolio",
            'footer-text': "Contact",
            'privacy-link': "Privacy Policy",
            'terms-link': "Terms of Service",
            'footer-email': "agustinacalleja@gmail.com"
        },
        eu: {
            // Goiburua
            'portfolio-title': "Nire Zibersegurtasun Portfolioa",
            'portfolio-description': "Proiektuak, ahultasun-analisiak eta auditoretzak",

            // Niri buruz
            'about-title': "Niri buruz",
            'about-description': "Web garatzailea, zibersegurtasunean espezializatua. Zibersegurtasuna eta ahultasunen analisia dira nire pasioak.",

            // Proiektuak
            'projects-title': "Proiektuak",
            'network-security-analysis-title': "Sareko Segurtasun Analisia",
            'network-security-description': "Sarearen eskaneatzea, irekitako portuen detekzioa eta ahultasunen ebaluazioa, Nmap, Wireshark eta Nessus bezalako tresnak erabiliz.",
            'security-audit-title': "Segurtasun Auditoria",
            'security-audit-description': "Sistema informatikoen segurtasunaren ebaluazio zehatza, ahultasunak identifikatuz eta irtenbide eraginkorrak proposatuz.",
            'view-report-link': "Txostena deskargatu",
            'security-audit-link': "Txostena deskargatu",
'game-link': "Jokoa",
            'ransomwarePlaybookTitle': "Gertaeren Erantzun Playbook-a",
            'ransomwarePlaybookDescription': "Hautatu segurtasun-erasoen aurkako erantzun-playbook bat deskargatzeko.",
            'playbook-label': "Hautatu playbook bat:",
            'option-ransomware': "Ransomware",
            'option-phishing': "Phishing-a",
            'option-fuga': "Datu-ihesa",
            'option-ddos': "Zerbitzu-ukapen erasoa (DDoS)",
            'download-playbook': "Deskargatu",
           'incidentReportsTitle': "Gertaeren Txostenak",
'incidentReportsDescription': "Hautatu segurtasun-istripu bati buruzko txosten tekniko bat deskargatzeko.",
'incidentSelectLabel': "Hautatu txostena:",
'option-dns': "DNS Zerbitzuaren Erorketa",
'option-dos': "DoS Erasoa: Viajes Sol y Mar",
'download-incident': "Deskargatu", 
            'lan-budget-title': "LAN Sarearen Aurrekontua",
            'lan-budget-description': "Hiru solairuko enpresa baterako LAN sare eskalagarriaren diseinua eta instalazioa, aurrekontu zehatza, ekipamendua eta mantentzea barne.",
            'lan-budget-link': "Txostena deskargatu",

            // Kontaktua
            'contact-title': "Kontaktua",
            'contact-description': "Hona hemen nire plataformak:",
            'linkedin-link': "LinkedIn",
            'cv-link': "Curriculum Vitae",
            'github-link': "GitHub",
            'gmail-link': "Gmail",

            // Footer
            'portfolio-text': "Zibersegurtasun Portfolioa",
            'footer-text': "Kontaktua",
            'privacy-link': "Pribatutasun Politika",
            'terms-link': "Erabilpen Baldintzak",
            'footer-email': "agustinacalleja@gmail.com"
        }
    };

    // ========== FUNCIONES DE FECHA/HORA ========== //
    function updateDateTime() {
    const now = new Date();
    const lang = currentLanguage; // Usamos directamente el idioma seleccionado

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: lang === 'en' ? 'UTC' : 'Europe/Madrid'
    };

    try {
        // Formato completo para fecha y hora
        const dateTimeStr = now.toLocaleString(lang, options);
        
        // Si tienes elementos separados para fecha y hora:
        const [weekday, date, time] = dateTimeStr.split(', ');
        document.getElementById("current-date").textContent = `${weekday}, ${date}`;
        document.getElementById("current-time").textContent = time;
        document.getElementById("current-year").textContent = now.getFullYear();

    } catch (e) {
        console.error("Error formateando fecha:", e);
        // Fallback en español si hay error
        const fallbackFormat = now.toLocaleString('es', options);
        const [weekday, date, time] = fallbackFormat.split(', ');
        document.getElementById("current-date").textContent = `${weekday}, ${date}`;
        document.getElementById("current-time").textContent = time;
        document.getElementById("current-year").textContent = now.getFullYear();
    }
}

    function changeLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem("language", lang);
        updateActiveLanguageButton();

        // Aplicar traducciones
        Object.entries(translations[lang]).forEach(([key, value]) => {
            const element = document.getElementById(key);
            if (element) {
                if (key.includes('-link') && element.querySelector("i")) {
                    const icon = element.querySelector("i");
                    element.innerHTML = `${icon.outerHTML} ${value}`;
                } else {
                    element.textContent = value;
                }
            }
        });

        updateDateTime();
    }

    // ========== PLAYBOOK DOWNLOAD ========== //
document.getElementById("download-incident").addEventListener("click", function() {
    const selectedIncident = document.getElementById("incident-select").value;
    if (selectedIncident) {
        const downloadBtn = this;
        const states = {
            es: ["Descargando...", "Descargado", "Descargar"],
            en: ["Downloading...", "Downloaded", "Download"],
            eu: ["Deskargatzen...", "Deskargatuta", "Deskargatu"]
        };

        downloadBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${states[currentLanguage][0]}`;

        setTimeout(() => {
            window.open(selectedIncident, "_blank");
            downloadBtn.innerHTML = `<i class="fas fa-check"></i> ${states[currentLanguage][1]}`;

            setTimeout(() => {
                downloadBtn.innerHTML = `<i class="fas fa-file-download"></i> ${states[currentLanguage][2]}`;
            }, 2000);
        }, 500);
    }
});
    document.getElementById("download-playbook").addEventListener("click", function() {
        const selectedFile = document.getElementById("playbook-select").value;
        if (selectedFile) {
            const downloadBtn = this;
            const states = {
                es: ["Descargando...", "Descargado", "Descargar"],
                en: ["Downloading...", "Downloaded", "Download"],
                eu: ["Deskargatzen...", "Deskargatuta", "Deskargatu"]
            };

            downloadBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${states[currentLanguage][0]}`;

            setTimeout(() => {
                window.open(selectedFile, "_blank");
                downloadBtn.innerHTML = `<i class="fas fa-check"></i> ${states[currentLanguage][1]}`;

                setTimeout(() => {
                    downloadBtn.innerHTML = `<i class="fas fa-file-download"></i> ${states[currentLanguage][2]}`;
                }, 2000);
            }, 500);
        }
    });

    // ========== INICIALIZACIÓN ========== //
    Object.entries(langButtons).forEach(([lang, btn]) => {
        btn.addEventListener("click", () => changeLanguage(lang));
    });

    // Iniciar
    changeLanguage(currentLanguage);
    updateDateTime();
    setInterval(updateDateTime, 1000);

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});