document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded');
  });
 
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 
});


document.querySelectorAll('.slide-in').forEach(el => {
  observer.observe(el);
});
