const nombre = document.getElementById("name");
const email = document.getElementById("email");
const boton = document.querySelector(".boton-enviar");
const contenedor = document.querySelector("#survey-form");
const fragmento = document.createDocumentFragment();
let resultado = document.querySelector(".red")

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        
       
        
        resultado.innerHTML = error[1]
        resultado.classList.add("red");
    } 
})

const validarCampos = () => {
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40 ) {
        error[0] = true;
        error[1] =  `El nombre es inválido`
     
        return error;
    } else if(email.value.length < 5 || 
              email.value.length > 60 || 
              email.value.indexOf("@") == -1 || 
              email.value.indexOf(".") == -1){
                  error[0] = true;
                  error[1] = "El email es inválido";
                  return error;

    } 
    
    error[0] = false;
    if(typeof resultado !== 'undefined'){
      let container = document.getElementById("ultimo-contenedor")
      container.removeChild(resultado);
    }
    return error;

}