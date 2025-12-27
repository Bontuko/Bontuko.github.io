document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal (your existing code)
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach((el) => observer.observe(el));

  // Theme toggle
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️ Light Mode';
    } else {
      toggleBtn.textContent = '🌙 Dark Mode';
    }
  });
});
