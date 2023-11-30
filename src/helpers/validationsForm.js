const validationsForm = (formulario) => {

    let errors = {}
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    if(!formulario.name){
        errors.name = 'Obligatorio'
    }else if(formulario.name.length < 3){
        errors.name = 'El nombre debe tener mas letras'
    }
    if(!formulario.lastname){
        errors.lastname = 'Obligatorio'
    }else if(formulario.lastname.length < 2){
        errors.lastname = 'El apellido debe tener mas letras'
    }
    if(!formulario.email){
        errors.email = 'Obligatorio'
    }else if(!regexEmail.test(formulario.email)){
        errors.email = 'El email es invalido'
    }
    if(!formulario.password){
        errors.password = 'Obligatorio'
    }
    if(!formulario.repetPassword){
        errors.repetPassword = 'Obligatorio'
    }else if(formulario.repetPassword !== formulario.password){
        errors.repetPassword = 'Las contraseñas no coinciden'
    }

    return errors
}   

export default validationsForm