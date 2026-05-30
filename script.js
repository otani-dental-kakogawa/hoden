
const header=document.getElementById('siteHeader');
const menuBtn=document.getElementById('menuBtn');
const drawer=document.getElementById('drawer');
window.addEventListener('scroll',()=>{header.classList.toggle('is-scrolled',window.scrollY>24)});
menuBtn?.addEventListener('click',()=>{const open=drawer.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false');drawer.setAttribute('aria-hidden',open?'false':'true')});
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
