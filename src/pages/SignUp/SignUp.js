import React , {useState} from 'react';
import StepRef from './StepRef';
import StepSoftware from './StepSoftware';

const SignUp = () => {
    const [step , setStep] = useState(0)
    const [formData , setFormData] = useState({
        software:'',
        referente:'',
        rubro:'',
        empresa:''
    })
    const FormDisplay = () => {
        if(step === 0){
            return <StepSoftware setSoftware={setFormData} setStep={setStep} formData={formData}/>
        }else if(step === 1){
            return <StepRef setSoftware={setFormData}/>
        }else if(step === 2){
            return <></>
        }
    }
    return(
        <FormDisplay />
    )
}

export default SignUp;