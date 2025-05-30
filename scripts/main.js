document.addEventListener("DOMContentLoaded", function () {
    let directorioDropdown = document.getElementById("directorioDropdown");
    let directorioLink = directorioDropdown.querySelector(".nav-link");
    let dropdownMenu = directorioDropdown.querySelector(".dropdown-menu");
    let clickCount = 0;

    //Función para detectar si es un dispositivo táctil
    function isTouchDevice() {
        return ("ontouchstart" in window || navigator.maxTouchPoints);
    }

    // Mostrar el menú en hover (solo en PC)
    if (!isTouchDevice()) {
        directorioDropdown.addEventListener("mouseenter", function () {
            this.classList.add("show");
            dropdownMenu.classList.add("show");
        });

        directorioDropdown.addEventListener("mouseleave", function () {
            this.classList.remove("show");
            dropdownMenu.classList.remove("show");
        });
    }

    // Manejo del clic en el botón "Directorio"
    directorioLink.addEventListener("click", function (event) {
        if (isTouchDevice()) {
            event.preventDefault(); // Evita la navegación inmediata
            clickCount++;

            if (clickCount === 1) {
                dropdownMenu.classList.toggle("show"); // Muestra el menú
            } else {
                window.location.href = location.origin + "/sitio-mexty/directorio/index.html"; // Redirige a la página del directorio
            }

            // Reinicia el contador después de 1.5 segundos
            setTimeout(() => {
                clickCount = 0;
            }, 1500);
        }
    });

    // Asegurar que los elementos del menú sigan funcionando correctamente
    dropdownMenu.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que se cierre el menú al hacer clic en un elemento
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!directorioDropdown.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Mostrar más tarjetas en dispositivos móviles
    function setupShowMore(sectionClass) {
        const showMoreBtn = document.querySelector(`.${sectionClass} .show-more-btn`);
        const cards = document.querySelectorAll(`.${sectionClass} .card`);

        if (window.innerWidth <= 768) {
            showMoreBtn.classList.remove("d-none");
            showMoreBtn.addEventListener("click", function () {
                if (showMoreBtn.textContent === "↓") {
                    cards.forEach((card, index) => {
                        if (index >= 2) {
                            card.classList.add("show");
                        }
                    });
                    showMoreBtn.textContent = "↑";
                } else {
                    cards.forEach((card, index) => {
                        if (index >= 2) {
                            card.classList.remove("show");
                        }
                    });
                    showMoreBtn.textContent = "↓";
                }
            });
        }
    }

    setupShowMore("eventos");
    setupShowMore("noticias");
    setupShowMore("tramites");
    setupShowMore("avisos");
    setupShowMore("card-container");
});
