import styles from "./Steps.module.css"
import LogoCDI from "../../components/SvgComponents/LogoCDI"
import WzdBtnPrev from "../../components/SvgComponents/WzdBtnPrev"
import ImgPrestador from "../../components/SvgComponents/ImgPrestador"

const StepCliente = ({handleChange , setStep , formData}) => {
    return (
        <div className={styles.container}>
            <ImgPrestador className={styles.svgWzd}/>
            <div className={styles.formContainer}>
                <WzdBtnPrev fill={'#E6E7E8'} onClick={() => setStep(currStep => currStep - 1)} className={styles.svgBtnNext}/>
                <div className={styles.form}>     
                <div>
                    <LogoCDI className={styles.svgLogoCDI}/>
                    <h5>USUARIOS</h5>
                    <div>¡Ya casi terminamos!<br/>
                        Por favor indicanos para qué cliente estás<br/>
                        homologando tu sistema:
                    </div>
                </div>
                    <div>
                        <div className={styles.inputTitle}>RAZON SOCIAL</div>
                        <input type='text' onChange={e => handleChange(e , 'razonSocial')}/>
                    </div>
                    <div>
                        <div className={styles.inputTitle}>CUIT</div>
                        <input type='text' onChange={e => handleChange(e, 'cuit')}/>
                    </div>
                </div>
                <WzdBtnPrev 
                    className={`${styles.svgBtnPrev} ${styles.svgBtnNext}`} 
                    onClick={formData.razonSocial.length > 0 && formData.cuit.length === 11 ? () => setStep(currStep => currStep + 1) : null} 
                    fill={formData.razonSocial.length > 0 && formData.cuit.length === 11 ? "#00ADEE" : 'grey'}/>
            </div>
        </div>
    )
}

export default StepCliente