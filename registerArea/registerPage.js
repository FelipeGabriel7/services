const registerButton = document.querySelector("[data-button]")
const passwordInput = document.querySelector("[data-password='first-input']")
const passwordConfirmationInput = document.querySelector('[data-password="confirmation"]')
const failedWarning = document.querySelector('[data-warning="failed"]')
const successWarning =document.querySelector('[data-warning="success"]')
const emailInput = document.querySelector('[data-email]')
const missingEmailWarning = document.querySelector('[data-warning="missing-email"]')

registerButton.addEventListener('click', () =>{
    if (emailInput.value == '' || passwordInput == '' || passwordConfirmationInput == ''){
        missingEmailWarning.classList.toggle('inactive')
        setTimeout(()=>{
            missingEmailWarning.classList.toggle('inactive')
        }, 3000)
    } else if(passwordInput.value == passwordConfirmationInput.value){
        const userData = {login: emailInput.value, password: passwordInput.value}
        localStorage.setItem('userCredentials', JSON.stringify(userData))
        successWarning.classList.toggle('inactive')
        passwordInput.value = ''
        passwordConfirmationInput.value = ''
        emailInput.value = ''
    } else{
        failedWarning.classList.toggle('inactive')
        setTimeout(()=>{
            failedWarning.classList.toggle('inactive')
        }, 3000)
    }
})