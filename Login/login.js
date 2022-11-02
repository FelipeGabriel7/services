const userLogin = JSON.parse(localStorage.getItem('User'));
const password = document.querySelector('.password');
const email = document.querySelector('.email');
const login = document.querySelector('.login');
const error = document.querySelector('.error');
const sucess = document.querySelector('.sucess-message');

console.log(userLogin)

function loginInUserExist(){

  login.addEventListener('click' , () => {

    if(userLogin.password == password.value && userLogin.email == email.value){
      
      setTimeout(() => {
        sucess.innerHTML = " Usuário Logando "
        sucess.classList.remove('inactive');
        sucess.classList.add('sucess');
      } , 500)


      setTimeout(() => {
        window.location.href = '../index.html';
      }, 3000)
    }else{

      error.innerHTML = " Não existe conta vinculada a este usuário "

      setTimeout(() => {
        error.classList.remove('inactive')
        error.classList.add('error')  
      } , 1000);
    }

  })
}

loginInUserExist();