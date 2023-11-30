const Input = ({ label, ...rest }) => {
    
    return (
        <div className="control">
            <label className="label"> {label} </label>
            <input className="input" {...rest} /> 
        </div>
    )
}

export default Input