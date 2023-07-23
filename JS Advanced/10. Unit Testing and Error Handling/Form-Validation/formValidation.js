function validate() {
    let submitButtonElement = document.getElementById('submit').addEventListener('click', checkInputs)
    let usernameInputElement = document.getElementById('username');
    let emailInputElement = document.getElementById('email');
    let passwordInputElement = document.getElementById('password');
    let confirmPasswordInputElement = document.getElementById('confirm-password');
    let isCompanyCheckBox = document.getElementById('company');
    isCompanyCheckBox.addEventListener('click', (e) => {
        let companyInfo = document.getElementById('companyInfo');
        if (e.target.checked == true) {
            companyInfo.style.display = 'block'
        } else { companyInfo.style.display = 'none' }
    })


    function checkInputs(e) {
        e.preventDefault()
        let isUsername = false;
        let isPassword = false;
        let isEmail = false
        let isCompanyNumber = true;
        //username check
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        if (usernamePattern.test(usernameInputElement.value)) {
            usernameInputElement.style.border = 'none'
            isUsername = true;
        } else { usernameInputElement.style.borderColor = 'red' }

        //password check
        let passwordPattern = /^[\w]{5,15}$/;
        if (passwordPattern.test(passwordInputElement.value) && passwordPattern.test(confirmPasswordInputElement.value) && passwordInputElement.value === confirmPasswordInputElement.value) {
            confirmPasswordInputElement.style.border = 'none'
            passwordInputElement.style.border = 'none';
            isPassword = true;
        } else {
            passwordInputElement.style.borderColor = 'red'
            confirmPasswordInputElement.style.borderColor = 'red'
        };

        //email check
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        if (emailPattern.test(emailInputElement.value)) {
            emailInputElement.style.border = 'none'
            isEmail = true
        } else {
            emailInputElement.style.borderColor = 'red'
        }

        //if checkbox checked and check content inside
        if (isCompanyCheckBox.checked) {
            let companyNumberPattern = /\b[1-9][0-9]{3}\b/gm;
            let companyNumber = document.getElementById('companyNumber');

            if (companyNumberPattern.test(companyNumber)) {
                companyNumber.style.border = 'none'
            } else {
                companyNumber.style.borderColor = 'red'
                isCompanyNumber = false
            }
        }

        if (isUsername && isPassword && isEmail && isCompanyNumber) {
            document.getElementById('valid').style.display = 'block'
        } else {
            document.getElementById('valid').style.display = 'none'
        }
    }

}
