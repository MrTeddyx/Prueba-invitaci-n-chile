document.addEventListener('DOMContentLoaded', function() {
    // Ceremonia: Viernes 8 de Agosto del 2025, 11:30 AM (GMT-0400 Santiago Time)
    // La variable weddingDate en este script está seteada a GMT-0500,
    // si la web se ve en Chile (GMT-4 o GMT-3 dependiendo de DST), el countdown será diferente al local.
    // Para consistencia con el script original, mantendremos GMT-0500 aquí,
    // pero los eventos de Google Calendar usarán America/Santiago.
    const weddingDate = new Date('Aug 8, 2025 11:30:00 GMT-0400').getTime(); // Ajustado a GMT-4 para Santiago
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownEl = document.getElementById('countdown');
    const faltaTitle = document.querySelector('.countdown-section span.falta');
    let countdownInterval;

    const updateCountdown = () => {
        try {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                if (countdownEl) countdownEl.innerHTML = '<p class="fin-cuenta">¡El gran día ha llegado!</p>';
                if (faltaTitle) faltaTitle.style.display = 'none';
                const heartContainer = document.getElementById('lottie-corazon-falta');
                if (heartContainer) heartContainer.style.display = 'none';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (daysEl) daysEl.innerText = days;
            if (hoursEl) hoursEl.innerText = hours;
            if (minutesEl) minutesEl.innerText = minutes;
            if (secondsEl) secondsEl.innerText = seconds;

        } catch (error) {
            console.error("Error en updateCountdown:", error);
            if (countdownEl) countdownEl.innerHTML = "<p>Error al cargar contador</p>";
            if (faltaTitle) faltaTitle.style.display = 'none';
            const heartContainer = document.getElementById('lottie-corazon-falta');
            if (heartContainer) heartContainer.style.display = 'none';
            clearInterval(countdownInterval);
        }
    };

    if (daysEl && hoursEl && minutesEl && secondsEl && countdownEl && faltaTitle) {
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    } else {
        console.warn("Elementos del contador no encontrados. No se iniciará.");
        if (countdownEl && !countdownEl.hasChildNodes()) countdownEl.innerText = "Contador no disponible.";
        if (faltaTitle) faltaTitle.style.display = 'none';
        const heartContainer = document.getElementById('lottie-corazon-falta');
        if (heartContainer) heartContainer.style.display = 'none';
    }

    const loadLottieAnimation = (container, path, errorMessage, rendererSettings = {}) => {
        if (container) {
            try {
                const anim = lottie.loadAnimation({
                    container: container,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: path,
                    rendererSettings: {
                       preserveAspectRatio: 'xMidYMid meet',
                       ...rendererSettings
                    }
                });
                container.lottieAnim = anim;
            } catch (error) {
                console.error(errorMessage, error);
                if (container) container.innerHTML = '<p style="font-size:10px; color:red;">Err</p>';
            }
        }
    };

    loadLottieAnimation(document.getElementById('lottie-adorno-frase'), 'adorno_frase_portada.json', "Error Lottie Adorno Frase:");
    loadLottieAnimation(document.getElementById('lottie-corazon-falta'), 'corazon-falta.json', "Error Lottie Corazon Falta:");
    loadLottieAnimation(document.querySelector('.anim-anillos'), 'img_ceremonia.json', "Error Lottie Anillos:");
    loadLottieAnimation(document.querySelector('.anim-fiesta'), 'img_fiesta.json', "Error Lottie Fiesta:"); // Icono de fiesta para recepción
    loadLottieAnimation(document.querySelector('.anim-galeria'), 'json_camara.json', "Error Lottie Galería:");
    loadLottieAnimation(document.querySelector('.anim-vestuario'), 'vestuario.json', "Error Lottie Vestuario:");
    loadLottieAnimation(document.querySelector('.anim-tips'), 'tips.json', "Error Lottie Tips:");
    loadLottieAnimation(document.querySelector('.anim-regalos'), 'img_regalo.json', "Error Lottie Regalos:");
    loadLottieAnimation(document.querySelector('.anim-instagram'), 'img_instagram.json', "Error Lottie Instagram:");
    loadLottieAnimation(document.getElementById('lottie-adorno-galeria'), 'adorno-titulo.json', "Error Lottie Adorno Galeria:");
    loadLottieAnimation(document.getElementById('lottie-adorno-recepcion'), 'adorno-titulo.json', "Error Lottie Adorno Recepcion:");
    loadLottieAnimation(document.getElementById('lottie-adorno-regalos'), 'adorno-titulo.json', "Error Lottie Adorno Regalos:");
    loadLottieAnimation(document.getElementById('lottie-adorno-instagram'), 'adorno-titulo.json', "Error Lottie Adorno Instagram:");
    loadLottieAnimation(document.querySelector('.anim-dresscode-modal'), 'vestuario.json', "Error Lottie Dress Code (Modal):");
    loadLottieAnimation(document.querySelector('.anim-tips-modal'), 'tips.json', "Error Lottie Tips (Modal):");
    loadLottieAnimation(document.querySelector('.anim-regalos-modal'), 'img_regalo.json', "Error Lottie Regalos (Modal):");
    loadLottieAnimation(document.getElementById('lottie-confirmar-ceremonia-anim'), 'img_ceremonia.json', "Error Lottie Confirmar Ceremonia:", { preserveAspectRatio: 'xMidYMid meet' });
    loadLottieAnimation(document.getElementById('lottie-confirmar-recepcion-anim'), 'img_fiesta.json', "Error Lottie Confirmar Recepcion:", { preserveAspectRatio: 'xMidYMid meet' });
    loadLottieAnimation(document.querySelector('.anim-instagram-modal'), 'img_instagram.json', "Error Lottie Instagram (Modal):");

    if (typeof $ !== 'undefined' && typeof $.fn.slick === 'function') {
        $('.slick-carousel').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                        centerPadding: '30px'
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '30px'
                    }
                }
            ]
        });
    } else {
        console.error("Error: jQuery o Slick Carousel no están cargados ANTES de script.js.");
    }

    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind("[data-fancybox='galeria']", { loop: true });
    } else {
        console.warn("Fancybox no está cargado (opcional).");
    }

    const setupModal = (modalId, openBtnId) => {
        const modal = document.getElementById(modalId);
        const openBtn = document.getElementById(openBtnId);
        const closeBtn = modal ? modal.querySelector('.modal-close') : null;

        const openModal = () => {
            if (modal) {
                modal.style.display = 'flex';
                void modal.offsetWidth;
                modal.classList.add('visible');
                document.body.classList.add('modal-open');
            }
        };

        const closeModal = () => {
            if (modal) {
                modal.classList.remove('visible');
                modal.addEventListener('transitionend', function handleTransitionEnd() {
                    if (!modal.classList.contains('visible')) {
                        modal.style.display = 'none';
                    }
                    modal.removeEventListener('transitionend', handleTransitionEnd);
                }, { once: true });
                document.body.classList.remove('modal-open');
            }
        };

        if (openBtn) {
            openBtn.addEventListener('click', (event) => {
                event.preventDefault();
                openModal();
            });
        } else if (openBtnId){
            console.warn(`Botón de apertura no encontrado: ${openBtnId}`);
        }

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        else if (modal) console.warn(`Botón de cierre no encontrado para modal: ${modalId}`);

        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) closeModal();
            });
        } else if (modalId) {
             console.warn(`Modal no encontrado: ${modalId}`);
        }
        return { openModal, closeModal };
    };

    setupModal('modal-dresscode', 'open-dresscode-modal');
    setupModal('modal-tips', 'open-tips-modal');
    setupModal('modal-regalos', 'open-regalos-modal');
    const ceremoniaConfirmModalControls = setupModal('modal-confirmar-ceremonia', 'open-confirmar-ceremonia-modal');
    const recepcionConfirmModalControls = setupModal('modal-confirmar-recepcion', 'open-confirmar-recepcion-modal');
    setupModal('modal-instagram-profiles', 'open-instagram-profiles-modal');


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const visibleModal = document.querySelector('.modal-overlay.visible');
            if (visibleModal) {
                const closeBtn = visibleModal.querySelector('.modal-close');
                if (closeBtn) closeBtn.click();
            }
        }
    });

    const handleConfirmationForm = (formId, modalControls) => {
        const form = document.getElementById(formId);
        if (!form) {
            console.warn(`Formulario de confirmación no encontrado: ${formId}`);
            return;
        }

        const attendanceButtons = form.querySelectorAll('.attendance-btn');
        const hiddenAttendanceInput = form.querySelector('input[name="asistencia"]');
        const formMessage = form.querySelector('.form-message');
        const nombreInput = form.querySelector('input[name="nombre_asistencia"]');
        const comentarioInput = form.querySelector('input[name="comentario_asistencia"]');
        const eventoInput = form.querySelector('input[name="evento"]');
        const submitButtons = form.querySelectorAll('button[type="submit"]'); // MODIFICADO: Get submit buttons

        attendanceButtons.forEach(button => {
            button.addEventListener('click', () => {
                attendanceButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                if (hiddenAttendanceInput) hiddenAttendanceInput.value = button.dataset.attendance;
                if (formMessage) { formMessage.style.display = 'none'; formMessage.textContent = ''; }
            });
        });

        if (nombreInput) {
            nombreInput.addEventListener('input', () => {
                if (formMessage && formMessage.textContent.toLowerCase().includes('nombre')) {
                    formMessage.style.display = 'none'; formMessage.textContent = '';
                }
            });
        }

        submitButtons.forEach(submitButton => { // MODIFICADO: Loop through submit buttons
            submitButton.addEventListener('click', function(event) { // MODIFICADO: Changed to click event on button
                event.preventDefault();
                const submitType = this.value; // 'correo' or 'whatsapp'

                if (formMessage) {
                    formMessage.style.display = 'none'; formMessage.textContent = ''; formMessage.style.color = 'red';
                }

                if (!hiddenAttendanceInput || !hiddenAttendanceInput.value) {
                     if (formMessage) {
                        formMessage.textContent = 'Por favor, selecciona si asistirás o no.';
                        formMessage.style.display = 'block';
                    }
                    return;
                }
                if (!nombreInput || !nombreInput.value.trim()) {
                    if (formMessage) {
                        formMessage.textContent = 'Por favor, ingresa tu nombre completo.';
                        formMessage.style.display = 'block';
                    }
                    if(nombreInput) nombreInput.focus();
                    return;
                }

                const nombre = nombreInput.value.trim();
                const asistenciaValue = hiddenAttendanceInput.value;
                const asistenciaTexto = asistenciaValue === 'si' ? 'Sí, confirmo asistencia' : 'No podré asistir';
                const comentario = comentarioInput ? comentarioInput.value.trim() : '';
                const evento = eventoInput ? eventoInput.value : 'Evento Santiago'; // MODIFICADO: Default event name
                const weddingEmail = 'matrimoniokathayjpsantiago@gmail.com';
                const whatsappNumber = '51993968980';

                if (submitType === 'correo') {
                    const subject = `Confirmación Asistencia Boda K&JP - ${evento}`; // MODIFICADO
                    let body = `Hola Katha y Juan Pablo,\n\nUna nueva confirmación ha llegado:\n-------------------------------------\n`; // MODIFICADO
                    body += `Nombre: ${nombre}\nEvento: ${evento}\nAsistencia: ${asistenciaTexto}\n`;
                    if (comentario) body += `Datos adicionales, alergias: ${comentario}\n`; // MODIFICADO
                    body += `-------------------------------------\n\nSaludos,\n${nombre}`;
                    const mailtoLink = `mailto:${weddingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                    if (formMessage) {
                        formMessage.textContent = 'Gracias. Serás redirigido a tu cliente de correo para enviar la confirmación.';
                        formMessage.style.color = 'green'; formMessage.style.display = 'block';
                    }
                    setTimeout(() => { window.location.href = mailtoLink; }, 500);

                } else if (submitType === 'whatsapp') {
                    let whatsappText = `¡Hola Katha y Juan Pablo! 👋\n\nQuiero confirmar mi asistencia para su boda:\n-------------------------------------\n`;
                    whatsappText += `*Evento:* ${evento}\n`;
                    whatsappText += `*Nombre:* ${nombre}\n`;
                    whatsappText += `*Asistencia:* ${asistenciaTexto}\n`;
                    if (comentario) {
                        whatsappText += `*Datos adicionales, alergias:* ${comentario}\n`;
                    }
                    whatsappText += `-------------------------------------\n¡Nos vemos! 🎉`;

                    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappText)}`;

                    if (formMessage) {
                        formMessage.textContent = 'Gracias. Serás redirigido a WhatsApp para enviar la confirmación.';
                        formMessage.style.color = 'green'; formMessage.style.display = 'block';
                    }
                    setTimeout(() => { window.open(whatsappLink, '_blank'); }, 500);
                }


                setTimeout(() => {
                    if (modalControls && modalControls.closeModal) modalControls.closeModal();
                    form.reset();
                    attendanceButtons.forEach(btn => btn.classList.remove('selected'));
                    if (hiddenAttendanceInput) hiddenAttendanceInput.value = '';
                    if (formMessage) formMessage.style.display = 'none';
                }, 4000);
            });
        });
    };

    if (document.getElementById('form-confirmar-ceremonia')) {
        handleConfirmationForm('form-confirmar-ceremonia', ceremoniaConfirmModalControls);
    }
    if (document.getElementById('form-confirmar-recepcion')) { // MODIFICADO para recepcion
        handleConfirmationForm('form-confirmar-recepcion', recepcionConfirmModalControls);
    }

    function generateGoogleCalendarLink(details) {
        const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
        const params = new URLSearchParams();
        params.append('text', details.text);
        params.append('dates', details.dates);
        params.append('details', details.details);
        params.append('location', details.location);
        if (details.ctz) {
            params.append('ctz', details.ctz);
        }
        return `${baseUrl}&${params.toString()}`;
    }

    const santiagoTimeZone = "America/Santiago"; // MODIFICADO: Timezone para Santiago

    const ceremonyEventDetails = {
        text: "Ceremonia Boda K&JP - Santiago", // MODIFICADO
        dates: "20250808T113000/20250808T123000",
        ctz: santiagoTimeZone, // MODIFICADO
        details: "Nuestra Boda - Ceremonia de Katha y Juan Pablo en Santiago\n¡Te esperamos!", // MODIFICADO
        location: "Registro Civil La Reina, Avenida Alcalde Fernando Castillo Velasco 8580, La Reina, Santiago"
    };

    const receptionEventDetails = { // MODIFICADO: de partyEventDetails a receptionEventDetails
        text: "Recepción Boda K&JP - Santiago", // MODIFICADO
        dates: "20250808T133000/20250808T235900",
        ctz: santiagoTimeZone, // MODIFICADO
        details: "Nuestra Boda - Recepción de Katha y Juan Pablo en Santiago\n¡A celebrar!", // MODIFICADO
        location: "Restaurante LUSITANO, Condell 1414, Barrio Italia, Providencia, Santiago"
    };

    const agendarCeremoniaBtn = document.getElementById('agendar-ceremonia-btn');
    const agendarRecepcionBtn = document.getElementById('agendar-recepcion-btn');
    const agendarCeremoniaFooterLink = document.getElementById('agendar-ceremonia-footer-link');
    const agendarRecepcionFooterLink = document.getElementById('agendar-recepcion-footer-link');

    if (agendarCeremoniaBtn) {
        agendarCeremoniaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(generateGoogleCalendarLink(ceremonyEventDetails), '_blank');
        });
    }
    if (agendarRecepcionBtn) {
        agendarRecepcionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(generateGoogleCalendarLink(receptionEventDetails), '_blank'); // MODIFICADO
        });
    }
    if (agendarCeremoniaFooterLink) {
        agendarCeremoniaFooterLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(generateGoogleCalendarLink(ceremonyEventDetails), '_blank');
        });
    }
    if (agendarRecepcionFooterLink) {
        agendarRecepcionFooterLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(generateGoogleCalendarLink(receptionEventDetails), '_blank'); // MODIFICADO
        });
    }

    const confirmarCeremoniaFooter = document.getElementById('confirmar-ceremonia-footer-link');
    const openConfirmarCeremoniaBtn = document.getElementById('open-confirmar-ceremonia-modal');
    if (confirmarCeremoniaFooter && openConfirmarCeremoniaBtn) {
        confirmarCeremoniaFooter.addEventListener('click', (e) => {
            e.preventDefault();
            openConfirmarCeremoniaBtn.click();
        });
    }

    const confirmarRecepcionFooter = document.getElementById('confirmar-recepcion-footer-link');
    const openConfirmarRecepcionBtn = document.getElementById('open-confirmar-recepcion-modal');
    if (confirmarRecepcionFooter && openConfirmarRecepcionBtn) {
        confirmarRecepcionFooter.addEventListener('click', (e) => {
            e.preventDefault();
            openConfirmarRecepcionBtn.click();
        });
    }
});