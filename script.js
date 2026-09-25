const form = document.querySelector('form');
const formStatus = document.querySelector('.form-status');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (formStatus) {
            formStatus.textContent = 'Thanks. Your message is ready to be connected to an email service.';
        }
        form.reset();
    });
}
