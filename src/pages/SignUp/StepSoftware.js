import { Button } from '../../components/index.js'
import styles from "./Steps.module.css"

const StepSoftware = ({setSoftware , setStep , formData}) => {
    return(
        <div className={styles.stepContainer}>
            <input placeholder='Software' onChange={(e => setSoftware({...formData, software:e.target.value}))}/>
            <Button title={'Ok'} callback={() => {
                console.log(formData)
                setStep(currStep => currStep + 1)}}/>
        </div>
    )
}

export default StepSoftware