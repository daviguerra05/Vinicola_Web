const signUpButton = document.getElementById('SignUp');
const signInButton = document.getElementById('SignIn');


signUpButton.addEventListener('click', () =>{
    main.classList.add('right-panel-active');
})

signInButton.addEventListener('click', () =>{
    main.classList.remove('right-panel-active');
})

const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  event.preventDefault(); 

 
  const firstName = document.getElementById("name").value;
  const email = document.getElementById("create_email").value;
  const password = document.getElementById("create_password").value;
  const confirmPassword = document.getElementById("create_password_confirm").value;


  if (firstName.length < 5 || email.length < 5 || password.length < 5) {
    alert('Os campos devem ter no minimo 5 caracteres.');
    return;
  }

  
  if (password !== confirmPassword) {
    alert('A senha e a confirmação de senha não correspondem.');
    return;
  }

  
  alert('Criação de login realizada com sucesso!');

const storedEmail = email;
const storedPassword = password;

const loginForm = document.querySelector('.sign-up form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const emailInput = document.querySelector('.sign-up input[name="email"]');
  const passwordInput = document.querySelector('.sign-up input[name="pswd"]');
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredEmail === storedEmail && enteredPassword === storedPassword) {

    alert('Login realizado com sucesso!');

    window.location.href = "./src/pages/criar.html";

  } else {
    alert('Email ou senha inválidos. Tente novamente.');
    emailInput.value = '';
    passwordInput.value = '';
  }
});
});