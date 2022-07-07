import styles from "./Steps.module.css"
import LogoCDI from "../../components/SvgComponents/LogoCDI"
import WzdBtnPrev from "../../components/SvgComponents/WzdBtnPrev"
import ImgSistema from "../../components/SvgComponents/ImgSistema"
import { useContext, useEffect, useState } from "react"
import { SessionContext } from "../../context/sessionContext"
import { wsRequest } from "../../WsRequest/WsRequest"
import ComboSelect from "../../components/ComboSelect/ComboSelect"

const StepSoftware = ({handleChange , setStep , formData }) => {
    const [ambitos , setAmbitos] = useState([])
    const [etapas , setEtapas] = useState([])
    const {user} = useContext(SessionContext)

    const handleRspAmbitos = (res) =>{ 
        setAmbitos(JSON.parse(res))
        wsRequest( handleRspEtapa , handleError , {'tokenUsuario' : user['TokenGuid']} , 'EtapaGetAll')
    }
    const handleRspEtapa = (res) => setEtapas(JSON.parse(res))
    
    const handleError = () => {}

    useEffect(() => {
        wsRequest( handleRspAmbitos , handleError , {'tokenUsuario' : user['TokenGuid']} , 'AmbitoGetAll')
    },[])
    
     return(
        <div className={styles.container}>
            <ImgSistema className={styles.svgWzd}/>
            <div className={styles.formContainer}>
                <WzdBtnPrev fill={'#E6E7E8'} onClick={() => setStep(currStep => currStep - 1)} className={styles.svgBtnNext}/>
                <div className={styles.form}>    
                    <LogoCDI className={styles.svgLogoCDI}/>
                    <h5>DATOS DEL SISTEMA</h5>
                    <div>
                        <div className={styles.inputTitle}>NOMBRE DEL SOFTWARE</div>
                        <input type='text' value={formData.software} onChange={e => handleChange(e , 'software')}/>
                    </div>
                    <div>
                        <div className={styles.inputTitle}>VERSION ACTUAL</div>
                        <input type='text' value={formData.version} onChange={e => handleChange(e, 'version')}/>
                    </div>
                    <div>
                        <div className={styles.inputTitle}>AMBITO DE USO</div>
                        <select value={formData.ambito} onChange={e => handleChange(e , 'ambito')} className={styles.combo}>
                            <option value="" disabled hidden></option>
                            {ambitos && ambitos.map(({Id,Nombre}) => 
                                <option key={Id} value={Id}>{Nombre}</option>)}
                        </select>
                    </div>
                    <div>
                        <div className={styles.inputTitle}>ETAPA DESARROLLO</div>
                        <select value={formData.etapa} onChange={e => handleChange(e , 'etapa')} className={styles.combo}>
                            <option value="" disabled hidden></option>
                            {etapas && etapas.map(({Id,Nombre}) => 
                                <option key={Id} value={Id}>{Nombre}</option>)}
                        </select>
                    </div>
                </div>
                <WzdBtnPrev
                    fill={formData.etapa.length > 0 && formData.software.length > 0 && formData.version.length > 0 && formData.ambito.length > 0  ? '#00ADEE' : 'grey'}
                    onClick={formData.etapa.length > 0 && formData.software.length > 0 && formData.version.length > 0 && formData.ambito.length > 0  ? () => setStep(currStep => currStep + 1) : null} 
                    className={`${styles.svgBtnPrev} ${styles.svgBtnNext}`}/>
            </div>
         </div>
    )
}

export default StepSoftware