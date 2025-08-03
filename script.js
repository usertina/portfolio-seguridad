document.addEventListener("DOMContentLoaded", function () {
    // ========== CONFIGURACIÓN INICIAL ========== //
    const themeToggleButton = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");
    let currentLanguage = localStorage.getItem("language") || "es";

    // ========== CURSOR PERSONALIZADO ========== //
    const cursorDot = document.getElementById("cursor-dot");
    const cursorOutline = document.getElementById("cursor-outline");

    function initCustomCursor() {
        if (window.innerWidth > 768) { // Solo en desktop
            document.addEventListener("mousemove", (e) => {
                const x = e.clientX;
                const y = e.clientY;
                
                cursorDot.style.left = x + "px";
                cursorDot.style.top = y + "px";
                
                cursorOutline.style.left = x + "px";
                cursorOutline.style.top = y + "px";
            });

            // Efectos especiales en elementos interactivos
            const interactiveElements = document.querySelectorAll('a, button, .project-card, .contact-card');
            
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorOutline.style.transform = 'scale(1.5)';
                    cursorDot.style.transform = 'scale(2)';
                });
                
                el.addEventListener('mouseleave', () => {
                    cursorOutline.style.transform = 'scale(1)';
                    cursorDot.style.transform = 'scale(1)';
                });
            });
        } else {
            // Ocultar cursor personalizado en móvil
            cursorDot.style.display = 'none';
            cursorOutline.style.display = 'none';
        }
    }

    // ========== PARTÍCULAS DE FONDO ========== //
    function createParticles() {
        const particlesContainer = document.getElementById("particles");
        const particleCount = window.innerWidth > 768 ? 50 : 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            
            // Tamaño aleatorio
            const size = Math.random() * 4 + 1;
            particle.style.width = size + "px";
            particle.style.height = size + "px";
            
            // Posición aleatoria
            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";
            
            // Animación aleatoria
            particle.style.animationDelay = Math.random() * 6 + "s";
            particle.style.animationDuration = (Math.random() * 3 + 3) + "s";
            
            particlesContainer.appendChild(particle);
        }
    }

    // ========== GESTIÓN DEL TEMA ========== //
    const savedTheme = localStorage.getItem("theme") || "light.css";
    themeStyle.setAttribute("href", savedTheme);
    document.body.classList.add(savedTheme === "dark.css" ? "dark-theme" : "light-theme");
    
    // Actualizar icono del botón
    const themeIcon = themeToggleButton.querySelector("i");
    themeIcon.className = savedTheme === "dark.css" ? "fas fa-sun" : "fas fa-moon";

    themeToggleButton.addEventListener("click", function () {
        const isDark = themeStyle.getAttribute("href").includes("dark.css");
        const newTheme = isDark ? "light.css" : "dark.css";
        
        // Transición suave
        document.body.style.transition = "all 0.3s ease";
        
        themeStyle.setAttribute("href", newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.classList.replace(
            isDark ? "dark-theme" : "light-theme", 
            isDark ? "light-theme" : "dark-theme"
        );
        
        // Actualizar icono con animación
        themeIcon.style.transform = "rotate(180deg)";
        setTimeout(() => {
            themeIcon.className = isDark ? "fas fa-moon" : "fas fa-sun";
            themeIcon.style.transform = "rotate(0deg)";
        }, 150);
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
            'specialist-badge': "Especialista en Ciberseguridad",
            'featured-badge': "Destacado",

            // Sobre mí
            'about-title': "Sobre mí",
            'about-description': "Desarrolladora web con especialización en seguridad informática. Me apasiona la ciberseguridad y el análisis de vulnerabilidades.",

            // Habilidades
            'skill-penetration': "Pruebas de Penetración",
            'skill-network': "Seguridad de Redes",
            'skill-vulnerability': "Evaluación de Vulnerabilidades",
            'skill-incident': "Respuesta a Incidentes",
            'skill-auditing': "Auditoría de Seguridad",

            // Tecnologías
            'tech-nmap': "Nmap",
            'tech-wireshark': "Wireshark",
            'tech-nessus': "Nessus",
            'tech-security-assessment': "Evaluación de Seguridad",
            'tech-compliance': "Cumplimiento Normativo",
            'tech-network-design': "Diseño de Redes",
            'tech-infrastructure': "Infraestructura",
            'tech-budget-planning': "Planificación de Presupuesto",

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
            'option-ransomware': "🔒 Ransomware",
            'option-phishing': "🎣 Phishing",
            'option-fuga': "📊 Fuga de Datos",
            'option-ddos': "⚡ Denegación de Servicios (DDoS)",
            'download-playbook': "Descargar",
            'playbook-label': "Tipo de Playbook:",
            'incidentReportsTitle': "Informes de Incidentes",
            'incidentReportsDescription': "Selecciona un informe técnico relacionado con un incidente de seguridad para descargarlo.",
            'incident-label': "Tipo de Incidente:",
            'option-dns': "🌐 Caída del Servicio DNS",
            'option-dos': "⚡ Ataque DoS a Viajes Sol y Mar",
            'option-hardening': "🛡️ Hardening SO + Respuesta Incidente",
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
            'footer-email': "Contacto"
        },
        en: {
            // Header
            'portfolio-title': "My Cybersecurity Portfolio",
            'portfolio-description': "Projects, vulnerability analysis, and audits",
            'specialist-badge': "Cybersecurity Specialist",
            'featured-badge': "Featured",

            // About
            'about-title': "About Me",
            'about-description': "Web developer with a specialization in cybersecurity. I am passionate about cybersecurity and vulnerability analysis.",

            // Skills
            'skill-penetration': "Penetration Testing",
            'skill-network': "Network Security",
            'skill-vulnerability': "Vulnerability Assessment",
            'skill-incident': "Incident Response",
            'skill-auditing': "Security Auditing",

            // Technologies
            'tech-nmap': "Nmap",
            'tech-wireshark': "Wireshark",
            'tech-nessus': "Nessus",
            'tech-security-assessment': "Security Assessment",
            'tech-compliance': "Compliance",
            'tech-network-design': "Network Design",
            'tech-infrastructure': "Infrastructure",
            'tech-budget-planning': "Budget Planning",

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
            'option-ransomware': "🔒 Ransomware",
            'option-phishing': "🎣 Phishing",
            'option-fuga': "📊 Data Breach",
            'option-ddos': "⚡ Denial of Service (DDoS)",
            'download-playbook': "Download",
            'playbook-label': "Choose Playbook:",
            'incidentReportsTitle': "Incident Reports",
            'incidentReportsDescription': "Select a technical report related to a security incident to download.",
            'incident-label': "Choose Incident:",
            'option-dns': "🌐 DNS Service Outage",
            'option-dos': "⚡ DoS Attack on Viajes Sol y Mar",
            'option-hardening': "🛡️ OS Hardening + Incident Response",
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
            'footer-email': "Contact"
        },
        eu: {
            // Goiburua
            'portfolio-title': "Nire Zibersegurtasun Portfolioa",
            'portfolio-description': "Proiektuak, ahultasun-analisiak eta auditoretzak",
            'specialist-badge': "Zibersegurtasun Adituak",
            'featured-badge': "Nabarmentua",

            // Niri buruz
            'about-title': "Niri buruz",
            'about-description': "Web garatzailea, zibersegurtasunean espezializatua. Zibersegurtasuna eta ahultasunen analisia dira nire pasioak.",

            // Trebetasunak
            'skill-penetration': "Penetrazio Probak",
            'skill-network': "Sareen Segurtasuna",
            'skill-vulnerability': "Ahultasunen Ebaluazioa",
            'skill-incident': "Gertaeren Erantzuna",
            'skill-auditing': "Segurtasun Auditoria",

            // Teknologiak
            'tech-nmap': "Nmap",
            'tech-wireshark': "Wireshark",
            'tech-nessus': "Nessus",
            'tech-security-assessment': "Segurtasun Ebaluazioa",
            'tech-compliance': "Arau Betetzea",
            'tech-network-design': "Sareen Diseinua",
            'tech-infrastructure': "Azpiegitura",
            'tech-budget-planning': "Aurrekontu Plangintza",

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
            'option-ransomware': "🔒 Ransomware",
            'option-phishing': "🎣 Phishing-a",
            'option-fuga': "📊 Datu-ihesa",
            'option-ddos': "⚡ Zerbitzu-ukapen erasoa (DDoS)",
            'download-playbook': "Deskargatu",
            'playbook-label': "Hautatu Playbook-a:",
            'incidentReportsTitle': "Gertaeren Txostenak",
            'incidentReportsDescription': "Hautatu segurtasun-istripu bati buruzko txosten tekniko bat deskargatzeko.",
            'incident-label': "Hautatu Gertaera:",
            'option-dns': "🌐 DNS Zerbitzuaren Erorketa",
            'option-dos': "⚡ DoS Erasoa: Viajes Sol y Mar",
            'option-hardening': "🛡️ SO Gogortzea + Gertaeraren Erantzuna",
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
            'footer-email': "Kontaktua"
        }
    };

    // ========== FUNCIONES DE FECHA/HORA ========== //
    function updateDateTime() {
        const now = new Date();
        const lang = currentLanguage;

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        try {
            const dateTimeStr = now.toLocaleString(lang, options);
            const [weekday, date, time] = dateTimeStr.split(', ');
            document.getElementById("current-date").textContent = `${weekday}, ${date}`;
            document.getElementById("current-time").textContent = time;
            document.getElementById("current-year").textContent = now.getFullYear();

        } catch (e) {
            console.error("Error formateando fecha:", e);
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

        // Aplicar traducciones con animación
        Object.entries(translations[lang]).forEach(([key, value]) => {
            const element = document.getElementById(key);
            if (element) {
                // Animación de transición
                element.style.opacity = '0.5';
                element.style.transform = 'translateY(-5px)';
                
                setTimeout(() => {
                    if (key.includes('-link') && element.querySelector("i")) {
                        const icon = element.querySelector("i");
                        element.innerHTML = `${icon.outerHTML} <span>${value}</span>`;
                    } else {
                        element.textContent = value;
                    }
                    
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 150);
            }
        });

        updateDateTime();
    }

    // ========== EFECTOS DE DESCARGA CON ANIMACIÓN ========== //
    function animateDownloadButton(button, states) {
        const originalContent = button.innerHTML;
        
        // Estado de carga
        button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>${states[0]}</span>`;
        button.style.pointerEvents = 'none';
        
        setTimeout(() => {
            // Estado de éxito
            button.innerHTML = `<i class="fas fa-check"></i> <span>${states[1]}</span>`;
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            setTimeout(() => {
                // Volver al estado original
                button.innerHTML = originalContent;
                button.style.pointerEvents = 'auto';
                button.style.background = '';
            }, 2000);
        }, 800);
    }

    // ========== PLAYBOOK DOWNLOAD ========== //
    document.getElementById("download-incident").addEventListener("click", function() {
        const selectedIncident = document.getElementById("incident-select").value;
        if (selectedIncident) {
            const states = {
                es: ["Descargando...", "Descargado"],
                en: ["Downloading...", "Downloaded"],
                eu: ["Deskargatzen...", "Deskargatuta"]
            };

            animateDownloadButton(this, states[currentLanguage]);
            
            setTimeout(() => {
                window.open(selectedIncident, "_blank");
            }, 500);
        }
    });

    document.getElementById("download-playbook").addEventListener("click", function() {
        const selectedFile = document.getElementById("playbook-select").value;
        if (selectedFile) {
            const states = {
                es: ["Descargando...", "Descargado"],
                en: ["Downloading...", "Downloaded"],
                eu: ["Deskargatzen...", "Deskargatuta"]
            };

            animateDownloadButton(this, states[currentLanguage]);
            
            setTimeout(() => {
                window.open(selectedFile, "_blank");
            }, 500);
        }
    });

    // ========== EFECTOS DE SCROLL ========== //
    function initScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar elementos para animaciones de scroll
        const animatedElements = document.querySelectorAll('.project-card, .contact-card, .section-title');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // ========== EFECTOS DE HOVER AVANZADOS ========== //
    function initAdvancedHoverEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function(e) {
                // Efecto de paralaje suave
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                card.addEventListener('mousemove', function(e) {
                    const mouseX = e.clientX - centerX;
                    const mouseY = e.clientY - centerY;
                    
                    const rotateX = (mouseY / rect.height) * 5;
                    const rotateY = -(mouseX / rect.width) * 5;
                    
                    card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                });
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
                card.removeEventListener('mousemove', arguments.callee);
            });
        });

        // Efectos especiales para botones
        const buttons = document.querySelectorAll('.btn-download, .btn-game, .btn-primary');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // ========== NAVEGACIÓN SUAVE ========== //
    function initSmoothNavigation() {
        // Crear botón de scroll to top
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.className = 'scroll-top-btn';
        scrollTopBtn.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            border: none;
            border-radius: 50%;
            background: var(--gradient-primary);
            color: white;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        
        document.body.appendChild(scrollTopBtn);

        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.visibility = 'visible';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.visibility = 'hidden';
            }
        });

        // Scroll suave al hacer clic
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========== EFECTOS DE TYPED TEXT ========== //
    function initTypedEffect() {
        const titleElement = document.querySelector('.hero-title');
        if (titleElement) {
            const originalText = titleElement.textContent;
            titleElement.textContent = '';
            
            let i = 0;
            const typeSpeed = 100;
            
            function typeText() {
                if (i < originalText.length) {
                    titleElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeText, typeSpeed);
                } else {
                    // Agregar cursor parpadeante
                    const cursor = document.createElement('span');
                    cursor.textContent = '|';
                    cursor.style.animation = 'blink 1s infinite';
                    cursor.style.fontSize = '0.8em';
                    titleElement.appendChild(cursor);
                    
                    // Agregar keyframe para el cursor
                    const style = document.createElement('style');
                    style.textContent = `
                        @keyframes blink {
                            0%, 50% { opacity: 1; }
                            51%, 100% { opacity: 0; }
                        }
                    `;
                    document.head.appendChild(style);
                }
            }
            
            // Iniciar efecto después de un delay
            setTimeout(typeText, 1000);
        }
    }

    // ========== CONTADOR ANIMADO PARA ESTADÍSTICAS ========== //
    function initAnimatedCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.textContent);
                    const increment = target / 100;
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        entry.target.textContent = Math.floor(current) + '+';
                        
                        if (current >= target) {
                            entry.target.textContent = target + '+';
                            clearInterval(timer);
                        }
                    }, 20);
                    
                    observer.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => observer.observe(counter));
    }

    // ========== MODO DEBUG (solo en desarrollo) ========== //
    function initDebugMode() {
        if (localStorage.getItem('debug') === 'true') {
            console.log('🛠️ Debug mode activated');
            
            // Mostrar información de rendimiento
            const perfObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    console.log(`⚡ ${entry.name}: ${entry.duration.toFixed(2)}ms`);
                });
            });
            
            perfObserver.observe({ entryTypes: ['navigation', 'paint'] });
        }
    }

    // ========== INICIALIZACIÓN ========== //
    Object.entries(langButtons).forEach(([lang, btn]) => {
        btn.addEventListener("click", () => {
            // Efecto de ripple
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.marginLeft = -size/2 + 'px';
            ripple.style.marginTop = -size/2 + 'px';
            
            btn.style.position = 'relative';
            btn.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            changeLanguage(lang);
        });
    });

    // Agregar keyframe para ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ========== INICIALIZAR TODAS LAS FUNCIONES ========== //
    function initializeApp() {
        console.log('🚀 Initializing Portfolio App...');
        
        // Inicializar funciones principales
        initCustomCursor();
        createParticles();
        initScrollEffects();
        initAdvancedHoverEffects();
        initSmoothNavigation();
        initAnimatedCounters();
        initDebugMode();
        
        // Configurar idioma inicial
        changeLanguage(currentLanguage);
        updateDateTime();
        setInterval(updateDateTime, 1000);
        
        // Fade in inicial
        setTimeout(() => {
            document.body.style.opacity = "1";
        }, 100);
        
        console.log('✅ Portfolio App initialized successfully!');
    }

    // Inicializar cuando todo esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

    // ========== MANEJO DE ERRORES GLOBAL ========== //
    window.addEventListener('error', (e) => {
        console.error('❌ Global error:', e.error);
    });

    // ========== OPTIMIZACIÓN DE RENDIMIENTO ========== //
    // Lazy loading para imágenes futuras
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
