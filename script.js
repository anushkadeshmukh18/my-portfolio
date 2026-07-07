/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn && mobileMenu){
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  /* CLOSE MENU ON LINK CLICK */
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  });
}


/* ===============================
   TYPING EFFECT – SMOOTH VERSION
================================ */

const typingEl = document.getElementById("typing");

if(typingEl){

  const roles = [
    "Web Developer",
    "Python Developer",
    "Cloud & DevOps Learner",
    "Computer Science Student"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop(){

    const currentRole = roles[roleIndex];

    if(!deleting){
      typingEl.textContent = currentRole.slice(0, charIndex++);
      if(charIndex > currentRole.length){
        deleting = true;
        setTimeout(typeLoop, 1500); // pause before deleting
        return;
      }
    } else {
      typingEl.textContent = currentRole.slice(0, charIndex--);
      if(charIndex < 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
      }
    }

    setTimeout(typeLoop, deleting ? 45 : 80);
  }

  typeLoop();
}
/* REVEAL ON SCROLL */
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});
reveals.forEach(el=>obs.observe(el));

/* DOTS BACKGROUND (ONLY MOVING DOTS - NO LINES) */
const canvas = document.getElementById("dots");
const ctx = canvas.getContext("2d");

let w, h;

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const dots = Array.from({ length: 90 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 1.6 + 0.6,
  vx: (Math.random() - 0.5) * 0.35,
  vy: (Math.random() - 0.5) * 0.35,
  a: Math.random() * 0.35 + 0.18
}));

function drawDots(){
  ctx.clearRect(0, 0, w, h);

  for(let i = 0; i < dots.length; i++){
    const p = dots[i];

    p.x += p.vx;
    p.y += p.vy;

    /* smooth wrap around edges */
    if(p.x < 0) p.x = w;
    if(p.x > w) p.x = 0;
    if(p.y < 0) p.y = h;
    if(p.y > h) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.a})`;
    ctx.fill();
  }

  requestAnimationFrame(drawDots);
}
drawDots();

// reveal animation
document.querySelectorAll('.card, .project, .box').forEach(el=>{
 el.style.opacity='0';
 el.style.transform='translateY(40px)';
});

window.addEventListener('scroll',()=>{
 document.querySelectorAll('.card, .project, .box').forEach(el=>{
  let top=el.getBoundingClientRect().top;
  if(top<window.innerHeight-80){
    el.style.opacity='1';
    el.style.transform='translateY(0)';
  }
 });
});

// simple click glow
document.querySelectorAll('.card').forEach(card=>{
 card.addEventListener('click',()=>{
   card.style.boxShadow='0 0 30px rgba(255,255,255,0.15)';
 });
});
/* ================= CERTIFICATE FLIP ================= */

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent other click events
    const card = this.closest(".cert-card");
    card.classList.toggle("flip");
  });
});
/* ================= EDUCATION SLIDER ================= */

const eduSlides = document.querySelectorAll(".edu-slide");
const eduPrev = document.querySelector(".edu-nav.prev");
const eduNext = document.querySelector(".edu-nav.next");

if (eduSlides.length > 0) {

  let eduIndex = 0;

  function updateEduSlides() {
    eduSlides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === eduIndex) {
        slide.classList.add("active");
      }
    });
  }

  eduNext.addEventListener("click", () => {
    eduIndex = (eduIndex + 1) % eduSlides.length;
    updateEduSlides();
  });

  eduPrev.addEventListener("click", () => {
    eduIndex = (eduIndex - 1 + eduSlides.length) % eduSlides.length;
    updateEduSlides();
  });

}

/* ================= PROJECT STACK SCROLL EFFECT ================= */

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  status.classList.remove("success","error","show");

  if (name === "" || email === "" || message === "") {
    status.innerText = "Please fill all fields!";
    status.classList.add("error","show");
    return;
  }

  status.innerText = "Message Sent Successfully!";
  status.classList.add("success","show");

  form.reset();
});document.addEventListener("DOMContentLoaded", function () {

  const dump = document.getElementById("projectsDump");
  const stack = document.getElementById("projectsStack");

  if (dump && stack) {

    dump.addEventListener("click", function () {

      stack.classList.toggle("active");

      // Optional: auto scroll smoothly
      if (stack.classList.contains("active")) {
        stack.scrollIntoView({ behavior: "smooth" });
      }

    });

  }

});
document.addEventListener("DOMContentLoaded", function () {

  const dump = document.getElementById("projectsDump");
  const stack = document.getElementById("projectsStack");

  if (dump && stack) {

    dump.addEventListener("click", function () {

      stack.classList.toggle("active");

      // Optional: auto scroll smoothly
      if (stack.classList.contains("active")) {
        stack.scrollIntoView({ behavior: "smooth" });
      }

    });

  }

});
function goToProjects() {
  window.location.href = "projects.html";
}
status.className = "";
status.classList.add("show", "error");
status.innerText = "Please fill all fields!";
status.className = "";
status.classList.add("show", "success");
status.innerText = "Message Sent Successfully!";

