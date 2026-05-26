const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');
const contactForm = document.getElementById('contactForm');
const currentYear = document.getElementById('currentYear');

currentYear.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
    });
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    const officePhone = '5511993287213';
    const whatsappMessage = `Olá, Dra. Letícia. Vim pelo site e gostaria de atendimento jurídico.%0A%0ANome: ${encodeURIComponent(name)}%0AE-mail: ${encodeURIComponent(email)}%0ATelefone: ${encodeURIComponent(phone)}%0AMensagem: ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/${officePhone}?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
});
