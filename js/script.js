// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// nav smooth scroll + active link
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
    const target=document.querySelector(a.getAttribute('href'));
    target && target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// demo contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const status = document.getElementById('status');
  status.textContent = 'Sending...';
  setTimeout(()=>{
    status.textContent = 'Thanks! I will get back to you soon.';
    e.target.reset();
  },700);
});
document.getElementById('prefill').addEventListener('click', function(){
  document.getElementById('name').value='Metiorite';
  document.getElementById('email').value='metiorite@example.com';
  document.getElementById('message').value='Hey! I like your work — let\\'s collaborate.';
});

// keyboard-only focus outlines
(function(){
  function handleFirstTab(e){
    if(e.key==='Tab'){
      document.documentElement.classList.add('user-is-tabbing');
      window.removeEventListener('keydown',handleFirstTab);
    }
  }
  window.addEventListener('keydown',handleFirstTab);
})();
