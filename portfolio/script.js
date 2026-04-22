// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('.icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Switch icon
    if (document.body.classList.contains('light-mode')) {
        icon.textContent = '☀';
    } else {
        icon.textContent = '☾';
    }
});
