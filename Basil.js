// Load menu from JSON (simulated database)
fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        const menuContainer = document.getElementById('menu-items');
        data.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>$${item.price}</p>
            `;
            menuContainer.appendChild(menuItem);
        });
    })
    .catch(error => console.error('Error loading menu:', error));

// Handle reservation form submission
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reservation submitted! We will contact you soon.');
    // In a real app, send data to a server/database
});

// Simple mobile nav toggle (if needed)
const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
navToggle.style.display = 'none';
navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});
document.querySelector('nav').appendChild(navToggle);

// Show toggle on mobile
if (window.innerWidth <= 768) {
    navToggle.style.display = 'block';
}