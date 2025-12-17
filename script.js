/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Experience tabs
    const companyItems = document.querySelectorAll('.company-item');
    const experienceCards = document.querySelectorAll('.experience-card');

    companyItems.forEach(item => {
        item.addEventListener('click', () => {
            const company = item.getAttribute('data-company');
            
            companyItems.forEach(c => c.classList.remove('active'));
            experienceCards.forEach(card => card.classList.remove('active'));
            
            item.classList.add('active');
            document.querySelector(`.experience-card[data-company="${company}"]`).classList.add('active');
        });
    });
});