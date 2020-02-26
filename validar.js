
function validar() {
   var name, email;
    name_label = document.getElementById("name").value;
    email_label = document.getElementById("email").value;
    number_label = document.getElementById("number").value;
    age = document.getElementById("age").value;
  
    if (isNaN(name_label)) {
        alert("campo  nombre es valido");
    }
    else if (Number(name_label)){
        alert("campo nombre incorrecto")
    }
    if (isNaN(number_label)){
        alert("El campo numeber no correcto")
    }
    else if (Number(number_label)){
        alert("Campo correcto number")
    }
  
    
}