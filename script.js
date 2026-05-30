
const header=document.getElementById('siteHeader');
const menuBtn=document.getElementById('menuBtn');
const drawer=document.getElementById('drawer');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>40)});
menuBtn?.addEventListener('click',()=>{const open=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!open));drawer.hidden=open});
document.querySelectorAll('.qa button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
