document.addEventListener('DOMContentLoaded', () => {
    const loveLetterButton = document.getElementById('love-letter-button');
    const loveLetterContent = document.getElementById('love-letter-content');
    const moreReasonsButton = document.getElementById('more-reasons-button');
    const reasonsList = document.querySelector('#razones-te-amo ul');
    const reasonCountSpan = document.getElementById('reason-count');
    const capybaraFact = document.getElementById('capybara-fact');
    const interactiveHeart = document.getElementById('interactive-heart');
    const heartMessage = document.getElementById('heart-message');
    const currentDateEl = document.getElementById('current-date');

    // Mostrar/Ocultar carta de amor
    if (loveLetterButton && loveLetterContent) {
        loveLetterButton.addEventListener('click', () => {
            loveLetterContent.classList.toggle('hidden');
            loveLetterButton.textContent = loveLetterContent.classList.contains('hidden') ? 'Abre tu Carta de Amor Virtual 💌' : 'Cerrar Carta ❤️';
        });
    }

    // Añadir más razones (simulado, ¡puedes añadir más de verdad!)
    const extraReasons = [
        "Tu paciencia infinita (especialmente conmigo 😉).",
        "Lo bien que hueles siempre.",
        "Nuestros abrazos que curan todo.",
        "Simplemente, tu existencia hace mi mundo mejor."
    ];
    let reasonsAdded = 0;

    if (moreReasonsButton && reasonsList) {
        moreReasonsButton.addEventListener('click', () => {
            if (reasonsAdded < extraReasons.length) {
                const newReason = document.createElement('li');
                newReason.classList.add('reason-item');
                newReason.textContent = extraReasons[reasonsAdded];
                reasonsList.appendChild(newReason);
                reasonsAdded++;
                if (reasonCountSpan) {
                    reasonCountSpan.textContent = parseInt(reasonCountSpan.textContent) + 1;
                }
            } else {
                moreReasonsButton.textContent = "¡Esas son muchas por ahora! 🥰";
                moreReasonsButton.disabled = true;
            }
        });
    }

    // Dato curioso capibara interactivo
    const capybaraFacts = [
        "Los capibaras pueden permanecer bajo el agua ¡hasta 5 minutos!",
        "Son excelentes nadadores y a veces duermen en el agua.",
        "Se comunican con ladridos, silbidos, chillidos y gruñidos.",
        "¡Son los roedores más grandes del mundo!",
        "A los capibaras les encanta que les rasquen la pancita.",
        "Son como sofás peludos para otros animales. ¡Muy amigables!"
    ];
    if (capybaraFact) {
        capybaraFact.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * capybaraFacts.length);
            capybaraFact.textContent = capybaraFacts[randomIndex];
        });
    }

    // Corazón interactivo
    if (interactiveHeart && heartMessage) {
        interactiveHeart.addEventListener('click', () => {
            heartMessage.classList.toggle('hidden');
            if (!heartMessage.classList.contains('hidden')) {
                interactiveHeart.style.color = '#e91e63'; // Cambia color al revelar mensaje
                setTimeout(() => {
                    interactiveHeart.style.color = '#ff4757'; // Vuelve al color original
                }, 1000);
            }
        });
    }

    // Fecha actual en el footer
    if (currentDateEl) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        currentDateEl.textContent = `Hoy es ${today.toLocaleDateString('es-ES', options)}`;
    }

    // Efecto de aparición suave para las secciones al hacer scroll
    const sections = document.querySelectorAll('main section');
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        sectionObserver.observe(section);
    });

});
