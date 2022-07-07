import styles from "./ProgressBar.module.css"
import Step  from "./Step"

const ProgressBar = ({step}) => {
    const handleProgress = () => {
        if(step === 0){
            return ['0%' , '100%']
        }else if(step === 1){
            return ['33%' , '67%']
        }else if(step === 2){
            return ['66%' , '34%']
        }else if(step === 3){
            return ['100%' , '0%']
        }
    }
    const steps = [{barStep : 0 , title : 'CONTACTO' , position : '0%'},{barStep : 1 , title : "SISTEMA" , position : '26vw'} , {barStep : 2 , title : "FINANCIADORAS" , position : '51.8vw'} ,{barStep : 3 , title : "USUARIOS" , position : '79vw'}];
    const progressPer = handleProgress()

    return(
        <>  
            <div className={styles.barTitles}>
                {steps.map(({title,barStep} , i) => <div key={i} style={{color : barStep <= step ? '#8BC53F' : '#BBBDBF'}}>{title}</div>)}
            </div>
            <div className={styles.bar} style={{backgroundImage: `linear-gradient(to right, #8BC53F ${progressPer[0]}, #F1F1F2 ${progressPer[0]}, #F1F1F2 100%, #8BC53F 100%)`}}>
                {steps.map(({barStep , position} , i) => 
                    step === barStep && <div key={i} className={styles.step} style={{left : position}}/>
                )}
            </div>
        </>

    )
}

export default ProgressBar