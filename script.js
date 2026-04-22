// EMPIRE RECORDS - Interactive Features

// 1. Smooth Scroll Reveal
// This makes sections fade and slide up as you scroll down the page
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < window.innerHeight - revealPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 0.8s ease-out';
        }
    });
};

// Initial state for sections (hidden)
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
});

window.addEventListener('scroll', revealSections);

// 2. Button Hover Effect
// Adds a subtle glow when hovering over buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.boxShadow = '0 0 20px rgba(255, 62, 62, 0.6)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.boxShadow = 'none';
    });
});

// 3. Simple Welcome Alert (Optional)
console.log("EMPIRE RECORDS: Site Loaded. Welcome, CEO SAKA ABDULSOMAD.");
