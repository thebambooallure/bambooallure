const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
btn?.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* Corrected enquiry modal */
(() => {
  const enquiryModal = document.getElementById("enquiryModal");
  if (!enquiryModal) return;
  document.querySelectorAll(".open-enquiry").forEach(btn => btn.addEventListener("click", () => {
    enquiryModal.classList.add("open"); document.body.style.overflow="hidden";
  }));
  document.querySelectorAll(".close-enquiry").forEach(btn => btn.addEventListener("click", () => {
    enquiryModal.classList.remove("open"); document.body.style.overflow="";
  }));
  const form = document.getElementById("enquiryForm");
  form?.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    const message = `Hi Bamboo Allure, I would like to send an enquiry.

Name: ${f.get("name")}
Phone: ${f.get("phone")}
Address: ${f.get("address")}
PIN Code: ${f.get("pin")}
Message: ${f.get("message")}`;
    window.open("https://wa.me/918217351471?text="+encodeURIComponent(message), "_blank", "noopener");
  });
})();
