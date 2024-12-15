// Seleccionamos los elementos clave
const ctaButton = document.querySelector('.cta-button');
const heroButton = document.querySelector('.hero-button');
const formSection = document.getElementById('form-section');
const registrationForm = document.getElementById('registration-form');
const storeInfoSection = document.getElementById('store-info');
const storeDetails = document.getElementById('store-details');

// Función para mostrar el formulario
const showForm = () => {
    formSection.style.display = 'block';
    formSection.scrollIntoView({ behavior: 'smooth' });
};

// Asociar el evento click a los botones
if (ctaButton) ctaButton.addEventListener('click', showForm);
if (heroButton) heroButton.addEventListener('click', showForm);

// Manejar el envío del formulario
if (registrationForm) {
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue
    
        // Obtener los valores del formulario
        const storeName = document.getElementById('store-name').value;
        const ownerName = document.getElementById('owner-name').value;
        const email = document.getElementById('email').value;
    
        // Guardar los datos en localStorage
        localStorage.setItem('storeData', JSON.stringify({ storeName, ownerName, email }));
    
        // Redirigir al panel de control
        window.location.href = 'panel.html';
    });
    
};

// Mostrar los datos guardados
const displayStoreData = () => {
    const storedData = JSON.parse(localStorage.getItem('storeData'));

    if (storedData) {
        storeDetails.innerHTML = `
            <strong>Nombre de la tienda:</strong> ${storedData.storeName}<br>
            <strong>Propietario:</strong> ${storedData.ownerName}<br>
            <strong>Correo:</strong> ${storedData.email}
        `;
        storeInfoSection.style.display = 'block';
        storeInfoSection.scrollIntoView({ behavior: 'smooth' });
    }
};

// Llamar a la función para mostrar datos al cargar la página
window.addEventListener('load', displayStoreData);
