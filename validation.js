let emailInput = document.form.email;
let passwordInput = document.form.password;

const validate = () => {

    // Basic validation (Inputs can't be empty)

    if (emailInput.value == "") {
        alert("Please provide an e-mail");
        emailInput.focus();
        return false;
    }

    if (passwordInput.value == "") {
        alert("Please provide a password");
        passwordInput.focus();
        return false;
    }

    // Advanced password validation 

    return true;
}