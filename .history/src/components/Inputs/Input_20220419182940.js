const Input = ({placeholder , callback}) => {
    return(
        <input placeholder={placeholder} onChange={ e =>  callback(e.target.value)}/>
    )
}