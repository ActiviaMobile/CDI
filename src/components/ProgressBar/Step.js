const Step = ({currStep , barStep , title}) => {
    return (
        <>
            <div style={{backgroundColor : currStep > barStep ? '#8BC53F' : '#F1F1F2', width : '20vw' , height : '15px' , borderBottomRightRadius : barStep === 3 ? '15px' : '0px' , borderTopRightRadius : barStep === 3 ? '15px' : '0px' , borderBottomLeftRadius  : barStep === 0 ? '15px' : '0px' , borderTopLeftRadius : barStep === 0 ? '15px' : '0px'}}/>
            <div style={{backgroundColor : 'blue' , borderRadius : '50px' , height : '25px' , width : '25px' , position : 'relative'}}/>
        </>
    )
}

export default Step;