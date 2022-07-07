import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Steps.module.css"
import ImgFin from "../../components/SvgComponents/ImgFin"
import Button from "../../components/Button/Button"
import LogoCDI from "../../components/SvgComponents/LogoCDI"
import { wsRequest } from "../../WsRequest/WsRequest"
import  buildJson  from "../../functions/BuildJson"
import { useContext } from "react"
import { SessionContext } from "../../context/sessionContext"

const StepFin = ({formData}) => {
    const [isLoading , setIsLoading] = useState(true)
    const [softwareId , setSoftwareId] = useState(null)
    const [error , setError] = useState({hasError : false , typeError : ''})
    const {user} = useContext(SessionContext)

    const handleError = (err) => setError({hasError : true , typeError : err})

    const handleSoftwareRsp = (res) => {
        const json = JSON.parse(res)
        const codigoSoft = json[0]['Id']
        console.log(json[0])
        setSoftwareId(codigoSoft)
        setIsLoading(false)
    }

    const handleRsp = (res) => 
       { 
        console.log(res)
        console.log(JSON.parse(res))
        wsRequest(handleSoftwareRsp , handleError , { 'tokenUsuario' : user['TokenGuid'] } , 'SoftwareGetAll')
    }
    
    useEffect(() => {
        const json = JSON.stringify(buildJson(formData ,user))
        wsRequest( handleRsp , handleError , { 'tokenUsuario' : user['TokenGuid'] ,'json' : json} , 'SoftwareCreate')
    } , [])

    return(
        <>
        {
             isLoading ? <div style={{display : 'flex' , justifyContent : 'center' , alignItems:'center' , height : '100vh'}}>Espere...</div> : 
                 error.hasError ? <div>{error.typeError}</div> :
                    <div className={styles.container}>
                        <ImgFin className={styles.svgWzd}/>
                        <div style={{ display : 'flex' , flexDirection : 'column' , justifyContent : 'flex-start'}}>
                            <div style={{marginTop : '20vh'}}>
                                <LogoCDI className={styles.svgLogoCDI}/>    
                            </div>
                            <div>¡GRACIAS!</div>
                            <span>Tu <b>codigo de software</b> es</span>
                            <h1 style={{color : '#8BC53F' , fontSize:'4rem'}}>{softwareId}</h1>
                            <div style={{marginBottom : '90px'}}>Informando tus avances crecerás progresivamente<br/>
                                en tu nivel de homologación, lo que le otorgará a<br/>
                                tu sistema el beneficio de ser un sistema integrado<br/>
                                a la validación en línea, sumando un argumento de<br/>
                                venta!
                            </div>
                            <Link to={"/perfil"}>
                                <Button title={'CONTINUAR A MI DASHBOARD'} isDisable={false} key={'dashboard'}/>
                            </Link>
                        </div>
                    </div>
        }
        </>
    )

}

export default StepFin