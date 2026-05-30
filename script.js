
const header=document.querySelector('.header-wrap');
const onScroll=()=>{ if(window.scrollY>80) header.classList.add('scrolled'); else header.classList.remove('scrolled'); };
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
const btn=document.querySelector('.menu-btn'); const drawer=document.querySelector('.drawer'); const close=document.querySelector('.drawer-close');
if(btn&&drawer){btn.addEventListener('click',()=>drawer.classList.add('open')); close.addEventListener('click',()=>drawer.classList.remove('open')); drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')))}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'80px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
