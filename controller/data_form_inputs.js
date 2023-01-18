dataFormInputs.forEach(itemInput => {
    itemInput.addEventListener('blur', (input)=>{
        validar(input.target)
        //console.log("🚀 ~ file: validation.js ~ line 22 ~ itemInput.addEventListener ~ input.target", input.target.validity)
    })


});