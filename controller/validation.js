const dataFormInputs = document.querySelectorAll('input')
const buttonSubmit = document.getElementById('submit-button')

function validar(input) {
    const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  if (input.validity.valid) {
    input.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
  }
}
const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };

const tipoDeErrores = [
    'valueMissing','typeMismatch'
]

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }

dataFormInputs.forEach(itemInput => {
    itemInput.addEventListener('blur', (input)=>{
        validar(input.target)
        //console.log("🚀 ~ file: validation.js ~ line 22 ~ itemInput.addEventListener ~ input.target", input.target.validity)
    })


});


const mensajesDeError = {
    nombre: {valueMissing: "El campo \"Nombre\" NO puede estar vacío",
},
    email:{
        valueMissing: "Complete el campo Email, por favor",
        typeMismatch: "Verifique el formato del Email"
    },
    asunto:{
        valueMissing: "Por favor completa el Asunto"
    },
    mensaje:{
        valueMissing: "Por favor concreta tu mensaje"
    }
}

