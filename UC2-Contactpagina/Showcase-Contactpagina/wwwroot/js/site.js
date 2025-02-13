document.addEventListener("DOMContentLoaded", () => {
    // Form and input elements
    const form = document.querySelector(".form-contactpagina");
    const inputEmail = document.getElementById("email");
    const inputFirstName = document.getElementById("firstname");
    const inputLastName = document.getElementById("lastname");
    const inputPhone = document.getElementById("phone");

    // Validation functions
    const validateEmail = () => {
        const email = inputEmail.value.trim();
        if (!email) {
            inputEmail.setCustomValidity("E-mailadres is verplicht!");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            inputEmail.setCustomValidity("Voer een geldig e-mailadres in!");
        } else if (email.length > 80) {
            inputEmail.setCustomValidity("E-mailadres mag niet langer zijn dan 80 tekens!");
        } else {
            inputEmail.setCustomValidity("");
        }
    };

    const validateRequired = (input, message) => {
        if (!input.value.trim()) {
            input.setCustomValidity(message);
        } else {
            input.setCustomValidity("");
        }
    };

    const validatePhone = () => {
        const phone = inputPhone.value.trim();
        if (!phone) {
            inputPhone.setCustomValidity("Telefoonnummer is verplicht!");
        } else if (!/^\+?[0-9]{10,15}$/.test(phone)) {
            inputPhone.setCustomValidity("Voer een geldig telefoonnummer in!");
        } else {
            inputPhone.setCustomValidity("");
        }
    };

    // Attach real-time validation to input fields
    inputFirstName.addEventListener("input", () => {
        validateRequired(inputFirstName, "Voornaam is verplicht!");
        inputFirstName.reportValidity();
    });

    inputLastName.addEventListener("input", () => {
        validateRequired(inputLastName, "Achternaam is verplicht!");
        inputLastName.reportValidity();
    });

    inputEmail.addEventListener("input", () => {
        validateEmail();
        inputEmail.reportValidity();
    });

    inputPhone.addEventListener("input", () => {
        validatePhone();
        inputPhone.reportValidity();
    });

    // Form submission event
    form.addEventListener("submit", (event) => {
        validateRequired(inputFirstName, "Voornaam is verplicht!");
        validateRequired(inputLastName, "Achternaam is verplicht!");
        validateEmail();
        validatePhone();

        // Prevent submission if the form is invalid
        if (!form.checkValidity()) {
            event.preventDefault();
        }
    });
});
