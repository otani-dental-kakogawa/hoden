const header=document.getElementById('siteHeader');
const menuBtn=document.getElementById('menuBtn');
const mobileNav=document.getElementById('mobileNav');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>20)});
menuBtn?.addEventListener('click',()=>mobileNav.classList.toggle('open'));
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
