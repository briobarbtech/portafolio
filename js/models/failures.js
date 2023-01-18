export class Failures {
    static tipoDeErrores = [
        'valueMissing','typeMismatch'
    ]
    
    static mensajesDeError = {
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
    
    
}
