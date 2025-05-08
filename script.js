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
                ransomwarePlaybookTitle: "Playbook de Respuesta ante Incidentes",
                ransomwarePlaybookDescription: "Selecciona un playbook de respuesta ante incidentes de seguridad para descargarlo.",
                playbookLabel: "Elige un playbook:",
                optionRansomware: "Ransomware",
                optionPhishing: "Phishing",
                optionFuga: "Fuga de Datos",
                optionDdos: "Denegación de Servicios (DDoS)",
                downloadPlaybook: "Descargar",
                dnsIncidentTitle: "Informe de Incidente DNS",
                dnsIncidentDescription: "Análisis de tráfico de red ante caída del servicio DNS, incluyendo diagnóstico con tcpdump y recomendaciones.",
                dnsIncidentLink: "Descargar Informe",
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
                ransomwarePlaybookTitle: "Incident Response Playbook",
                ransomwarePlaybookDescription: "Select a security incident response playbook to download.",
                playbookLabel: "Choose a playbook:",
                optionRansomware: "Ransomware",
                optionPhishing: "Phishing",
                optionFuga: "Data Breach",
                optionDdos: "Denial of Service (DDoS)",
                downloadPlaybook: "Download",
                dnsIncidentTitle: "DNS Incident Report",
                dnsIncidentDescription: "Network traffic analysis due to DNS service outage, including tcpdump diagnosis and recommendations.",
                dnsIncidentLink: "Download Report",
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
                ransomwarePlaybookTitle: "Gertaeren Erantzun Playbook-a",
                ransomwarePlaybookDescription: "Hautatu segurtasun-erasoen aurkako erantzun-playbook bat deskargatzeko.",
                playbookLabel: "Hautatu playbook bat:",
                optionRansomware: "Ransomware",
                optionPhishing: "Phishing-a",
                optionFuga: "Datu-ihesa",
                optionDdos: "Zerbitzu-ukapen erasoa (DDoS)",
                downloadPlaybook: "Deskargatu",
                dnsIncidentTitle: "DNS Gorabeheraren Txostena",
                dnsIncidentDescription: "Sareko trafikoaren analisia DNS zerbitzuaren etenaren aurrean, tcpdump erabiliz eta gomendioekin.",
                dnsIncidentLink: "Txostena deskargatu",
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
        document.getElementById("ransomwarePlaybookTitle").textContent = texts[lang].ransomwarePlaybookTitle;
        document.getElementById("ransomwarePlaybookDescription").textContent = texts[lang].ransomwarePlaybookDescription;
        document.getElementById("playbook-label").textContent = texts[lang].playbookLabel;
        document.getElementById("option-ransomware").textContent = texts[lang].optionRansomware;
        document.getElementById("option-phishing").textContent = texts[lang].optionPhishing;
        document.getElementById("option-fuga").textContent = texts[lang].optionFuga;
        document.getElementById("option-ddos").textContent = texts[lang].optionDdos;
        document.getElementById("download-playbook").textContent = texts[lang].downloadPlaybook;
        document.getElementById("view-report-link").textContent = texts[lang].viewReport;
        document.getElementById("dns-incident-title").textContent = texts[lang].dnsIncidentTitle;
        document.getElementById("dns-incident-description").textContent = texts[lang].dnsIncidentDescription;
        document.getElementById("dns-incident-link").textContent = texts[lang].dnsIncidentLink;
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

// Descargar playbook
    const downloadButton = document.getElementById("download-playbook");
    const select = document.getElementById("playbook-select");

    downloadButton.addEventListener("click", () => {
        const selectedFile = select.value;
        if (selectedFile) {
            window.open(selectedFile, "_blank");
        }
    });
});
