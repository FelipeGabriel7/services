const user = document.querySelector('[data-email]')
const password = document.querySelector('[data-password]')
const login = document.querySelector('[data-button="login"]')
const userCredentials = JSON.parse(localStorage.getItem('userCredentials'))
const failedWarning = document.querySelector('[data-warning="failed"]')

login.addEventListener('click', () => {
    if(user.value != userCredentials.login || password.value != userCredentials.password){
        debugger
        failedWarning.classList.toggle('inactive')
        setTimeout(()=>{
            failedWarning.classList.toggle('inactive')
        }, 3000)
    } else{
        alert("Você será redirecionado ao site.")
    }
})