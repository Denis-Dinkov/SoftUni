function validate() {
    let usernameInputElement = document.getElementById('username');
    let emailInputElement = document.getElementById('email');
    let passwordInputElement = document.getElementById('password');
    let confirmPasswordInputElement = document.getElementById('confirm-password');
    let isCompanyCheckBox = document.getElementById('company').addEventListener('click', (e) => {
        let companyInfo = document.getElementById('companyInfo');
        if (e.target.checked == true) {
            let companyNumber = document.getElementById('companyNumber');
            companyInfo.style.display = 'block'
        } else { companyInfo.style.display = 'none' }
    })


}
