import React , {useState} from 'react';
import StepContacto from './StepContacto';
import StepSoftware from "./StepSoftware"
import StepOs from './StepOs';
import styles from "./Steps.module.css";
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import StepCliente from './StepCliente';
import StepFin from './StepFin';

const FormDisplay = ({setStep , formData , handleChange , step }) => {
    if(step === 0){
        return <StepContacto handleChange={handleChange} setStep={setStep} formData={formData} />
    }else if(step === 1){
        return <StepSoftware handleChange={handleChange} setStep={setStep} formData={formData}/>
    }else if(step === 2){
        return <StepOs handleChange={handleChange} setStep={setStep} formData={formData}/>
    }else if(step === 3){
        return <StepCliente handleChange={handleChange} setStep={setStep} formData={formData}/>
    }else if(step === 4){
        return <StepFin formData={formData}/>
    }
}

const SignUp = () => {

    const [step , setStep] = useState(0)
    const [formData , setFormData] = useState({
        telefono:'',
        software:'',
        version:'',
        referente:'',
        ambito: '',
        empresa:'',
        financiadora:'',
        interesan:[],
        razonSocial:'',
        cuit:'',
        etapa:''
    })

    const handleChange = (e , formKey) => 
        setFormData( formKey === 'interesan' ? 
            {...formData , [formKey]:[...formData.interesan , e.target.value]} : 
            {...formData , [formKey]:e.target.value})
    
    return(
        <div className={styles.page}>
            <FormDisplay handleChange={handleChange} setStep={setStep} formData={formData} step={step}/>
            {step !== 4 && <ProgressBar step={step}/>}
        </div>
    )
}

export default SignUp;