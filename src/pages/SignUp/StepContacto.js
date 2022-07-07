import styles from "./Steps.module.css"
import ImgContactos from "../../components/SvgComponents/ImgContactos"
import LogoCDI from "../../components/SvgComponents/LogoCDI"
import WzdBtnSiguiente from "../../components/SvgComponents/WzdBtnSiguiente"

const StepContacto = ({handleChange , setStep , formData , title}) => {
 // eslint-disable-next-line
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return(
        <div className={styles.container}>
            <ImgContactos className={styles.svgWzd}/>
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    <div>
                        <LogoCDI className={styles.svgLogoCDI}/>
                        <div>Vamos a configurar tu perfil de desarrollador.<br/>Para eso necesitamos que nos facilites<br/>algunos datos de tu empresa y tu sistema.</div>
                    </div>
                    <h5>DATOS DE CONTACTO</h5>
                    <div>
                        <div className={styles.inputTitle}>TU NOMBRE</div>
                        <input type='text' value={formData.referente} onChange={e => handleChange(e , 'referente')}/>
                    </div>
                    <div>
                        <div className={styles.inputTitle}>TU TELEFONO</div>
                        <input type='text' value={formData.telefono} onChange={e => handleChange(e, 'telefono')}/>
                    </div>
                    <div>
                        <div className={styles.inputTitle}>EMPRESA</div>
                        <input type='text' value={formData.empresa} onChange={e => handleChange(e, 'empresa')}/>
                    </div>
                </div>
                <WzdBtnSiguiente 
                    className={styles.svgBtnNext} 
                    onClick={formData.referente.length > 0 && formData.telefono.length === 10 && formData.empresa.length > 0  ? () => setStep(currStep => currStep + 1) : null} 
                    fill={formData.referente.length > 0 && formData.telefono.length === 10 && formData.empresa.length > 0  ? "#00ADEE" : 'grey'}/>
            </div>
        </div>
    )
}

export default StepContacto