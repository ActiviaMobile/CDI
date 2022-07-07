import { useState } from "react"

const CheckBox = ({name , id ,  handleChange}) => {
    const [isChecked , setIsChecked] = useState(false)
    // const handleChange = () => setIsChecked(!isChecked)

    return (
        <div style={{display: 'flex' , marginBottom : '7px'}}>
            <input checked={isChecked} onChange={(e) => {
                
                setIsChecked(!isChecked)
                handleChange(e , 'interesan')
                }} type="checkbox" id={id} name={name} value={id}/>
            <div>{name}</div>
        </div>
    )
}

export default CheckBox