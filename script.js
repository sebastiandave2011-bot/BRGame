// Translations Dictionary
const translations = {
    es: {
        "hero-subtitle": "Disponible ahora en Itch.io",
        "hero-btn": "Jugar Ahora",
        "scroll-down": "Descubre más",
        "play-title": "Juega Bogotá Roots",
        "iframe-placeholder": "[Contenedor del juego de Itch.io. Reemplaza el src del iframe con tu enlace real]",
        "about-title": "Acerca del Juego",
        "about-text-1": "Desarrollado en Unity, Bogotá Roots es un desafiante plataformas 2D que te lleva a través de tres niveles meticulosamente diseñados. Enfréntate a plataformas de hielo resbaladizo, estructuras móviles con inversión de sentido y puentes a punto de colapsar.",
        "about-text-2": "Al final de cada recorrido, si logras superar los retos, un habitante local te recompensará con un dato histórico fascinante sobre la capital antes de permitirte avanzar.",
        "gallery-title": "Arte y Escenarios",
        "trailers-title": "Tráilers y Gameplay",
        "trailer-1": "Tráiler Oficial",
        "trailer-2": "Gameplay Revelación",
        "yt-link": "Visitar Canal de YouTube",
        "char-title": "El Viajero",
        "char-desc": "Rooter es el protagonista de nuestra historia. Un explorador urbano equipado para enfrentarse al cambiante clima y los misterios de la ciudad.",
        "trait-1-title": "Resistencia al Clima",
        "trait-1-desc": "Preparado para soportar las bajas temperaturas y abrirse paso a través de la densa niebla bogotana.",
        "trait-2-title": "Agilidad Urbana",
        "trait-2-desc": "Equipado para deslizarse sobre el hielo y saltar abismos traicioneros con precisión.",
        "trait-3-title": "Buscador de Raíces",
        "trait-3-desc": "Su motivación principal es recolectar las monedas ocultas y descubrir la historia de su ciudad.",
        "lore-title": "La Historia",
        "lore-text-1": "Acompaña a un solitario viajero en su travesía por el misticismo del Jardín Botánico y las frías alturas de Monserrate. En su camino, acompañado por una inmersiva banda sonora de 8 bits y densa niebla, descubrirá la verdadera esencia de la ciudad.",
        "lore-text-2": "El objetivo es claro: recolectar las 5 monedas ocultas para forjar el trofeo, encontrar la llave perdida y cruzar las puertas hacia nuevos horizontes. Presta atención a tu entorno; perritos, gatos y aves pixeladas te acompañarán en este descenso hacia las raíces de Bogotá.",
        "gameplay-title": "Cómo Jugar",
        "ctrl-move": "Movimiento",
        "ctrl-move-desc": "Usa las teclas direccionales o WASD para desplazarte por el nivel.",
        "ctrl-jump": "Saltar",
        "ctrl-jump-desc": "Esquiva obstáculos y supera las plataformas de caída libre.",
        "ctrl-interact": "Interactuar",
        "ctrl-interact-desc": "Habla con los NPCs y abre las puertas al tener la llave.",
        "footer-text": "Un desarrollo independiente con pasión por la historia y los videojuegos.",
        "turismo-link": "Turismo"
    },
    en: {
        "hero-subtitle": "Available now on Itch.io",
        "hero-btn": "Play Now",
        "scroll-down": "Discover more",
        "play-title": "Play Bogota Roots",
        "iframe-placeholder": "[Itch.io game container. Replace the iframe src with your actual link]",
        "about-title": "About The Game",
        "about-text-1": "Developed in Unity, Bogota Roots is a challenging 2D platformer that takes you through three meticulously designed levels. Face slippery ice platforms, moving structures with direction inversion, and bridges on the verge of collapsing.",
        "about-text-2": "At the end of each journey, if you overcome the challenges, a local inhabitant will reward you with a fascinating historical fact about the capital before allowing you to advance.",
        "gallery-title": "Art & Scenarios",
        "trailers-title": "Trailers & Gameplay",
        "trailer-1": "Official Trailer",
        "trailer-2": "Gameplay Reveal",
        "yt-link": "Visit YouTube Channel",
        "char-title": "The Traveler",
        "char-desc": "Rooter is the protagonist of our story. An urban explorer equipped to face the changing climate and the mysteries of the city.",
        "trait-1-title": "Weather Resistance",
        "trait-1-desc": "Prepared to withstand low temperatures and make his way through the dense Bogota fog.",
        "trait-2-title": "Urban Agility",
        "trait-2-desc": "Equipped to slide on ice and jump treacherous chasms with precision.",
        "trait-3-title": "Roots Seeker",
        "trait-3-desc": "His main motivation is to collect the hidden coins and discover the history of his city.",
        "lore-title": "The Lore",
        "lore-text-1": "Join a solitary traveler on their journey through the mysticism of the Botanical Garden and the cold heights of Monserrate. Along the way, accompanied by an immersive 8-bit soundtrack and dense fog, they will discover the true essence of the city.",
        "lore-text-2": "The goal is clear: collect the 5 hidden coins to forge the trophy, find the lost key, and cross the doors to new horizons. Pay attention to your surroundings; pixelated dogs, cats, and birds will accompany you in this descent into the roots of Bogota.",
        "gameplay-title": "How To Play",
        "ctrl-move": "Movement",
        "ctrl-move-desc": "Use the arrow keys or WASD to navigate through the level.",
        "ctrl-jump": "Jump",
        "ctrl-jump-desc": "Dodge obstacles and overcome free-falling platforms.",
        "ctrl-interact": "Interact",
        "ctrl-interact-desc": "Talk to NPCs and open doors when you have the key.",
        "footer-text": "An independent development with a passion for history and video games.",
        "turismo-link": "Tourism"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Language Selector Logic ---
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");
    
    let currentLang = localStorage.getItem("language") || "es";
    setLanguage(currentLang);

    if (btnEs && btnEn) {
        btnEs.addEventListener("click", () => setLanguage("es"));
        btnEn.addEventListener("click", () => setLanguage("en"));
    }

    function setLanguage(lang) {
        localStorage.setItem("language", lang);
        if (lang === "es" && btnEs && btnEn) {
            btnEs.classList.add("active");
            btnEn.classList.remove("active");
        } else if (btnEn && btnEs) {
            btnEn.classList.add("active");
            btnEs.classList.remove("active");
        }
        document.querySelectorAll("[data-key]").forEach(elem => {
            const key = elem.getAttribute("data-key");
            if (translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });
    }

    // --- 2. Scroll Fade-in Animation Logic ---
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);
    fadeElements.forEach(elem => observer.observe(elem));

    // --- 3. Lógica del Showcase Carrusel (MOTOR JS), Drag & Modal Lightbox ---
    const showcaseContainer = document.querySelector('.showcase-container');
    const dragWrapper = document.querySelector('.showcase-drag-wrapper');
    const galleryItems = document.querySelectorAll('.gallery-item-cover');
    
    // Elementos del Modal
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCloseBtn = document.querySelector('.modal-close');

    // Variables de estado del motor JS
    let isDraggingWrapper = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let didDrag = false; 
    let hasUserInteracted = false; 
    let isHovered = false;
    
    // Variables de la animación (Velocidad y dirección)
    let animSpeed = 0.15; // Ajusta este número para que vaya más rápido o más lento
    let animDirection = -1; // -1 va a la izquierda, 1 va a la derecha

    if (showcaseContainer && dragWrapper) {
        
        // --- MOTOR DE ANIMACIÓN JS INFINITA CON EFECTO PING-PONG ---
        const animateGallery = () => {
            // Solo se anima si el usuario no tiene el control, ni está arrastrando, ni tiene el mouse encima
            if (!isDraggingWrapper && !hasUserInteracted && !isHovered) {
                // Calcular límite matemático exacto
                const minTranslate = showcaseContainer.clientWidth - dragWrapper.scrollWidth;
                
                // Asegurar que el contenido es más grande que la pantalla
                if (minTranslate < 0) {
                    currentTranslate += (animSpeed * animDirection);
                    
                    // Lógica Ping-Pong: Rebotar en los extremos SIN dejar espacios vacíos
                    if (currentTranslate <= minTranslate) {
                        currentTranslate = minTranslate;
                        animDirection = 1; // Rebotar a la derecha
                    } else if (currentTranslate >= 0) {
                        currentTranslate = 0;
                        animDirection = -1; // Rebotar a la izquierda
                    }
                    
                    dragWrapper.style.transform = `translateX(${currentTranslate}px)`;
                    prevTranslate = currentTranslate;
                }
            }
            requestAnimationFrame(animateGallery);
        };
        // Inicializar el motor
        requestAnimationFrame(animateGallery);

        // --- MANEJO DE HOVER Y CLICKS FUERA ---
        showcaseContainer.addEventListener('mouseenter', () => { isHovered = true; });
        showcaseContainer.addEventListener('mouseleave', () => { isHovered = false; });

        document.addEventListener('click', (e) => {
            if (!showcaseContainer.contains(e.target) && hasUserInteracted) {
                hasUserInteracted = false; // Devuelve el control a la animación automática
            }
        });

        // --- FUNCIONES DE ARRASTRE ---
        const getPositionX = (e) => e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;

        const startDrag = (e) => {
            isDraggingWrapper = true;
            didDrag = false; 
            hasUserInteracted = true; 
            startPos = getPositionX(e);
            dragWrapper.classList.add('dragging');
        };

        const drag = (e) => {
            if (!isDraggingWrapper) return;
            const currentPosition = getPositionX(e);
            const diff = currentPosition - startPos;
            
            if (Math.abs(diff) > 5) {
                didDrag = true; 
            }
            
            currentTranslate = prevTranslate + diff;
            
            // Limitador matemático: Impide arrastrar hacia el vacío negro
            const minTranslate = showcaseContainer.clientWidth - dragWrapper.scrollWidth;
            if (currentTranslate > 0) currentTranslate = 0; // Límite izquierdo
            if (currentTranslate < minTranslate) currentTranslate = minTranslate; // Límite derecho

            dragWrapper.style.transform = `translateX(${currentTranslate}px)`;
        };

        const endDrag = () => {
            if(!isDraggingWrapper) return;
            isDraggingWrapper = false;
            dragWrapper.classList.remove('dragging');
            prevTranslate = currentTranslate; 
        };

        dragWrapper.addEventListener('mousedown', startDrag);
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', endDrag);
        window.addEventListener('mouseleave', endDrag); 

        dragWrapper.addEventListener('touchstart', startDrag, {passive: true});
        window.addEventListener('touchmove', drag, {passive: true});
        window.addEventListener('touchend', endDrag);

        // --- SCROLL CON RUEDA DE MOUSE (SOPORTE HORIZONTAL) ---
        showcaseContainer.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > 0) {
                e.preventDefault();
                hasUserInteracted = true;
                
                currentTranslate -= (e.deltaX * 1.5); 
                
                // Limitador matemático para la rueda
                const minTranslate = showcaseContainer.clientWidth - dragWrapper.scrollWidth;
                if (currentTranslate > 0) currentTranslate = 0;
                if (currentTranslate < minTranslate) currentTranslate = minTranslate;

                prevTranslate = currentTranslate;
                dragWrapper.style.transform = `translateX(${currentTranslate}px)`;
            }
        }, { passive: false });

        // --- Funciones del Modal Galería ---
        const openModal = (imgSrc) => {
            if (!modal || !modalImg) return;
            modalImg.src = imgSrc;
            modal.classList.add('active');
            document.body.classList.add('modal-open'); 
        };

        const closeModal = () => {
            if (!modal) return;
            modal.classList.remove('active');
            document.body.classList.remove('modal-open'); 
            setTimeout(() => { modalImg.src = ""; }, 300); 
        };

        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (didDrag) return; 
                const img = item.querySelector('img');
                if (img) openModal(img.src);
            });
            const img = item.querySelector('img');
            if (img) img.addEventListener('dragstart', (e) => e.preventDefault());
        });

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // --- 4. Lógica del Modal del Desarrollador (Footer) ---
    const devModal = document.getElementById('dev-modal');
    const footerLogo = document.querySelector('.footer-logo');
    const devModalCloseBtn = document.querySelector('.dev-modal-close');

    if (footerLogo && devModal) {
        
        const openDevModal = () => {
            devModal.classList.add('active');
            document.body.classList.add('modal-open');
        };

        const closeDevModal = () => {
            devModal.classList.remove('active');
            if (!document.getElementById('image-modal').classList.contains('active')) {
                document.body.classList.remove('modal-open');
            }
        };

        footerLogo.addEventListener('click', openDevModal);

        if (devModalCloseBtn) devModalCloseBtn.addEventListener('click', closeDevModal);

        devModal.addEventListener('click', (e) => {
            if (e.target === devModal) closeDevModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && devModal.classList.contains('active')) {
                closeDevModal();
            }
        });
    }
});