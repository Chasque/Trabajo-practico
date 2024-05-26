document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Validar el formulario
        let valid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const reason = document.getElementById('reason');
        const message = document.getElementById('message');

        if (name.value.trim() === '') {
            valid = false;
            alert('El campo nombre es obligatorio.');
        }

        if (email.value.trim() === '') {
            valid = false;
            alert('El campo correo electrónico es obligatorio.');
        }

        if (phone.value.trim() === '') {
            valid = false;
            alert('El campo teléfono es obligatorio.');
        }

        if (reason.value === '') {
            valid = false;
            alert('Debe seleccionar un motivo de contacto.');
        }

        if (message.value.trim() === '') {
            valid = false;
            alert('El campo mensaje es obligatorio.');
        }

        if (valid) {
            alert('Formulario enviado con éxito');
            form.reset();
        }
    });
});