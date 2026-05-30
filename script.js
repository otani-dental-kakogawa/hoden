
const headerWrap=document.getElementById('siteHeader');
const setHeader=()=>{ if(window.scrollY>80){headerWrap?.classList.add('is-scrolled')}else{headerWrap?.classList.remove('is-scrolled')}};
setHeader(); window.addEventListener('scroll',setHeader,{passive:true});
const drawer=document.querySelector('.drawer');
document.querySelector('.menu-btn')?.addEventListener('click',()=>drawer?.classList.add('open'));
document.querySelector('.drawer-close')?.addEventListener('click',()=>drawer?.classList.remove('open'));
drawer?.addEventListener('click',e=>{if(e.target===drawer)drawer.classList.remove('open')});
