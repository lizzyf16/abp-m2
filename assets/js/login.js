const formLoginEl =document.getElementById("formLogin");
if(formLoginEl){
    const emialBD = "usuario@gmail.com";
    const passwordBD = "123456";
    formLoginEl.addEventListener("submit", function(event){
        event.preventDefault();
        const formData = new FormData(formLoginEl);

        let emailUsuario = formData.get("email");
        let passwordUsuario = formData.get("password");
        if(emialBD == emailUsuario && passwordBD == passwordUsuario){
            alert("Ha iniciado sesión correctamente!");

            location.href = "./menu.html";
        }
        else{
            alert("Error, Password y/o email incorrectos.");
        }
    });

}