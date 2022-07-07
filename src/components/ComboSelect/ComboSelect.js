import styles from "../../pages/SignUp/Steps.module.css"

const ComboSelect = ({options , title , handleChange , type , formData}) => {
    return(
        <div>
            <div className={styles.inputTitle}>{title}</div>
            <select value={formData.type} onChange={e => handleChange(e , type)} className={styles.combo}>
                <option value="" disabled hidden></option>
                {options && options.map(({Id,Nombre}) => 
                    <option key={Id} value={Id}>{Nombre}</option>)}
            </select>
        </div>
    )
}

export default ComboSelect