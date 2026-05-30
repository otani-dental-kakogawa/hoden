document.querySelector('[data-menu]')?.addEventListener('click',()=>document.getElementById('drawer').classList.toggle('open'));
window.addEventListener('scroll',()=>document.getElementById('header').classList.toggle('scrolled',window.scrollY>20));
