// Typing Headline
const roles = ["Full Stack Developer", "MERN Developer", "Java Developer", "Content Creator"];
let roleIndex = 0, charIndex = 0;
const headline = document.getElementById("headline");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    headline.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}
function eraseRole() {
  if (charIndex > 0) {
    headline.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => { typeRole(); });

// Navbar shrink on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ScrollReveal Animations
ScrollReveal({ reset: true, distance: '60px', duration: 1500, delay: 200 });
ScrollReveal().reveal('.home-info, .about, .skills h2, .projects h2, .contact-sec h2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-grid, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.skill-box, .project-card', { origin: 'right', interval: 200 });
ScrollReveal().reveal('.timeline-item', { origin: 'left', interval: 200 });

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
