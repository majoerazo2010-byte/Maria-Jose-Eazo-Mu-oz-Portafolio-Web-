document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil desplegable
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace en móviles
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // --- Cambio de Modo Claro / Oscuro ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Comprobar si hay preferencia guardada
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // --- Mascota Interactiva Avanzada (Estrellita Viajera y Tierna) ---
    const interactivePet = document.getElementById('interactive-pet');
    const petBubble = document.getElementById('pet-bubble');

    const petMessages = [
        "¡Hola! ✨ Qué gusto verte por aquí",
        "¡Me encanta tu estilo programando! 💻",
        "¡Sigue brillando como las estrellas! 🌟",
        "¡Revisa mis proyectos de bases de datos! 🚀",
        "¡El código limpio es una obra de arte! 💖",
        "¡Haz clic en mí para dar un salto mágico! ✨"
    ];

    if (interactivePet) {
        interactivePet.addEventListener('click', () => {
            // 1. Cambiar mensaje aleatorio
            const randomMsg = petMessages[Math.floor(Math.random() * petMessages.length)];
            petBubble.textContent = randomMsg;
            petBubble.style.transform = 'scale(1.05)';
            setTimeout(() => {
                petBubble.style.transform = 'scale(1)';
            }, 200);

            // 2. Mover la estrellita a una posición aleatoria de la pantalla
            const randomX = Math.random() * (window.innerWidth - 150) + 50;
            const randomY = Math.random() * (window.innerHeight - 200) + 80;

            interactivePet.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            interactivePet.style.left = `${randomX}px`;
            interactivePet.style.top = `${randomY}px`;
            interactivePet.style.bottom = 'auto';
            interactivePet.style.right = 'auto';

            // Giro de alegría al viajar por la pantalla
            interactivePet.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                interactivePet.style.transform = 'scale(1) rotate(0deg)';
            }, 800);
        });
    }

    // --- Terminal Interactiva en JavaScript ---
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = terminalInput.value.trim().toLowerCase();
                executeCommand(command);
                terminalInput.value = '';
            }
        });
    }

    function executeCommand(cmd) {
        const commandLine = document.createElement('p');
        commandLine.innerHTML = `<span class="prompt-symbol">majo@dev:~$</span>${escapeHtml(cmd)}`;
        terminalOutput.appendChild(commandLine);

        const responseLine = document.createElement('div');
        responseLine.classList.add('terminal-response');

        switch (cmd) {
            case 'help':
                responseLine.innerHTML = `Comandos disponibles:<br>
                - <span class="cmd-hl">skills</span>: Muestra mis tecnologías y habilidades.<br>
                - <span class="cmd-hl">contacto</span>: Muestra información de contacto.<br>
                - <span class="cmd-hl">hobbies</span>: Muestra mis pasatiempos.<br>
                - <span class="cmd-hl">about</span>: Breve descripción profesional.<br>
                - <span class="cmd-hl">clear</span>: Limpia la terminal.`;
                break;
            case 'skills':
                responseLine.innerHTML = `🚀 Stack: HTML5, CSS3, JavaScript (Nativo), PHP, SQL, Java, Git.<br>💡 Valores: Comunicación asertiva, empatía, resiliencia y trabajo en equipo.`;
                break;
            case 'contacto':
                responseLine.innerHTML = `📧 Email: majoerazo2010@gmail.com<br>🐙 GitHub: majoerazo2010-byte<br>📍 Ubicación: Medellín, Colombia.`;
                break;
            case 'hobbies':
                responseLine.innerHTML = `🏊‍♂️ Deporte: Natación y Voleibol.<br>📚 Lectura: Pensamiento e historia de Colombia.<br>🎨 Arte: Pintura, costura y tejido.`;
                break;
            case 'about':
                responseLine.innerHTML = `👋 Hola, soy María José Erazo Muñoz, Frontend Developer en Medellín enfocada en crear soluciones limpias, humanas y funcionales.`;
                break;
            case 'clear':
                terminalOutput.innerHTML = `
                    <p class="welcome-line">Terminal limpiada correctamente.</p>
                    <p class="help-hint">Escribe <span class="cmd-hl">help</span> para ver los comandos disponibles.</p>
                `;
                return;
            case '':
                responseLine.innerHTML = ``;
                break;
            default:
                responseLine.innerHTML = `Comando no reconocido: "${escapeHtml(cmd)}". Escribe <span class="cmd-hl">help</span> para ver la lista de comandos.`;
        }

        terminalOutput.appendChild(responseLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function escapeHtml(text) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});