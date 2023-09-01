const servicesLink = document.querySelector('.services');
const dropdown = document.querySelector('.top_nav_dropdown');

servicesLink.addEventListener('mouseover', () => {
    dropdown.style.display = 'block';
});

servicesLink.addEventListener('mouseout', () => {
    dropdown.style.display = 'none';
});

