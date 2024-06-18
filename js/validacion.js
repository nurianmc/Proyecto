//Capturamos el <form></form> entero
const FORM = document.getElementById('formulario');

//Dejamos el <form></form> a la espera de que se envíen sus datos, por tanto el evento submit de <button></button>
FORM.addEventListener('submit', function(event){

    //Paramos este evento principal, que ha permitido que entremos dentro de addEventListener();
    event.preventDefault();

    let email = document.getElementById('email').value;

    //Comprobar que el value es checked 
    let checkbox = document.getElementById('privacidad').checked;

    //Almacenamos el pattern="" que comprobará si el e-mail es válido

    //  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;



    if(email.trim() === ''){
        alert('Por favor, introduce tu email');
        return;
    }

    if (!emailRegex.test(email)){
        alert('Por favor, introduce un email válido');
        event.preventDefault();
    }

    if (!checkbox){
        alert('Debes aceptar los términos y condiciones');
        event.preventDefault();
    }
});