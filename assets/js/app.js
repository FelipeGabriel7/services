const userLogin = JSON.parse(localStorage.getItem('User'));
const btnLogin = document.querySelector('.login-btn');
const user = document.querySelector('.userName');
const login = document.querySelector('.login');

function verifyIsLogin(){
  if(userLogin){
    btnLogin.style.display = 'none'
    let btn = document.createElement('button');
  
    btn.textContent = 'Sair';
    user.innerHTML = userLogin.name.toUpperCase();

    login.appendChild(user)
    login.appendChild(btn)
    login.classList.add('logged')
    

    btn.addEventListener('click' , () => {
      setTimeout(() => {
        localStorage.clear();
        window.location.reload();
      }, 2000)
    })
  
  }else{
    btnLogin.style.display = 'flex'
  }
}

verifyIsLogin();
