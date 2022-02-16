import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthFieldsContainer from "../components/AuthFields/AuthFieldsContainer"
import Logo from "../components/SvgComponents/Logo"
import styles from "./LoginPage.module.css"

export default function LoginPage(){ 
    const [searchParams, setSearchParams] = useSearchParams();
    const [passport , setPassport] = useState();

    const triggerRequest = () => {
        setPassport(searchParams.get("passport="));
        console.log(passport)
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'http://172.16.1.6:8088/', true);
        // build SOAP request
        var sr =
        '<?xml version="1.0" encoding="utf-8"?>'+
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'+
                '<soap:Body>'+
                    '<tokenUsuarioGet xmlns="http://HomologacionWebsiteServices.activia.com.ar/">'+
                        '<passportHash>d14e8caa-761a-403a-86f4-efdbb7ff42d5</passportHash>'+
                    '</tokenUsuarioGet>'+
            '</soap:Body>'+
        '</soap:Envelope>';
    
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText)
                    alert(xmlhttp.responseText);
                    // alert('done. use firebug/console to see network response');
                }
            }
        }
        // Send the POST request
        xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
        xmlhttp.setRequestHeader('SOAPAction', 'http://HomologacionWebsiteServices.activia.com.ar/tokenUsuarioGet');
        //xmlhttp.setRequestHeader('Host','172.16.1.6');
        xmlhttp.send(sr);
        // send request
        // ...
    }
    return(
        <div className={styles.page}>
            <Logo/>
            <AuthFieldsContainer/>
            <button onClick={triggerRequest}>Ganzos</button>
        </div>
    )
}