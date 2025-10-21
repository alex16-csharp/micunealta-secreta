// Mobile menu toggle
(function(){
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav ul');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
    });
  }
})();

// Smooth scroll for in-page anchors
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();

// Basic form handler (demo only)
(function(){
  const form = document.querySelector('.contact-form');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert('Mulțumim! Mesajul tău a fost trimis.\n' + JSON.stringify(data, null, 2));
    form.reset();
  });
})();