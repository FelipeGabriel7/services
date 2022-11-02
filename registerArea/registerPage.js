const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const register = document.querySelector('.btn-register');
const nameI = document.querySelector('.name');
const error = document.querySelector('.error');
const sucess = document.querySelector('.sucess-message');
const userLogin = JSON.parse(localStorage.getItem('User'))

function AddUser(){

  register.addEventListener('click' , () => {

    if(userLogin.name === nameI.value || password.value === userLogin.password){
      error.innerHTML = " Usuário já existe";
      error.classList.remove('inactive')
      return;
    }

    if(email.value === " " || password.value === " " || 
    confirmPassword.value === "" || nameI.value === " ") {
      error.innerHTML = " Informe os dados "
      error.classList.remove('inactive');
      return;
    }

    if(password.value !== confirmPassword.value){
      error.innerHTML = "As senhas precisam ser iguais";
      error.classList.remove('inactive');
      return;
    };

    const data = {
      name: nameI.value,
      email: email.value,
      password: password.value,
      id: generateRandom(10 , 100),
    }

    localStorage.setItem('User', JSON.stringify(data))

    setTimeout(() => {
      sucess.innerHTML = " Usuário Cadastrado ";
      sucess.classList.remove('inactive');
    } , 2000)

    email.value = "";
    password.value = "";
    nameI.value = "";
    confirmPassword.value = "";

    setTimeout(() => {
      window.location.href = "../Login/login.html";
    } , 4000)

    sucess.classList.add('inactive')
    error.classList.add('inactive');
  });
}


function generateRandom(max , min){
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
}


AddUser();