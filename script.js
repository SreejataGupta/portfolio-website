// Toggle navbar for mobile view
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('#nav-links').classList.toggle('show');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for card transformations
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Contact section icons color change on hover
const contactIcons = document.querySelectorAll('#contact i');
contactIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#ffcc00';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = '#333';
    });
});
