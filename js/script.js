const enterBtn = document.getElementById("enterBtn");
const letterSection = document.getElementById("letter");
const revealItems = document.querySelectorAll(".reveal");
const petalCursor = document.getElementById("petalCursor");

/* Botón principal */
if (enterBtn && letterSection) {
enterBtn.addEventListener("click", () => {
letterSection.scrollIntoView({
behavior: "smooth",
block: "start"
});
});
}

/* Reveal on scroll */
const revealObserver = new IntersectionObserver(
entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("is-visible");
}
});
},
{
threshold: 0.14,
rootMargin: "0px 0px -40px 0px"
}
);

revealItems.forEach(item => revealObserver.observe(item));

/* Pétalo que sigue el mouse */
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

window.addEventListener("mousemove", e => {
mouseX = e.clientX;
mouseY = e.clientY;

if (petalCursor) {
petalCursor.classList.add("is-active");
}
});
window.addEventListener("mouseleave", () => {
if (petalCursor) {
petalCursor.classList.remove("is-active");
}
});

function animatePetalCursor() {
currentX += (mouseX - currentX) * 0.12;
currentY += (mouseY - currentY) * 0.12;

if (petalCursor) {
petalCursor.style.left = `${currentX}px`;
petalCursor.style.top = `${currentY}px`;
}

requestAnimationFrame(animatePetalCursor);
}

animatePetalCursor();

/* Entrada suave inicial */
window.addEventListener("load", () => {
document.body.classList.add("loaded");
});
