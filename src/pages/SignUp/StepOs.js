import { useState , useEffect , useContext} from "react"
import ImgFinanciadora from "../../components/SvgComponents/ImgFinanciadora"
import WzdBtnPrev from "../../components/SvgComponents/WzdBtnPrev"
import LogoCDI from "../../components/SvgComponents/LogoCDI"
import styles from "./Steps.module.css"
import { wsRequest } from "../../WsRequest/WsRequest"
import { SessionContext } from "../../context/sessionContext"
import CheckBox from "../../components/CheckBox/CheckBox"

const StepOs = ({handleChange , setStep , formData}) => {
    const [financiadoras , setFinanciadoras] = useState([])
    const [showCheckbox , setShowCheckbox] = useState(false)
    const {user} = useContext(SessionContext)

    const handleRsp = (res) => setFinanciadoras(JSON.parse(res))
    
    const handleError = () => console.log('error')

    useEffect(() => {
        console.log(user['TokenGuid'])
        wsRequest(handleRsp , handleError , {'tokenUsuario' : user['TokenGuid']} , 'FinanciadoraGetAll')
    },[user])
    return (
        <div className={styles.container}>
            <ImgFinanciadora className={styles.svgWzd}/>
            <div className={styles.formContainer}>
                <WzdBtnPrev fill={'#E6E7E8'} onClick={() => setStep(currStep => currStep - 1)} className={styles.svgBtnNext}/>
                <div className={styles.form} style={{justifyContent : 'start'}}>
                    <div>
                        <div style={{marginBottom : '60px'}}>
                            <LogoCDI className={styles.svgLogoCDI} />
                        </div>
                        <h5 style={{marginBottom : '40px'}}>FINANCIADORAS DE INTERES</h5>
                        <div>Seleccioná para qué financiadora/obra social<br/>
                            estás haciendo el desarrollo, y qué otras te<br/>
                            gustaría implementar en el corto plazo:
                        </div>
                    </div>
                    <div style={{marginTop : '40px'}}>
                        <div className={styles.inputTitle}>FINANCIADORA PRINCIPAL</div>
                        {financiadoras && 
                            <select value={formData.financiadora} onChange={e => handleChange(e , 'financiadora')} className={styles.combo}>
                                <option value="" disabled hidden></option>
                                {financiadoras.map(({Id,Nombre}) => <option key={Id} value={Id}>{Nombre}</option>)}
                            </select>}
                    </div>
                    <div style={{marginTop: '40px'}}>
                        <div className={styles.inputTitle}>ME INTERESAN</div>
                        <div className={`${styles.combo} ${ showCheckbox && styles.comboCheckbox}`} onClick={() => !showCheckbox && setShowCheckbox(true)}>
                            <div className={styles.comboContainerCheckbox}>
                                {showCheckbox &&                      
                                    financiadoras.map(({Id,Nombre}) => <CheckBox id={Id} name={Nombre} key={Id} handleChange={handleChange}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <WzdBtnPrev
                    className={`${styles.svgBtnPrev} ${styles.svgBtnNext}`} 
                    onClick={formData.financiadora.length > 0 ? () => setStep(currStep => currStep + 1) : null} 
                    fill={formData.financiadora.length > 0 ? "#00ADEE" : 'grey'}/>
            </div>
        </div>
    )
}

export default StepOs