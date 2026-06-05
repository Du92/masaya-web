/* =====================================================
   MASAYA – REFUGIO DE BIENESTAR
   JavaScript básico:
   - Menú responsive
   - Cierre del menú al seleccionar enlaces
   - Año automático
   - Video autoplay cuando entra en pantalla
   - Animaciones suaves al hacer scroll
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const currentYear = document.getElementById("currentYear");
const masayaVideo = document.getElementById("masayaVideo");
const revealElements = document.querySelectorAll(".reveal");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle && navLinks) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/*
  Autoplay del video al entrar en pantalla.
  Importante: el video está en muted porque los navegadores suelen bloquear
  el autoplay con sonido.
*/
if (masayaVideo) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          masayaVideo.play().catch(() => {
            // Algunos navegadores pueden bloquear la reproducción automática.
          });
        } else {
          masayaVideo.pause();
        }
      });
    },
    { threshold: 0.45 }
  );

  videoObserver.observe(masayaVideo);
}

/* Animación sutil de aparición al hacer scroll */
if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}
