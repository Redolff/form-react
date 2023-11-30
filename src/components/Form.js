import useFormulario from "../hooks/useFormulario"
import Input from "./Input"
import ErrorMessage from './ErrorMessage'
import validationsForm from "../helpers/validationsForm"

const Form = () => {

    const [ formulario, handleChange, handleBlur, errors, handleSubmit, loading, response ] = useFormulario({
        name: '',
        lastname: '',
        email: '',
        password: '',
        repetPassword: '',
    },
        validationsForm
    )

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input 
                    label={'Nombre:'}
                    type='text'
                    name='name'
                    value={formulario.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {errors.name 
                    && <ErrorMessage 
                            error={errors.name} 
                        />
                }   
                <Input 
                    label={'Apellido:'}
                    type='text'
                    name='lastname'
                    value={formulario.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {errors.lastname 
                    && <ErrorMessage 
                            error={errors.lastname} 
                        />
                }   
                <Input 
                    label={'E-mail:'}
                    type='text'
                    name='email'
                    value={formulario.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {errors.email 
                    && <ErrorMessage 
                            error={errors.email} 
                        />
                } 
                <Input 
                    label={'Contraseña:'}
                    type='password'
                    name='password'
                    value={formulario.password} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required 
                />
                {errors.password 
                    && <ErrorMessage 
                            error={errors.password} 
                        />
                }  
                <Input 
                    label={'Repetir contraseña:'}
                    type='password'
                    name='repetPassword'
                    value={formulario.repetPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {errors.repetPassword 
                    && <ErrorMessage 
                            error={errors.repetPassword} 
                        />
                }  
                <button type="submit">Enviar</button>
            </form>
            {loading && <p> El formulario fue enviado </p>}
            {response && <p> Los datos han sido enviados </p>}
        </div>
    )
}

export default Form