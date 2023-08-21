let email = document.getElementById("email").value
let password = document.getElementById("password").value

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if(email.value === "teste@gmail.com" && password.value === "123456"){
        console.log("deu bom")
    }else{
        
    }

})