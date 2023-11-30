import { useState } from "react"
import helpHttp from "../helpers/helpHttp"

const useFormulario = (inicial, validateForm) => {

    const [formulario, setFormulario] = useState(inicial)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const handleChange = (e) => { 
        e.preventDefault()
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setFormulario(inicial)
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(formulario))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(formulario))
        if(Object.keys(errors).length === 0) {
            setLoading(true)
            helpHttp()
                .post('https://formsubmit.co/ajax/redolfofederico@gmail.com', {
                    body: formulario,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }) 
                .then(res => {
                    setLoading(false)
                    setResponse(true)
                    setTimeout(() => setResponse(false), 5000)
                })
            reset()
        }else{
            return
        }
    }

    return [formulario, handleChange, handleBlur, errors, handleSubmit, loading, response]

}

export default useFormulario