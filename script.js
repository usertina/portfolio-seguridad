document.addEventListener("DOMContentLoaded", function () {
    let themeToggleButton = document.getElementById("theme-toggle");
    let themeStyle = document.getElementById("theme-style");

    // Verificar si hay un tema guardado en localStorage
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeStyle.setAttribute("href", savedTheme);
        themeToggleButton.textContent = savedTheme === "dark.css" ? "☀️" : "🌙";
    }

    themeToggleButton.addEventListener("click", function () {
        if (themeStyle.getAttribute("href") === "light.css") {
            themeStyle.setAttribute("href", "dark.css");
            localStorage.setItem("theme", "dark.css");
            themeToggleButton.textContent = "☀️";
        } else {
            themeStyle.setAttribute("href", "light.css");
            localStorage.setItem("theme", "light.css");
            themeToggleButton.textContent = "🌙";
        }
    });

    // Cambio de idioma
    const langEsButton = document.getElementById("lang-es");
    const langEnButton = document.getElementById("lang-en");
    const langEuButton = document.getElementById("lang-eu");

    function changeLanguage(lang) {
        const texts = {
            es: {
                portfolioTitle: "Mi Portfolio de Seguridad Informática",
                portfolioDescription: "Proyectos, análisis de vulnerabilidades y auditorías",
                aboutTitle: "Sobre mí",
                aboutDescription: "Desarrolladora web con especialización en seguridad informática. Me apasiona la ciberseguridad y el análisis de vulnerabilidades.",
                projectsTitle: "Proyectos",
                networkSecurityTitle: "Análisis de Seguridad en Red",
                networkSecurityDescription: "Escaneo de red, detección de puertos abiertos y evaluación de vulnerabilidades utilizando herramientas como Nmap, Wireshark y Nessus.",
                securityAuditTitle: "Auditoría de Seguridad",
                securityAuditDescription: "Evaluación detallada de la seguridad en sistemas informáticos, identificando vulnerabilidades y proponiendo soluciones efectivas.",
                securityAuditLink: "Descargar Informe", 
                viewReport: "Descargar Informe",
                ransomware-playbook-title: "Playbook de Respuesta ante Ransomware",
                ransomware-playbook-description: "Guía detallada con procedimientos paso a paso para actuar ante un incidente de ransomware, incluyendo identificación, contención, erradicación y recuperación segura.",
                ransomware-playbook-link: "Descargar Informe",
                contactTitle: "Contacto",
                contactDescription: "Puedes encontrarme en las siguientes plataformas:",
                linkedin: "LinkedIn",
                cv: "Currículum Vitae",
                github: "GitHub",
                gmail: "Gmail",
                footerContact: "Contacto: "
            },
            en: {
                portfolioTitle: "My Cybersecurity Portfolio",
                portfolioDescription: "Projects, vulnerability analysis, and audits",
                aboutTitle: "About Me",
                aboutDescription: "Web developer with a specialization in cybersecurity. I am passionate about cybersecurity and vulnerability analysis.",
                projectsTitle: "Projects",
                networkSecurityTitle: "Network Security Analysis",
                networkSecurityDescription: "Network scanning, open port detection, and vulnerability assessment using tools like Nmap, Wireshark, and Nessus.",
                securityAuditTitle: "Security Audit",
                securityAuditDescription: "Detailed evaluation of computer system security, identifying vulnerabilities and proposing effective solutions.",
                securityAuditLink: "Download Report",
                viewReport: "Download Report",
                ransomware-playbook-title: "Ransomware Incident Response Playbook",
                ransomware-playbook-description: "Detailed step-by-step guide to respond to a ransomware incident, including identification, containment, eradication, and secure recovery.",
                ransomware-playbook-link: "Download Report",    
                contactTitle: "Contact",
                contactDescription: "You can find me on the following platforms:",
                linkedin: "LinkedIn",
                cv: "Currículum Vitae",
                github: "GitHub",
                gmail: "Gmail",
                footerContact: "Contact: "
            },
            eu: {
                portfolioTitle: "Nire Zibersegurtasun Portfolioa",
                portfolioDescription: "Proiektuak, ahultasun-analisiak eta auditoretzak",
                aboutTitle: "Niri buruz",
                aboutDescription: "Web garatzailea, zibersegurtasunean espezializatua. Zibersegurtasuna eta ahultasunen analisia dira nire pasioak.",
                projectsTitle: "Proiektuak",
                networkSecurityTitle: "Sareko Segurtasun Analisia",
                networkSecurityDescription: "Sarearen eskaneatzea, irekitako portuen detekzioa eta ahultasunen ebaluazioa, Nmap, Wireshark eta Nessus bezalako tresnak erabiliz.",
                securityAuditTitle: "Segurtasun Auditoria",
                securityAuditDescription: "Sistema informatikoen segurtasunaren ebaluazio zehatza, ahultasunak identifikatuz eta irtenbide eraginkorrak proposatuz.",
                securityAuditLink: "Txostena deskargatu",
                viewReport: "Txostena deskargatu",
                ransomware-playbook-title: "Ransomware Erasoei Erantzuteko Playbook-a",
                ransomware-playbook-description: "Ransomware erasoren baten aurrean jarduteko urratsez urratseko gida zehatza, identifikazioa, edukitzea, ezabatzea eta berreskuratze segurua barne.",
                ransomware-playbook-link: "Txostena deskargatu",
                contactTitle: "Kontaktua",
                contactDescription: "Hona hemen nire plataformak:",
                linkedin: "LinkedIn",
                cv: "Currículum Vitae",
                github: "GitHub",
                gmail: "Gmail",
                footerContact: "Kontaktua: "
            }
        };

        document.getElementById("portfolio-title").textContent = texts[lang].portfolioTitle;
        document.getElementById("portfolio-description").textContent = texts[lang].portfolioDescription;
        document.getElementById("about-title").textContent = texts[lang].aboutTitle;
        document.getElementById("about-description").textContent = texts[lang].aboutDescription;
        document.getElementById("projects-title").textContent = texts[lang].projectsTitle;
        document.getElementById("network-security-analysis-title").textContent = texts[lang].networkSecurityTitle;
        document.getElementById("network-security-description").textContent = texts[lang].networkSecurityDescription;
        document.getElementById("security-audit-title").textContent = texts[lang].securityAuditTitle;
        document.getElementById("security-audit-description").textContent = texts[lang].securityAuditDescription;
        document.getElementById("security-audit-link").textContent = texts[lang].securityAuditLink;
        document.getElementById("ransomware-playbook-title").textContent = texts[lang].ransomwarePlaybookTitle;
        document.getElementById("ransomware-playbook-description").textContent = texts[lang].ransomwarePlaybookDescription;
        document.getElementById("ransomware-playbook-link").textContent = texts[lang].ransomwarePlaybookLink;
        document.getElementById("view-report-link").textContent = texts[lang].viewReport;
        document.getElementById("contact-title").textContent = texts[lang].contactTitle;
        document.getElementById("contact-description").textContent = texts[lang].contactDescription;
        document.getElementById("footer-contact").innerHTML = texts[lang].footerContact + 
            '<a href="mailto:agustinacalleja@gmail.com">agustinacalleja@gmail.com</a> |';

        // Actualizar solo el texto de los enlaces sin eliminar los iconos
        updateLinkText("linkedin-link", texts[lang].linkedin);
        updateLinkText("cv-link", texts[lang].cv);
        updateLinkText("github-link", texts[lang].github);
        updateLinkText("gmail-link", texts[lang].gmail);
    }

    function updateLinkText(elementId, text) {
        const link = document.getElementById(elementId);
        if (link) {
            const textNode = link.childNodes[1]; // Segundo nodo suele ser el texto después del icono
            if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                textNode.textContent = " " + text; // Mantiene el espacio entre el icono y el texto
            }
        }
    }

    // Asignar eventos a los botones de cambio de idioma
    langEsButton.addEventListener("click", () => changeLanguage("es"));
    langEnButton.addEventListener("click", () => changeLanguage("en"));
    langEuButton.addEventListener("click", () => changeLanguage("eu"));
});
