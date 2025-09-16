// Small interactions: hamburger toggle + contact form demo
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  ham && ham.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.alignItems = 'flex-start';
  });

  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // small client-side success interaction
    alert('Thanks! Your message was sent (demo). Replace this with real submit logic.');
    form.reset();
  });
});
