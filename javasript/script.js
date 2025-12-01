// Dark mode toggle
const toggle = document.getElementById('darkToggle');
if(toggle){
  toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link =>{
  link.addEventListener('click', e =>{
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});
