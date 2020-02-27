
function validar() {
    var name, expresion, number,textarea;

    name_label = document.getElementById("name").value;
    email_label = document.getElementById("email").value;
    number_label = document.getElementById("number").value;
    age = document.getElementById("age").value;
    role = document.getElementById("role").selectedIndex;
    date = document.getElementById("date").selectedIndex;
   
    
    textarea=document.getElementById("textarea").value;

    let hasError = false;

    expresion = /\w+@\w+\.+[a-z]/;

    if (name_label == "" || email_label == "" || number_label == "" || age == "" || role == null || role == 0 || textarea=="") {
        alert("Hay campos vacios");
    }
    else if (Number(name_label)) {
        alert("campo nombre incorrecto")
    }
    else if (!expresion.test(email_label)) {
        alert("el email no es valido");
    }
    else if (isNaN(number_label)) {
        alert("El campo number no es correcto")
    }
    else if (number_label.length < 6 || number_label.length > 20) {
        alert("numero invalido");
    }
    if (!document.querySelector('input[name="A"]:checked')){

        alert('Error, rellena el campo: Would you recommend freeCodeCamp to a friend?');
        hasError=true;

    }

    if (!document.querySelector('input[name="see"]:checked')){

        alert('Error, rellena el campo:What would you like to see improved?');
        return false;

    }

    
    
   

  
    //else if (expresion.test(email_label)){
    //  alert("el email es valido");
    //}




}